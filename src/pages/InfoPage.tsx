import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, Building2, Leaf, Mail, Newspaper, Users } from 'lucide-react';

const companyPages: Record<string, { label: string; title: string; intro: string; sections: { heading: string; text: string }[]; icon: React.ReactNode }> = {
  about: { label: 'OUR STORY', title: 'About KAIXY', intro: 'KAIXY is a modern curated marketplace built around thoughtful products, clean design, and a shopping experience that stays simple.', icon: <Building2 />, sections: [
    { heading: 'What we believe', text: 'Good products should feel considered from discovery to delivery. We focus on useful design, dependable quality, and an experience that puts the product first.' },
    { heading: 'Our approach', text: 'KAIXY brings fashion, footwear, technology, accessories, and home essentials together in one carefully presented storefront.' },
    { heading: 'Built for the future', text: 'We are continuously improving the catalog, shopping experience, and tools that make discovering products easier.' }
  ] },
  careers: { label: 'JOIN THE TEAM', title: 'Careers at KAIXY', intro: 'We are building a small, ambitious team around product, design, technology, and customer experience.', icon: <Briefcase />, sections: [
    { heading: 'Work with us', text: 'We value curiosity, ownership, thoughtful execution, and people who enjoy turning simple ideas into polished experiences.' },
    { heading: 'Open roles', text: 'Current openings will be published here as the team grows. Keep this page bookmarked for future opportunities.' },
    { heading: 'Our culture', text: 'We aim for clear communication, practical decisions, continuous learning, and high standards without unnecessary complexity.' }
  ] },
  press: { label: 'MEDIA & PRESS', title: 'KAIXY Press', intro: 'For brand information, media enquiries, collaborations, and press requests, reach out to the KAIXY team.', icon: <Newspaper />, sections: [
    { heading: 'About the brand', text: 'KAIXY is a curated digital marketplace covering fashion, footwear, electronics, accessories, and home products.' },
    { heading: 'Media enquiries', text: 'Please use our contact page for press questions, interview requests, partnership enquiries, or requests for additional brand information.' }
  ] },
  sustainability: { label: 'OUR COMMITMENT', title: 'Sustainability', intro: 'We want KAIXY to grow responsibly by making more considered choices across products, packaging, and operations.', icon: <Leaf />, sections: [
    { heading: 'Less unnecessary packaging', text: 'We aim to reduce avoidable packaging and encourage practical packaging choices as our operations evolve.' },
    { heading: 'Better product choices', text: 'We are working toward clearer product information so customers can make more informed purchasing decisions.' },
    { heading: 'An ongoing commitment', text: 'Sustainability is a continuing process. We will update this page as concrete initiatives and measurable improvements are introduced.' }
  ] },
  contact: { label: 'GET IN TOUCH', title: 'Contact KAIXY', intro: 'Have a question about an order, product, partnership, or the KAIXY experience?', icon: <Mail />, sections: [
    { heading: 'Customer support', text: 'For order and product questions, keep your order information ready so the support team can help you quickly.' },
    { heading: 'Business enquiries', text: 'For partnerships, collaborations, press, or other business enquiries, use the contact channel provided by the KAIXY team.' }
  ] }
};

const otherPages: Record<string, { title: string; body: string }> = {
  'track-order': { title: 'Track Order', body: 'Order tracking will be available here once live order processing is connected.' },
  returns: { title: 'Returns & Refunds', body: 'Eligible items can be returned according to the applicable return conditions shown with your order.' },
  shipping: { title: 'Shipping Info', body: 'Shipping availability, delivery estimates, and applicable charges are shown during checkout.' },
  'size-guide': { title: 'Size Guide', body: 'Use the size information shown on each product page to choose the appropriate fit.' },
  faq: { title: 'FAQ', body: 'Questions about products, orders, shipping, and returns can be answered by the KAIXY support team.' },
  privacy: { title: 'Privacy Policy', body: 'KAIXY respects your privacy and aims to collect and use information only for legitimate shopping and support purposes.' },
  terms: { title: 'Terms of Service', body: 'Use of this storefront is subject to applicable terms governing purchases, accounts, content, and site use.' },
  cookies: { title: 'Cookies', body: 'This storefront may use browser storage and similar technologies to keep shopping preferences and cart data available.' }
};

export default function InfoPage() {
  const { slug = '' } = useParams();
  const company = companyPages[slug];
  const other = otherPages[slug];
  if (!company && !other) return <div className="max-w-3xl mx-auto px-4 py-20"><h1 className="font-syne text-4xl font-bold">Page not found</h1><Link to="/" className="btn-primary inline-flex mt-8">Back home</Link></div>;
  if (other) return <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 page-fade"><Link to="/" className="text-sm text-zinc-500 flex items-center gap-2 mb-10"><ArrowLeft size={14}/>Back home</Link><p className="section-label">KAIXY</p><h1 className="font-syne text-4xl font-bold mt-2">{other.title}</h1><p className="text-zinc-500 leading-8 mt-6">{other.body}</p><Link to="/shop" className="btn-primary inline-flex mt-8">Continue shopping<ArrowRight size={15}/></Link></div>;
  return <div className="page-fade"><section className="bg-zinc-950 text-white py-20 sm:py-28"><div className="max-w-5xl mx-auto px-4 sm:px-6"><Link to="/" className="text-zinc-400 hover:text-white text-sm flex items-center gap-2 mb-14"><ArrowLeft size={14}/>Back home</Link><div className="w-12 h-12 border border-zinc-700 flex items-center justify-center mb-7 text-amber-500">{company.icon}</div><p className="section-label text-amber-500">{company.label}</p><h1 className="font-syne text-5xl sm:text-7xl font-bold tracking-tight mt-3 max-w-3xl">{company.title}</h1><p className="text-zinc-400 text-lg leading-8 max-w-2xl mt-7">{company.intro}</p></div></section><section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24"><div className="grid md:grid-cols-2 gap-x-16 gap-y-12">{company.sections.map((section, i)=><article key={section.heading} className={i === company.sections.length - 1 && company.sections.length % 2 ? 'md:col-span-2 max-w-2xl' : ''}><span className="text-xs text-zinc-400 tracking-widest">0{i + 1}</span><h2 className="font-syne text-2xl font-bold mt-3">{section.heading}</h2><p className="text-zinc-500 leading-8 mt-4">{section.text}</p></article>)}</div><div className="border-t border-zinc-200 mt-16 pt-10 flex flex-wrap gap-4"><Link to="/shop" className="btn-primary">Explore the shop<ArrowRight size={15}/></Link>{slug !== 'contact' && <Link to="/info/contact" className="border border-zinc-200 px-5 py-3 text-sm font-medium hover:bg-zinc-50 transition-colors">Contact us</Link>}</div></section></div>;
}
