import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="17" rx="3" stroke="#C49A6C" strokeWidth="2"/>
        <path d="M8 2v4M16 2v4M3 10h18" stroke="#C49A6C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    name: '루틴 설정',
    desc: '요일별 알림으로 내 루틴을 관리해요',
    bg: '#FFF3E8',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#4caf7d" strokeWidth="2"/>
        <path d="M8 12l3 3 5-5" stroke="#4caf7d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: '데일리 체크',
    desc: '오늘 할 루틴을 한눈에 확인하고 완료해요',
    bg: '#F0FBF4',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-8 4 5 3-3 4 6" stroke="#378ADD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: '성취도 리포트',
    desc: '월간 달력과 스트릭으로 성장을 확인해요',
    bg: '#F0F4FB',
  },
];

function TiltCard({ feature, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-60, 60], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      style={{ perspective: 600 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          background: '#fff',
          borderRadius: '24px',
          padding: '32px 24px',
          textAlign: 'center',
          border: '1.5px solid #EDE3D0',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          position: 'relative',
          overflow: 'hidden',
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '-30%', left: '-30%',
            width: '80%', height: '80%',
            background: 'radial-gradient(circle, rgba(196,154,108,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        <div style={{
          width: '60px', height: '60px',
          background: feature.bg, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          {feature.icon}
        </div>
        <div style={{ fontSize: '16px', fontWeight: '600', color: '#3D2B1F', marginBottom: '8px' }}>
          {feature.name}
        </div>
        <div style={{ fontSize: '13px', color: '#9A7B5C', lineHeight: 1.6 }}>
          {feature.desc}
        </div>
      </motion.div>
    </motion.div>
  );
}

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
          <TiltCard key={f.name} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Features;