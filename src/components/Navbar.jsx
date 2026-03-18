import { useState } from 'react';
import ContactModal from './ContactOverlay';

export default function Navbar({ pathname }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    { name: 'About Us', href: '/about' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Notices', href: '/notices' },
  ];

  return (
    <>
      <nav className="bg-slate-100/80 p-1.5 rounded-full border border-slate-200 hidden md:block shadow-inner">
        <div className="flex items-center space-x-1 font-semibold text-slate-600">
          {links.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${pathname === link.href ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-white hover:text-blue-600'}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Contact Us বাটন যা পপ-আপ খুলবে */}
          <button 
            onClick={() => setIsOpen(true)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${isModalOpen ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-white hover:text-blue-600'}`}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* পপ-আপ কম্পোনেন্ট */}
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}