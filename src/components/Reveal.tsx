import React, { useEffect, useRef, useState } from 'react';

interface RevealProps { children: React.ReactNode; delay?: number; className?: string; }
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null); const [visible, setVisible] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }); observer.observe(el); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal-io ${visible ? 'in-view' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
};
export default Reveal;
