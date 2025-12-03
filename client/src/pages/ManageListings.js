
import Listings from '../components/ManagePageComponents/Listings';
import Navbar from '../components/HomeComponents/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageListings = ({refreshTrigger, setRefreshTrigger}) => {

  const [userListings, setUserListings] = useState([]);
  const navigate = useNavigate();

  // GET ALL listings from current logged in user
  useEffect(() => {
    axios.get('http://localhost:5000/listings/listing-view/my-listings')
    .then((response) => {
      console.log(response.data);
      setUserListings(response.data);
    })
    .catch((err) => {
      console.log(`Error happened at: ${err}`)
    })
  }, [refreshTrigger]);

  const handleEdit = (id) => {
    navigate(`/selling/manage-listings/edit-listing/${id}`)
  };

  async function handleDelete(id){
    try {
      const res = await axios.delete(`http://localhost:5000/listings/${id}`);
      console.log(res.data);
      setRefreshTrigger(prev => prev + 1);
    } catch (error) {
      console.error("Delete failed:", error);
      console.log(error);
    }
  }

  return (
    <>
      <Navbar/>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}>
        <h2 style={{ marginBottom: '2rem', width: '100%', maxWidth: '800px' }}>Your Listings</h2>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {userListings.map((listing) => (
            <Listings
              key={listing.id}
              itemPhoto={listing.item_photo}
              itemName={`${listing.car_year} ${listing.car_make} ${listing.car_model}`}
              price={listing.price}
              location={listing.location}
              onEdit={() => handleEdit(listing.id)}
              onDelete={() => handleDelete(listing.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageListings;
