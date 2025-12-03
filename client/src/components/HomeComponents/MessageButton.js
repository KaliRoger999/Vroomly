import React from 'react';
import { Link } from 'react-router-dom';

const MessageButton = ({ id }) => {
  return (
    <Link to={`/view-listing/${id}`} style={{ width: '100%', textDecoration: 'none' }}>
      <button className="btn-primary" style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#343f3e',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer'
      }}> 
        View Details 
      </button>
    </Link>
  );
};

export default MessageButton;