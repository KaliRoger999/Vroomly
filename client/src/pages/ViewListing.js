import React, { useEffect, useState } from 'react';
import ListingSideBar from '../components/ViewListingComponents/ListingSideBar';
import Navbar from '../components/HomeComponents/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewListing = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => { 
        try{ const response = await axios.get(`http://localhost:5000/listings/${id}`); setData(response.data); } catch (err){} 
    }
    if(id) fetchData();
  }, [id]);

  if(!data) return <div style={{display:'flex', justifyContent:'center', marginTop:'5rem'}}>Loading...</div>

  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      <Navbar/>
      <div style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem', color: '#343f3e' }}>{`${data.car_year} ${data.car_make} ${data.car_model}`}</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
          
          <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              padding: '1rem', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minHeight: '400px'
            }}>
            {data.item_photo ? (
              <img src={data.item_photo} alt="Car" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            ) : (
              <div style={{ color: '#8f91a2' }}><i className="fa-regular fa-image" style={{fontSize:'3rem'}}></i></div>
            )}
          </div>

          <ListingSideBar listingData={data} />
        </div>
      </div>
    </div>
  );
};
export default ViewListing;