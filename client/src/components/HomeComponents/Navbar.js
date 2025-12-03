import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import ChatsButton from './ChatsButton';

const Navbar = ({pageLocation, userLoggedIn}) => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div>
        <Link to={'/'} style={{textDecoration:'none', color:'#343f3e'}}>
          <p style={{
            fontSize: '1.8rem', 
            fontWeight: '700', 
            margin: 0, 
            letterSpacing: '-0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <i className="fa-solid fa-car-side"></i> Vroomly
          </p>
        </Link>
      </div>
      
      {pageLocation === 'Home' && <div style={{flex: 1, margin: '0 2rem'}}><SearchBar /></div>}
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center'}}>
        {pageLocation === 'Home' && (
          userLoggedIn?.loggedIn ? (<ChatsButton/>) : (<><LogInButton/><SignUpButton/></>)
        )}
      </div>
    </nav>
  );
};

export default Navbar;