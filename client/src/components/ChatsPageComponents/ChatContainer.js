

// Use POSTGRES data later so u can store messages from users
const inquiries = [
  {
    id: 1,
    productName: 'Honda Civic 2020',
    messages: [
      { sender: 'self', text: 'Is this still available?' },
      { sender: 'other', text: 'Yes, still available!' },
      { sender: 'self', text: 'Can I come see it this weekend?' },
      { sender: 'other', text: 'Sure! What time?' },
    ]
  },
  {
    id: 2,
    productName: 'Ford F-150',
    messages: [
      { sender: 'self', text: 'Can you send more pictures?' },
      { sender: 'other', text: 'Uploading now.' },
      { sender: 'self', text: 'Thanks!' }
    ]
  },
];


const ChatContainer = ({ chatId }) => {
  const chat = inquiries.find((inq) => inq.id === parseInt(chatId)) || inquiries[0];

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f8f9fa' }}>
      <div style={{padding: '1.5rem', borderBottom: '1px solid #dcedff', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.02)'}}>
          <h4 style={{margin:0, color:'#343f3e'}}>{chat.productName}</h4>
      </div>
      
      <div id='msgContainer' style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {chat.messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.sender === 'self' ? 'flex-end' : 'flex-start',
              background: msg.sender === 'self' ? '#343f3e' : 'white',
              color: msg.sender === 'self' ? 'white' : '#505a5b',
              borderRadius: '18px',
              padding: '12px 20px',
              maxWidth: '60%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              borderBottomRightRadius: msg.sender === 'self' ? '4px' : '18px',
              borderBottomLeftRadius: msg.sender === 'self' ? '18px' : '4px'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      <div style={{ padding:"1.5rem", backgroundColor: 'white', borderTop: '1px solid #dcedff' }}>
          <div style={{display: 'flex', gap: '1rem'}}>
            <input className="input-focus" type='text' style={{
                flex: 1, padding:'1rem', borderRadius: '30px', border: '1px solid #dcedff', backgroundColor: '#f8f9fa'
            }} placeholder='Type a message...'></input>
            <button className="btn-primary" style={{
                width: '50px', height: '50px', borderRadius: '50%', border: 'none', backgroundColor: '#343f3e', color: 'white', cursor: 'pointer'
            }}><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
    </div>
  );
};
export default ChatContainer;