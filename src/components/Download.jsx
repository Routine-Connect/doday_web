import React from 'react';
import { motion } from 'framer-motion';

function Download() {
  return (
    <section id="다운로드" style={{
      padding: '80px 24px',
      background: '#3D2B1F',
      textAlign: 'center',
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '32px', fontWeight: '600', color: '#F5F0E8', marginBottom: '12px' }}
      >
        지금 바로 시작해요
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ fontSize: '15px', color: '#9A7B5C', marginBottom: '36px' }}
      >
        작은 습관이 내일의 나를 만든다
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ scale: 1.05, background: '#A67C52' }}
        whileTap={{ scale: 0.97 }}
        style={{
          background: '#C49A6C', color: '#fff', border: 'none',
          borderRadius: '50px', padding: '16px 40px',
          fontSize: '16px', fontWeight: '500', cursor: 'pointer',
        }}
      >
        앱스토어에서 다운로드
      </motion.button>
    </section>
  );
}

export default Download;