function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#0f0f13', 
      color: '#ffffff', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌌 Qayoverse</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Официальный сайт сообщества</p>
      <a 
        href="https://discord.gg/your-invite-link" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          background: '#5865F2',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        Присоединиться к Discord
      </a>
    </div>
  )
}

export default App
