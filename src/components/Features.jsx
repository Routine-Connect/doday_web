import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '📅',
    name: '루틴 설정',
    desc: '요일별 알림으로 내 루틴을 관리해요',
    color: '#FFF3E8',
  },
  {
    icon: '✅',
    name: '데일리 체크',
    desc: '오늘 할 루틴을 한눈에 확인하고 완료해요',
    color: '#F0FBF4',
  },
  {
    icon: '📊',
    name: '성취도 리포트',
    desc: '월간 달력과 스트릭으로 성장을 확인해요',
    color: '#F0F4FB',
  },
];

function Features() {
  return (
    <section id="기능" style={{ padding: '80px 24px', background: '#FBF7F0' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '28px', fontWeight: '600', color: '#3D2B1F', textAlign: 'center', marginBottom: '48px' }}
      >
        이런 기능이 있어요
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        {features.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '32px 24px',
              textAlign: 'center',
              border: '1.5px solid #EDE3D0',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: '60px', height: '60px',
              background: f.color, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px', fontSize: '28px',
            }}>
              {f.icon}
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#3D2B1F', marginBottom: '8px' }}>
              {f.name}
            </div>
            <div style={{ fontSize: '13px', color: '#9A7B5C', lineHeight: 1.6 }}>
              {f.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;