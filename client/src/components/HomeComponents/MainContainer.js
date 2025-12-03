import SideBar from './SideBar';
import ItemList from './ItemList';

const MainContainer = ({listings}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', boxSizing:'border-box', maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
      <SideBar />
      <div style={{ flex: 1 }} id='itemsContainer'>
        <ItemList items={listings}/>
      </div>
    </div>
  );
};

export default MainContainer;