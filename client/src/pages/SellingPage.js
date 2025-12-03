
import Navbar from '../components/HomeComponents/Navbar';
import SelectListingAction from '../components/SellingPageComponents/SelectListingAction';

const SellingPage = ({userLoggedIn}) => {

  return (
    <>
        <Navbar pageLocation={SellingPage.name}/>
        <SelectListingAction userLoggedIn={userLoggedIn}/>
    </>
  );
};

export default SellingPage;
