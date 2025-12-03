import { Link } from 'react-router-dom';

const SelectListingAction = ({userLoggedIn}) => {

  const cardStyle = {
    flex: 1,
    minWidth: '280px',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '3rem 2rem',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#343f3e',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid #dcedff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    color: '#8f91a2'
  };

  return (
    <div style={{ padding: '3rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ 
          marginBottom: '2rem', 
          textAlign: 'center', 
          fontSize: '2rem', 
          color: '#343f3e', 
          fontWeight: '700'
      }}>
        Selling Dashboard
      </h2>
      
      <div style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap'
      }}>
        {userLoggedIn.loggedIn ? (
          <>
            <Link to={'/selling/create-listing'} className="hover-card" style={cardStyle}>
              <i className="fa-solid fa-circle-plus" style={{...iconStyle, color: '#343f3e'}}></i>
              <div>
                <h3 style={{margin: '0 0 0.5rem 0'}}>Create New Listing</h3>
                <p style={{margin: 0, color: '#8f91a2'}}>List a car for sale in minutes</p>
              </div>
            </Link>

            <Link to={'/selling/manage-listings'} className="hover-card" style={cardStyle}>
              <i className="fa-solid fa-list-check" style={iconStyle}></i>
              <div>
                <h3 style={{margin: '0 0 0.5rem 0'}}>Manage Your Listings</h3>
                <p style={{margin: 0, color: '#8f91a2'}}>Edit, delete, or view your current ads</p>
              </div>
            </Link>
          </>
        ) : (
          <div style={{
              display:'flex', 
              flexDirection:'column', 
              alignItems:'center', 
              width: '100%', 
              gap: '2rem'
          }}>
            <div style={{
                backgroundColor: '#fff3cd', 
                color: '#856404', 
                padding: '1rem 2rem', 
                borderRadius: '8px', 
                border: '1px solid #ffeeba',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span style={{fontWeight: '600'}}>You must be logged in to access selling tools.</span>
            </div>
            
            <Link to={'/login'} className="hover-card" style={cardStyle}>
              <i className="fa-solid fa-right-to-bracket" style={{...iconStyle, color: '#343f3e'}}></i>
              <div>
                <h3 style={{margin: '0 0 0.5rem 0'}}>Log In to Continue</h3>
                <p style={{margin: 0, color: '#8f91a2'}}>Access your dashboard</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectListingAction;