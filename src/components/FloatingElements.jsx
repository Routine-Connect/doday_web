import React, { useEffect, useRef } from 'react';

const shapes = [
  { size: 8, opacity: 0.35, speed: 0.3 },
  { size: 12, opacity: 0.3, speed: 0.2 },
  { size: 6, opacity: 0.4, speed: 0.4 },
  { size: 10, opacity: 0.28, speed: 0.25 },
  { size: 7, opacity: 0.35, speed: 0.35 },
  { size: 14, opacity: 0.25, speed: 0.15 },
  { size: 9, opacity: 0.32, speed: 0.28 },
  { size: 5, opacity: 0.4, speed: 0.45 },
  { size: 11, opacity: 0.28, speed: 0.22 },
  { size: 8, opacity: 0.33, speed: 0.32 },
  { size: 6, opacity: 0.38, speed: 0.38 },
  { size: 13, opacity: 0.27, speed: 0.18 },
];

function FloatingElements() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = shapes.map((s, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * document.body.scrollHeight,
      size: s.size,
      opacity: s.opacity,
      speed: s.speed,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * 0.01,
      floatOffset: Math.random() * Math.PI * 2,
    }));

    const drawPaw = (ctx, x, y, size, opacity) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#C49A6C';

      // 발바닥 메인
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.2, size * 0.55, size * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();

      // 발가락 4개
      const toeOffsets = [
        { dx: -size * 0.5, dy: -size * 0.35 },
        { dx: -size * 0.17, dy: -size * 0.52 },
        { dx: size * 0.17, dy: -size * 0.52 },
        { dx: size * 0.5, dy: -size * 0.35 },
      ];
      toeOffsets.forEach(({ dx, dy }) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, size * 0.2, size * 0.22, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    let t = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;

      particles.forEach((p) => {
        p.x += Math.sin(p.angle) * p.speed * 0.5;
        p.y += Math.cos(p.angle) * p.speed * 0.3;
        p.angle += p.angleSpeed;

        const floatY = Math.sin(t + p.floatOffset) * 3;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        drawPaw(ctx, p.x, p.y + floatY, p.size, p.opacity);
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

export default FloatingElements;