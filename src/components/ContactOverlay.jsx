import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleToggle = () => setIsOpen(!isOpen);
    window.addEventListener('open-contact-modal', handleToggle);
    
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('open-contact-modal', handleToggle);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          ref={overlayRef}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute right-0 top-full mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-[110] text-left"
        >
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 border-b pb-3 text-lg">আমাদের সাথে যুক্ত হোন</h3>
            
            <div className="space-y-4 text-sm font-medium text-slate-600">
              <a 
                href="tel:01872291234" 
                className="flex items-center gap-4 hover:text-blue-600 transition group"
              >
                <span className="bg-blue-50 p-2.5 rounded-lg text-blue-600 group-hover:bg-blue-100 transition">📞</span>
                01 872 291234
              </a>

              <a 
                href="mailto:nobodigontoyouthfoundation@gmail.com" 
                className="flex items-center gap-4 hover:text-blue-600 transition group"
              >
                <span className="bg-blue-50 p-2.5 rounded-lg text-blue-600 group-hover:bg-blue-100 transition">✉️</span>
                nobodigontoyouthfoundation@gmail.com
              </a>

              <div className="flex items-center gap-4">
                <span className="bg-blue-50 p-2.5 rounded-lg text-blue-600">📍</span>
                লামা বাজার
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              {/* Facebook ID */}
              <a 
                href="https://web.facebook.com/profile.php?id=61583982340798" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-slate-50 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition group"
              >
                <div className="bg-white p-1.5 rounded-full shadow-sm">
                   <img src="/fb.png" alt="FB" className="w-6 h-6 object-contain" />
                </div>
                <span className="font-bold">Facebook Profile</span>
              </a>

              {/* New Facebook Page */}
              <a 
                href="https://web.facebook.com/profile.php?id=61578997084232" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-slate-50 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition group"
              >
                <div className="bg-white p-1.5 rounded-full shadow-sm">
                   <img src="/fb.png" alt="FB" className="w-6 h-6 object-contain" />
                </div>
                <span className="font-bold">Facebook Page</span>
              </a>            
            </div>
          </div>
          
          <div className="absolute -top-2 right-10 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}