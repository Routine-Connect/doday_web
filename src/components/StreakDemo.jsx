import React from 'react';
import { motion } from 'framer-motion';

const days = ['월', '화', '수', '목', '금', '토', '일'];
const done = [true, true, true, true, false, false, false];

function StreakDemo() {
  return (
    <section id="통계" style={{ padding: '80px 24px', background: '#F5F0E8' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '28px', fontWeight: '600', color: '#3D2B1F', textAlign: 'center', marginBottom: '48px' }}
      >
        오늘의 달성률을 확인해요
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '360px', margin: '0 auto',
          background: '#fff', borderRadius: '28px',
          padding: '32px', border: '1.5px solid #EDE3D0',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: '48px', fontWeight: '600', color: '#C49A6C' }}
            >
              4
            </motion.div>
            <div style={{ fontSize: '13px', color: '#9A7B5C' }}>연속 달성일</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#3D2B1F' }}>이번 주</div>
            <div style={{ fontSize: '13px', color: '#9A7B5C', marginTop: '4px' }}>4 / 7 완료</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          {days.map((day, i) => (
            <motion.div
              key={day}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
              style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: done[i] ? '500' : '400',
                background: done[i] ? '#C49A6C' : '#FBF7F0',
                color: done[i] ? '#fff' : '#9A7B5C',
                border: done[i] ? 'none' : '1.5px solid #EDE3D0',
              }}
            >
              {day}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default StreakDemo;