import { Link } from "react-router-dom";

const ChatsButton = () => {
    return(
        <Link to={'/chats'} style={{textDecoration:'none'}}>
            <button className="btn-primary" style={{
                backgroundColor: '#343f3e', 
                color: 'white',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 6px rgba(52, 63, 62, 0.2)'
            }}>
                <i className="fa-regular fa-comment-dots"></i> Chats
            </button>
        </Link>
    )
}

export default ChatsButton;