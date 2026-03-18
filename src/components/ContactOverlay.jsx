import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  // বাটন থেকে সিগন্যাল শোনা
  useEffect(() => {
    const handleToggle = () => setIsOpen(!isOpen);
    window.addEventListener('open-contact-modal', handleToggle);
    
    // বাইরে ক্লিক করলে বন্ধ হবে
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
          className="absolute right-0 top-full mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-[110] text-left"
        >
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 border-b pb-2">আমাদের সাথে যুক্ত হোন</h3>
            
            <div className="space-y-3 text-sm font-medium text-slate-600">
              <p className="flex items-center gap-3 hover:text-blue-600 transition cursor-pointer">
                <span className="bg-blue-50 p-1.5 rounded-lg text-blue-600">📞</span>
                +৮৮০ ১৭xx xxx xxx
              </p>
              <p className="flex items-center gap-3 hover:text-blue-600 transition cursor-pointer">
                <span className="bg-blue-50 p-1.5 rounded-lg text-blue-600">✉️</span>
                info@nabadiganta.org
              </p>
              <p className="flex items-center gap-3">
                <span className="bg-blue-50 p-1.5 rounded-lg text-blue-600">📍</span>
                ঢাকা, বাংলাদেশ
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-blue-600 hover:text-white transition">FB</a>
              <a href="#" class="bg-slate-100 p-2 rounded-full hover:bg-blue-400 hover:text-white transition">TW</a>
            </div>
          </div>
          
          {/* নিচের ছোট ত্রিভুজ (Arrow) */}
          <div className="absolute -top-2 right-10 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}