import React from 'react';
import Chats from './Chats';

const inquiries = [
  { id: 1, itemPhoto: '', productName: 'Honda Civic 2020', latestMessage: 'Is this still available?' },
  { id: 2, itemPhoto: '', productName: 'Ford F-150', latestMessage: 'Can you send more pictures?' },
];

const ChatsBar = () => {
  const handleSelectChat = (inquiry) => { alert('Selected chat for ' + inquiry.productName); };
  return (
    <aside style={{ flexBasis: '350px', backgroundColor: 'white', borderRight: '1px solid #dcedff', height:'100%', overflowY: 'auto' }}>
      <div style={{padding: '1.5rem', borderBottom: '1px solid #dcedff', fontWeight: 'bold', fontSize: '1.2rem'}}>
        Messages
      </div>
      {inquiries.map((item, idx) => (
        <Chats
          key={item.id || idx}
          itemPhoto={item.itemPhoto}
          productName={item.productName}
          latestMessage={item.latestMessage}
          onClick={() => handleSelectChat(item)}
        />
      ))}
    </aside>
  );
};
export default ChatsBar;