import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
const BackToTop: React.FC = () => { const [show, setShow] = useState(false); useEffect(() => { const onScroll = () => setShow(window.scrollY > 560); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []); return <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`back-to-top ${show ? 'show' : ''}`}><ArrowUp size={16} /></button>; };
export default BackToTop;
