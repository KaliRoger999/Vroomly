import MessageButton from './MessageButton';
import { Link } from 'react-router-dom';

const ItemCard = ({ itemId, itemPhoto, productName, price, location, mileage }) => {

  const formattedPrice = new Intl.NumberFormat('en-US').format(price);
  const formattedMileage = new Intl.NumberFormat('en-US').format(mileage);

  return (
    <Link to={`/view-listing/${itemId}`} style={{textDecoration:'none'}}>
      <div className="hover-card" style={{
      boxSizing: 'border-box',
      backgroundColor: 'white',
      borderRadius: '16px',
      border: '1px solid #dcedff',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      width: '300px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
      cursor: 'pointer'
      }}>
        <div style={{ 
          width: '100%', 
          height: '180px', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          backgroundColor: '#f8f9fa',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {itemPhoto ? 
            <img src={itemPhoto} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
            : <i className="fa-regular fa-image" style={{fontSize: '2rem', color: '#8f91a2'}}></i>
          }
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#343f3e' }}>
            { parseInt(price) === 0 ? 'Free' : `$${formattedPrice}` }
          </span>
        </div>

        <div style={{ fontSize: '1rem', fontWeight: '600', color: '#505a5b', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {productName}
        </div>
        
        <div style={{ fontSize: '0.9rem', color: '#8f91a2', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <i className="fa-solid fa-location-dot"></i> {location}
        </div>
        
        <div style={{ fontSize: '0.85rem', color: '#8f91a2', marginBottom: '1rem' }}>
          {mileage ? `${formattedMileage} KM` : "Mileage N/A"}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <MessageButton id={itemId} />
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;