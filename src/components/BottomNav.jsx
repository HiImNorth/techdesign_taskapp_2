import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-3 pb-8 px-4 bg-white/80 backdrop-blur-xl shadow-[0_-12px_32px_rgba(44,52,55,0.06)] rounded-t-[2rem] border-t border-outline-variant/15 md:hidden">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center px-6 py-1.5 hover:opacity-80 transition-opacity active:scale-90 duration-150 rounded-full ${location.pathname === '/' ? 'bg-secondary-container text-primary' : 'text-on-surface-variant'}`}
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: location.pathname === '/' ? "'FILL' 1" : "'FILL' 0" }}>checklist</span>
        <span className="font-inter text-[11px] font-medium tracking-wide uppercase">Tasks</span>
      </Link>
      <Link 
        to="/calendar" 
        className={`flex flex-col items-center justify-center px-6 py-1.5 hover:opacity-80 transition-opacity active:scale-90 duration-150 rounded-full ${location.pathname === '/calendar' ? 'bg-secondary-container text-primary' : 'text-on-surface-variant'}`}
      >
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: location.pathname === '/calendar' ? "'FILL' 1" : "'FILL' 0" }}>calendar_today</span>
        <span className="font-inter text-[11px] font-medium tracking-wide uppercase">Calendar</span>
      </Link>
    </nav>
  );
}
