import React from 'react';

function Welcome({ onSubscribe }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome Visitor!</h1>
      <button onClick={onSubscribe} style={{ padding: '8px 16px', fontSize: '16px', marginTop: '16px' }}>
        Subscribe
      </button>
    </div>
  );
}

export default Welcome;
