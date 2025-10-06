import React, { useState } from 'react';

const Greetings = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      {!showGreeting ? (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <label>First Name:</label>{' '}
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Surname:</label>{' '}
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <button onClick={() => setShowGreeting(true)}>Submit</button>
        </div>
      ) : (
        <h2>Welcome, {firstName} {surname}!</h2>
        
      )}
    </div>
  );
};

export default Greetings;
