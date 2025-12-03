import { Link } from "react-router-dom";

const SignUpButton = () => {
  return(
    <Link to={'/sign-up'} style={{textDecoration:'none'}}>
      <button className="btn-primary" style={{
        backgroundColor: '#343f3e',
        color: 'white',
        border: 'none',
        padding: '10px 24px',
        borderRadius: '50px', 
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(52, 63, 62, 0.2)'
      }}>
        Sign Up
      </button>
    </Link>
  )
};

export default SignUpButton;