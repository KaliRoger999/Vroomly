import React from 'react';

const Spinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      minHeight: '200px'
    }}>
      <div className="loading-spinner" style={{
        width: '50px',
        height: '50px',
        border: '5px solid #dcedff',
        borderTop: '5px solid #343f3e',
        borderRadius: '50%'
      }}></div>
    </div>
  );
};

export default Spinner;