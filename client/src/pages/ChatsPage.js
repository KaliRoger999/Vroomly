import React, { useState, useEffect } from 'react';
import ChatsBar from '../components/ChatsPageComponents/ChatsBar';
import Navbar from '../components/HomeComponents/Navbar';
import ChatContainer from '../components/ChatsPageComponents/ChatContainer';

const ChatsPage = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar pageLocation={ChatsPage.name}/>
        <div style={{display:'flex', flex: 1, height: '100%', minHeight: 0}}>
            <ChatsBar/>
            <ChatContainer chatId={2}/>
        </div>
    </div>
  );
};

export default ChatsPage;
