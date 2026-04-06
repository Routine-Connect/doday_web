import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#FBF7F0',
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #EDE3D0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            background: '#C49A6C',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#fff', fontSize: '18px', fontWeight: '500' }}>+</span>
        </div>
        <span style={{ fontSize: '20px', fontWeight: '600', color: '#3D2B1F' }}>DoDay</span>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <a href="#기능" style={{ fontSize: '14px', color: '#7A5C44', textDecoration: 'none', cursor: 'pointer' }}>기능</a>
        <a href="#통계" style={{ fontSize: '14px', color: '#7A5C44', textDecoration: 'none', cursor: 'pointer' }}>통계</a>
        <a href="#다운로드" style={{ fontSize: '14px', color: '#7A5C44', textDecoration: 'none', cursor: 'pointer' }}>다운로드</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;