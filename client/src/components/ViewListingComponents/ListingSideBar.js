import React from 'react';

const ListingSideBar = ({ listingData }) => {
  const boxStyle = {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      border: '1px solid #dcedff'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div style={boxStyle}>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: '#343f3e', marginBottom: '0.5rem' }}>
             ${new Intl.NumberFormat('en-US').format(listingData.price)}
        </div>
        <div style={{ color: '#8f91a2', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fa-solid fa-location-dot"></i> {listingData.location}
        </div>
      </div>

      <div style={{ ...boxStyle, flex: 1 }}>
        <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#343f3e' }}>Description</div>
        <div style={{ lineHeight: '1.6', color: '#505a5b' }}>{listingData.description}</div>
      </div>

      <button className="btn-primary" style={{ 
        width: '100%', 
        padding: '1rem', 
        background: '#343f3e', 
        color: 'white',
        border: 'none', 
        borderRadius: '12px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(52, 63, 62, 0.2)'
      }}>
        <i className="fa-regular fa-envelope"></i> Contact Seller
      </button>
    </div>
  );
};

export default ListingSideBar;