import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import quokka from '../assets/quokka.png';

function Hero() {
  const [isJumping, setIsJumping] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600);
  };

  return (
    <section style={{
      background: '#F5F0E8',
      padding: '80px 24px 60px',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        borderRadius: '50%', background: '#EDE3D0',
        top: '-100px', left: '-100px', opacity: 0.5,
      }} />
      <div style={{
        position: 'absolute', width: '250px', height: '250px',
        borderRadius: '50%', background: '#EDE3D0',
        bottom: '-60px', right: '-40px', opacity: 0.4,
      }} />

      <motion.div
        style={{ display: 'inline-block', cursor: 'pointer', rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={isJumping ? { y: [0, -40, 0] } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={quokka}
          alt="DoDay 쿼카 마스코트"
          style={{ width: '220px', height: '220px', objectFit: 'contain' }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ fontSize: '40px', fontWeight: '600', color: '#3D2B1F', marginTop: '24px', lineHeight: 1.3 }}
      >
        오늘도 두데이와 함께<br />작은 습관 하나씩 🌱
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ fontSize: '16px', color: '#7A5C44', marginTop: '16px', lineHeight: 1.8 }}
      >
        루틴을 설정하고, 매일 체크하고,<br />성장하는 나를 확인해요.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        whileHover={{ scale: 1.05, background: '#A67C52' }}
        whileTap={{ scale: 0.97 }}
        style={{
          marginTop: '32px',
          background: '#C49A6C', color: '#fff', border: 'none',
          borderRadius: '50px', padding: '16px 40px',
          fontSize: '16px', fontWeight: '500', cursor: 'pointer',
        }}
      >
        앱 다운로드
      </motion.button>
    </section>
  );
}

export default Hero;