import Navbar from '../components/HomeComponents/Navbar';
import MainContainer from '../components/HomeComponents/MainContainer';

const Home = ({listings, userLoggedIn}) => {
    return(
        <div style={{display:'flex', flexDirection:'column', height:'100vh'}}>
            <Navbar pageLocation={Home.name} userLoggedIn={userLoggedIn}/>
            <MainContainer listings={listings}/>
        </div>
    )

}

export default Home;