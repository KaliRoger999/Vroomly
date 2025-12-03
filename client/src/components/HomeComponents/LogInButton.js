import { Link } from "react-router-dom";

const LogInButton = () => {
  return (
    <Link to={'/login'} style={{textDecoration:'none'}}>
      <button className="btn-primary" style={{
        backgroundColor: 'transparent',
        color: '#343f3e',
        border: '1px solid #343f3e',
        padding: '10px 24px',
        borderRadius: '50px',
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        marginRight: '0.5rem'
      }}>
        Log In
      </button>
    </Link>
  )
};

export default LogInButton;