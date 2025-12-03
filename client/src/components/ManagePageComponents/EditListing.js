import React, { useEffect, useState } from 'react';
import Navbar from "../HomeComponents/Navbar";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../HomeComponents/Spinner';

function EditListing({refresh}) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const [formData, setFormData] = useState({
        car_year: '', car_make: '', car_model: '', price: '', location: '', description: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/listings/${id}`);
                const data = response.data;
                setFormData({
                    car_year: data.car_year || '',
                    car_make: data.car_make || '',
                    car_model: data.car_model || '',
                    price: data.price || '',
                    location: data.location || '',
                    description: data.description || ''
                });
                if (data.item_photo) setPreviewUrl(data.item_photo); 
            } catch (err) {
                console.error('Error fetching data', err);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('car_year', formData.car_year);
        data.append('car_make', formData.car_make);
        data.append('car_model', formData.car_model);
        data.append('price', formData.price);
        data.append('location', formData.location);
        data.append('description', formData.description);
        if (selectedFile) data.append('item_photo', selectedFile);

        try {
            await axios.patch(`http://localhost:5000/listings/edit-listing/${id}`, data);
            alert('Listing updated successfully!');
            refresh();
            navigate(`/selling/manage-listings`);
        } catch (err) {
            console.error('Error updating listing', err);
            alert('Failed to update listing.');
        }
    };

    const inputStyle = {
        width: '100%', padding: '12px', borderRadius: '8px', 
        border: '1px solid #8f91a2', outline: 'none',
        fontFamily: 'Montserrat, sans-serif'
    };
    const labelStyle = { marginBottom: '0.5rem', fontWeight: '600', color: '#343f3e', display: 'block' };
    const sectionStyle = { 
        backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', 
        marginBottom: '1.5rem', border: '1px solid #dcedff', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' 
    };

    if (loading) return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Spinner />
        </div>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <h2 style={{ marginBottom: '2rem', color: '#343f3e' }}>Edit Listing</h2>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>

                    <div style={{ ...sectionStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'fit-content' }}>
                        <div style={{ 
                            width: '100%', height: '300px', borderRadius: '8px', 
                            overflow: 'hidden', backgroundColor: '#f8f9fa', marginBottom: '1.5rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #dcedff'
                        }}>
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <span style={{color: '#8f91a2'}}>No Image Selected</span>
                            )}
                        </div>
                        
                         <label className="btn-primary" style={{ 
                             display: 'block', width: '100%', textAlign: 'center',
                             padding: '12px', border: '1px solid #343f3e', borderRadius: '8px',
                             cursor: 'pointer', fontWeight: '600', color: '#343f3e'
                         }}>
                            <i className="fa-solid fa-camera"></i> Change Photo
                            <input type="file" name="item_photo" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                        </label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <div style={sectionStyle}>
                            <div style={{...labelStyle, marginBottom: '1rem'}}>Vehicle Details</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <input className="input-focus" type="text" name="car_year" placeholder="Year" value={formData.car_year} onChange={handleChange} style={inputStyle} required />
                                <input className="input-focus" type="text" name="car_make" placeholder="Make" value={formData.car_make} onChange={handleChange} style={inputStyle} required />
                                <input className="input-focus" type="text" name="car_model" placeholder="Model" value={formData.car_model} onChange={handleChange} style={inputStyle} required />
                            </div>
                        </div>

                        <div style={sectionStyle}>
                            <label style={labelStyle}>Price ($)</label>
                            <input className="input-focus" type="number" name="price" value={formData.price} onChange={handleChange} style={{...inputStyle, fontWeight: 'bold'}} required />
                        </div>

                        <div style={sectionStyle}>
                            <label style={labelStyle}>Location</label>
                            <input className="input-focus" type="text" name="location" value={formData.location} onChange={handleChange} style={inputStyle} required />
                        </div>

                        <div style={{...sectionStyle, flex: 1, display: 'flex', flexDirection: 'column'}}>
                            <label style={labelStyle}>Description</label>
                            <textarea className="input-focus" name="description" value={formData.description} onChange={handleChange} style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} required />
                        </div>

                        <button className="btn-primary" type="submit" style={{ 
                            width: '100%', 
                            padding: '16px', 
                            backgroundColor: '#343f3e', 
                            color: 'white',
                            border: 'none', 
                            borderRadius: '8px',
                            cursor: 'pointer', 
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            marginTop: '1rem',
                            boxShadow: '0 4px 12px rgba(52, 63, 62, 0.2)'
                        }}>
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditListing;