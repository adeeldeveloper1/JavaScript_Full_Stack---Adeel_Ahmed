import React from 'react';

import Functional from './practiceProject/components/Functional';


function App() {
  const myNames = [
    "Adeel", "Ali", "Sara", "Zara", "Omar",
    "Bilal", "Hina", "Usman", "Fatima", "Imran"
  ];

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8f9fa',
        }}
      >
        <h1 style={{ marginBottom: '24px' }}>Welcome!</h1>
        <Functional names={myNames} />
      </div>
    </>
  );
}

export default App;
