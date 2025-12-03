const SearchBar = () => {
  return (
    <div style={{position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto'}}>
        <i className="fa-solid fa-magnifying-glass" style={{position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#8f91a2'}}></i>
        <input 
            className="input-focus"
            type="text" 
            placeholder="Search make, model, or year..." 
            style={{
                width: '100%',
                padding: '12px 12px 12px 45px',
                borderRadius: '50px',
                border: '1px solid #dcedff',
                backgroundColor: '#f8f9fa',
                fontSize: '1rem',
                color: '#505a5b'
            }}
        />
    </div>
  );
};

export default SearchBar;