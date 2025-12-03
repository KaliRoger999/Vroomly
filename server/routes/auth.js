const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../database');

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username",
            [username, email, hashedPassword]
        );

        res.status(201).json({ user: newUser.rows[0] });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

        if (user.rows.length === 0) {
            return res.status(400).json("Cannot find user");
        }

        const isValidPassword = await bcrypt.compare(password, user.rows[0].password_hash);

        if (!isValidPassword) {
            return res.status(403).json("Not Allowed");
        }

        req.session.user = {
            id: user.rows[0].id,
            username: user.rows[0].username
        }

        res.json("Login Successful");

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.get('/me', (req, res) => {
    try{
        if(req.session.user) {
        res.json({
            loggedIn: true,
            user: req.session.user
        });
    }
    else {
        res.json({
            loggedIn: false,
            user: null
        })
        }
    }
    catch (err){
        console.error(err);
    }
});


module.exports = router;
