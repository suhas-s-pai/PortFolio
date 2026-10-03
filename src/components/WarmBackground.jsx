import React from 'react';

export default function WarmBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      {/* Soft warm radial gradient glow top right */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(201, 111, 74, 0.07) 0%, rgba(247, 241, 232, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
        }}
      />

      {/* Soft warm beige accent bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(237, 226, 211, 0.6) 0%, rgba(247, 241, 232, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}
