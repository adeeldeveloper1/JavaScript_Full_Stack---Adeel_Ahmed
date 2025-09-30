import React, { useState } from 'react';

function Stats() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div style={{ textAlign: 'center', margin: 32 }}>
      <h1>{subscribed ? 'Thanks for subscribing!' : 'Welcome Visitor!'}</h1>
      <button
        onClick={() => setSubscribed(true)}
        style={{ padding: '8px 16px', fontSize: 16, marginTop: 16, color: 'white', background: 'red', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        disabled={subscribed}
      >
        {subscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  );
}

export default Stats;
