import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const days = ['월', '화', '수', '목', '금', '토', '일'];
const done = [true, true, true, true, false, false, false];
const weekData = [45, 58, 63, 71];

function StreakDemo() {
  const svgRef = useRef(null);

  useEffect(() => {
    const w = 220, h = 80, pad = 12;
    const minV = 30, maxV = 85;
    const xs = weekData.map((_, i) => pad + i * ((w - pad * 2) / (weekData.length - 1)));
    const ys = weekData.map(v => h - pad - ((v - minV) / (maxV - minV)) * (h - pad * 2));

    let linePath = `M ${xs[0]} ${ys[0]}`;
    for (let i = 1; i < xs.length; i++) {
      const cpx = (xs[i - 1] + xs[i]) / 2;
      linePath += ` C ${cpx} ${ys[i - 1]}, ${cpx} ${ys[i]}, ${xs[i]} ${ys[i]}`;
    }

    const areaPath = linePath + ` L ${xs[xs.length - 1]} ${h} L ${xs[0]} ${h} Z`;

    if (svgRef.current) {
      svgRef.current.querySelector('#line-path').setAttribute('d', linePath);
      svgRef.current.querySelector('#area-path').setAttribute('d', areaPath);

      const dotsGroup = svgRef.current.querySelector('#dots-group');
      dotsGroup.innerHTML = '';
      xs.forEach((x, i) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', ys[i]);
        circle.setAttribute('r', '4');
        circle.setAttribute('fill', '#C49A6C');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '2');
        dotsGroup.appendChild(circle);
      });
    }
  }, []);

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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        maxWidth: '700px',
        margin: '0 auto',
      }}>

        {/* 스트릭 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#fff', borderRadius: '24px',
            padding: '28px', border: '1.5px solid #EDE3D0',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '44px', fontWeight: '600', color: '#C49A6C', lineHeight: 1 }}>4</div>
              <div style={{ fontSize: '12px', color: '#9A7B5C', marginTop: '4px' }}>연속 달성일 🔥</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#3D2B1F' }}>이번 주</div>
              <div style={{ fontSize: '12px', color: '#9A7B5C', marginTop: '4px' }}>4 / 7 완료</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
            {days.map((day, i) => (
              <motion.div
                key={day}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 200 }}
                style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: done[i] ? '600' : '400',
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

        {/* 선 그래프 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            background: '#fff', borderRadius: '24px',
            padding: '28px', border: '1.5px solid #EDE3D0',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#9A7B5C', marginBottom: '4px' }}>월간 추이</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#3D2B1F' }}>4주 달성률</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '22px', fontWeight: '600', color: '#C49A6C' }}>↑ 12%</div>
              <div style={{ fontSize: '11px', color: '#9A7B5C', marginTop: '2px' }}>지난 주 대비</div>
            </div>
          </div>

          <svg ref={svgRef} width="100%" height="100" viewBox="0 0 220 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C49A6C" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#C49A6C" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path id="area-path" d="" fill="url(#lineGrad)"/>
            <path id="line-path" d="" fill="none" stroke="#C49A6C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="dots-group"/>
          </svg>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
            {['1주', '2주', '3주', '4주'].map((w) => (
              <span key={w} style={{ fontSize: '10px', color: '#9A7B5C' }}>{w}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default StreakDemo;