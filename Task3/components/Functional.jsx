import React from 'react';
import NameCard from './Names/NameCard';

export default function Functional({ names }) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '16px' }}>List of Names:</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        {names.map((name, index) => (
          <NameCard key={index} name={name} />
        ))}
      </div>
    </div>
  );
}
