import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const NotFoundPage:React.FC=()=> <div className="min-h-[80vh] flex items-center justify-center px-4"><div className="text-center fade-in"><p className="font-syne font-bold text-[100px] sm:text-[140px] text-zinc-100 leading-none select-none">404</p><h1 className="font-syne font-bold text-2xl sm:text-3xl text-zinc-900 -mt-4 mb-3">Page not found</h1><p className="text-zinc-400 text-sm mb-8 max-w-xs mx-auto">The page you're looking for doesn't exist or has been moved.</p><Link to="/" className="btn-primary inline-flex items-center gap-2">Back to Home<ArrowRight size={15}/></Link></div></div>;
export default NotFoundPage;
