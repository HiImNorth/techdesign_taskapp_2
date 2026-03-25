import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function CalendarView() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface pb-32">
      <header className="w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-4">
          <button className="text-primary active:scale-95 duration-200 p-2 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="font-headline font-semibold text-lg text-on-surface">June 2024</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-primary active:scale-95 duration-200 p-2 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">today</span>
          </button>
        </div>
      </header>

      <main className="max-w-xl mx-auto w-full px-6 mt-4 space-y-8">
        <section className="bg-surface-container-low rounded-[2rem] p-6">
          <div className="grid grid-cols-7 mb-4">
            {days.map((day, i) => (
              <div key={i} className="text-center font-label text-on-surface-variant text-[11px] font-bold uppercase tracking-widest">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-2">
            {emptyDays.map(i => (
              <div key={`empty-${i}`} className="h-10"></div>
            ))}
            {dates.map(date => {
              const isActive = date === 18;
              return (
                <div key={date} className={`relative flex items-center justify-center h-10 ${isActive ? '' : 'font-label text-sm text-on-surface'}`}>
                  {isActive ? (
                    <>
                      <div className="absolute inset-1 bg-primary rounded-full"></div>
                      <span className="relative font-label text-sm font-bold text-on-primary">{date}</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                    </>
                  ) : (
                    date
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-headline font-extrabold text-2xl tracking-tight text-on-surface">Tasks for Today</h2>
            <span className="font-body text-sm font-medium text-on-surface-variant">Tuesday, 18</span>
          </div>

          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-container rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative flex items-center gap-5 p-5 bg-surface-container-lowest border border-outline-variant/15 rounded-3xl ambient-shadow glass-panel">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline font-bold text-lg text-on-surface">Project Review</h3>
                    <span className="font-label text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">High</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">schedule</span>
                    <span className="font-body text-sm text-on-surface-variant">10:00 AM — 11:30 AM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-5 bg-surface-container-low/50 rounded-2xl hover:bg-surface-container-low transition-colors">
                <div className="w-2 h-10 bg-tertiary/20 rounded-full"></div>
                <div className="flex-grow">
                  <h4 className="font-headline font-semibold text-on-surface">Creative Sync</h4>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">schedule</span>
                    <span className="font-body text-xs text-on-surface-variant">01:45 PM</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant">more_vert</span>
              </div>

              <div className="flex items-center gap-4 p-5 bg-surface-container-low/50 rounded-2xl hover:bg-surface-container-low transition-colors">
                <div className="w-2 h-10 bg-error/20 rounded-full"></div>
                <div className="flex-grow">
                  <h4 className="font-headline font-semibold text-on-surface">Client Handover</h4>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">schedule</span>
                    <span className="font-body text-xs text-on-surface-variant">04:00 PM</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant">more_vert</span>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden h-48 relative mt-8">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWk39BaEGkM_Krn0F289BS24aaeYUqicuBN_m-DXg0diqDLHOe6PqBO6XxgWAjaq4qC9IAigEkSDykbkk3AyjpVcnpMwoENtcbyE7gaxiWdl5plU0w8PbRanG8c6Pxw3RZWKrdcwVhSX5oj2PsoWRXttTCugx-zfABCqbP7HFNCUFlmITC5vfxMu59Z3ZCOZIYZY2-HUx8xz7Z7CZ6kXzNT_REZpFX72zDdjKqz6SGs2ydftDGuAHD-o0jUrIJ062tu_29oFos2V0" 
                alt="Workspace" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <p className="text-white font-headline font-medium text-lg leading-snug">Design your workflow <br/>with intentionality.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Link 
        to="/create" 
        className="fixed right-6 bottom-28 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40 md:hidden"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </Link>
      <BottomNav />
    </div>
  );
}
