import React from 'react';

const Listings = ({ itemPhoto, itemName, price, location, onEdit, onDelete }) => {
  const formattedPrice = new Intl.NumberFormat('en-US').format(price);

  return (
    <div className="hover-card" style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      border: '1px solid #dcedff',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      width: '100%',
      maxWidth: '900px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
      transition: 'transform 0.2s ease'
    }}>
      
      <div style={{
        width: '150px',
        height: '120px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        border: '1px solid #dcedff'
      }}>
        {itemPhoto ? (
          <img src={itemPhoto} alt={itemName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <i className="fa-regular fa-image" style={{fontSize: '2rem', color: '#8f91a2'}}></i>
        )}
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: '#343f3e', fontWeight: '700' }}>{itemName}</h4>
        <div style={{ marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '600', color: '#505a5b' }}>${formattedPrice}</div>
        <div style={{ marginBottom: '0.5rem', color: '#8f91a2', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <i className="fa-solid fa-location-dot"></i> {location}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', minWidth: '120px' }}>
        <button 
            className="btn-primary" 
            onClick={onEdit} 
            style={{ 
                padding: '10px 16px', 
                backgroundColor: '#343f3e', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
            }}>
            <i className="fa-solid fa-pen"></i> Edit
        </button>
        <button 
            className="btn-primary" 
            onClick={onDelete} 
            style={{ 
                padding: '10px 16px', 
                backgroundColor: 'white', 
                color: '#d9534f',
                border: '1px solid #d9534f', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
            }}>
            <i className="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default Listings;