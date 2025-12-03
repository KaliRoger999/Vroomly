const Chats = ({ itemPhoto, productName, latestMessage, onClick }) => {
  return (
    <div onClick={onClick} className="hover-card" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '1rem', 
        borderBottom: '1px solid #f0f0f0', 
        cursor: 'pointer',
        transition: 'background-color 0.2s'
    }}>
      <div style={{ 
          width: '50px', height: '50px', marginRight: '1rem', 
          borderRadius: '50%', backgroundColor: '#dcedff', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' 
      }}>
        {itemPhoto ? <img src={itemPhoto} alt={productName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
        : <i className="fa-solid fa-user" style={{color: '#8f91a2'}}></i>}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{fontWeight: '600', color: '#343f3e', marginBottom: '4px'}}>{productName}</div>
        <div style={{ fontSize: '0.9em', color: '#8f91a2' }}>{latestMessage}</div>
      </div>
    </div>
  );
};
export default Chats;