import React, { useEffect, useRef, useState } from 'react';

export default function PassportCarousel({ images = [], speed = 20, height = 400 }) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  const slides = [...images, ...images]; // Duplicate the images array for scrolling effect

  useEffect(() => {
    const styleId = 'passport-carousel-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes subtle-rotate {
          0% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
          100% { transform: rotate(-2deg); }
        }
        .pc-rotate { animation: subtle-rotate 6s ease-in-out infinite; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.offsetWidth);
      const content = containerRef.current.querySelector('.pc-track');
      if (content) setContentWidth(content.scrollWidth / 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  useEffect(() => {
    let lastTime = performance.now();

    function step(now) {
      if (!containerRef.current) return;
      const dt = now - lastTime;
      lastTime = now;
      if (!isPaused) {
        const delta = (speed * dt) / 1000;
        posRef.current += delta;
        if (contentWidth > 0 && posRef.current >= contentWidth) {
          posRef.current -= contentWidth;
        }
        const track = containerRef.current.querySelector('.pc-track');
        if (track) track.style.transform = `translateX(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isPaused, contentWidth, speed]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startPos = 0;

    const onPointerDown = (e) => {
      isDown = true;
      setIsPaused(true);
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startPos = posRef.current;
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      posRef.current = Math.max(0, startPos - dx);
      if (contentWidth > 0) posRef.current = ((posRef.current % contentWidth) + contentWidth) % contentWidth;
      const track = el.querySelector('.pc-track');
      if (track) track.style.transform = `translateX(${-posRef.current}px)`;
    };

    const onPointerUp = (e) => {
      isDown = false;
      setIsPaused(false);
      try { el.releasePointerCapture(e.pointerId); } catch {}
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [contentWidth]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full p-4 text-center text-sm text-gray-500">No images provided.</div>
    );
  }

  return (
    <div className="cast-crsl flex justify-center m-auto">
      <div
        ref={containerRef}
        className="relative overflow-hidden touch-pan-y w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-roledescription="carousel"
      >
        <div className="pc-track flex items-center gap-4 will-change-transform" style={{ transform: 'translateX(0px)' }}>
          {slides.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0  pc-item" 
            >
              <div className="w-full h-full overflow-hidden rounded-sm flex flex-col items-center justify-center">
                <img
                  src={item.image}
                  alt={`carousel-${idx}`}
                  className="object-cover h-full w-full pc-rotate rounded-xl "
                  draggable={false}
                  style={{ maxWidth: '100%', maxHeight: '80%' }}
                />
                <div className="text-center mt-1 text-xs font-semibold">
                  <small>{item.name} {item.surname}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
