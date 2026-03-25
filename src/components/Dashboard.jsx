import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface pb-32">
      <header className="w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBROhncPu47x1JoOTkMsA26BgGrLyMbuQ_eE9UiPV-RYzvWt16UpR65DqDGe8ZSf_5czxUk7ix0pRiNc6ar2ExwfZi8NPkCSaKmUH7t09GmMTkKy0ya9GpWfF-3XS8xeGSnBnciKz1qPsYDIcx-PciSs5du8a3VNwXMprUk9DkX_QA_kg3f0pEQYyJ7Zr5ElwcDiOnU_k2G630mdS7Ntuw21_Ka2SFI-cRFpuXNCAc0cejDurN7dGZq8UOX2-WIhtmgeikMOPATQqte" 
                alt="User profile" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="font-headline font-bold text-xl text-on-surface">Task Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors duration-200 active:scale-95 text-primary">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        <section className="mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">Hello, Alex</h2>
          <p className="font-body text-on-surface-variant text-lg">You have 5 tasks to focus on today.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-xl font-bold text-on-surface">Today</h3>
              <span className="px-3 py-1 bg-primary-container/20 text-primary font-label text-xs font-bold rounded-full">3 TASKS</span>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-5 rounded-xl flex items-center gap-5 ambient-shadow border border-primary-container/10">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="w-6 h-6 rounded-lg border-outline-variant text-primary focus:ring-primary-container bg-surface-container-low transition-all" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline font-semibold text-on-surface">Finalize design system documentation</h4>
                  <p className="font-body text-sm text-on-surface-variant">Prioritize the typography and spacing scales</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">High</span>
                  <span className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> 10:30 AM
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center gap-5 transition-transform active:scale-[0.98]">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="w-6 h-6 rounded-lg border-outline-variant text-primary focus:ring-primary-container bg-surface-container-low transition-all" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline font-semibold text-on-surface">Weekly sync with engineering</h4>
                  <p className="font-body text-sm text-on-surface-variant">Reviewing the implementation of the new dashboard</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">event</span> 2:00 PM
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-xl flex items-center gap-5 transition-transform active:scale-[0.98]">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="w-6 h-6 rounded-lg border-outline-variant text-primary focus:ring-primary-container bg-surface-container-low transition-all" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline font-semibold text-on-surface">Prepare Q3 project roadmap</h4>
                  <p className="font-body text-sm text-on-surface-variant">Define key milestones and resource allocation</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> 4:30 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold text-on-surface">Later</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-surface-container-low/50 p-4 rounded-xl flex items-center gap-4 group hover:bg-surface-container-low transition-colors duration-300">
                  <input type="checkbox" className="w-5 h-5 rounded-md border-outline-variant/30 bg-transparent text-secondary focus:ring-secondary-container" />
                  <div className="flex-1">
                    <span className="font-body text-on-surface-variant font-medium group-hover:text-on-surface">Update client feedback log</span>
                  </div>
                  <span className="text-[11px] font-semibold text-outline-variant">Tomorrow</span>
                </div>
                <div className="bg-surface-container-low/50 p-4 rounded-xl flex items-center gap-4 group hover:bg-surface-container-low transition-colors duration-300">
                  <input type="checkbox" className="w-5 h-5 rounded-md border-outline-variant/30 bg-transparent text-secondary focus:ring-secondary-container" />
                  <div className="flex-1">
                    <span className="font-body text-on-surface-variant font-medium group-hover:text-on-surface">Order new office supplies</span>
                  </div>
                  <span className="text-[11px] font-semibold text-outline-variant">Friday</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-[2rem] text-on-primary shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-headline text-lg font-bold mb-1">Deep Work Session</h4>
                <p className="font-body text-sm opacity-80 mb-6">Current: Design System</p>
                <div className="flex items-center justify-between">
                  <span className="font-headline text-4xl font-extrabold tracking-tighter">25:00</span>
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all active:scale-90">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-container/20 rounded-full blur-xl"></div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-3xl">
              <h4 className="font-headline font-bold text-on-surface mb-4">Productivity</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold font-label uppercase text-on-surface-variant">
                  <span>Completed Tasks</span>
                  <span className="text-primary">12/15</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[80%]"></div>
                </div>
                <p className="text-[11px] font-medium text-on-surface-variant">You're on a 5-day winning streak! Keep going.</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIrT5krx9XybJEoAmOe8OnI1r50iWmV1HUtn4oplbn_u8lpFcWa7c2DYe2CTcWgoys3Y7781qHQ_bzi7LvGpNcBhnLVzhId5xvbKQ_Wxx3ioyqNnOE7tCEBx_YU2XxCWybYaRRLn8_SpmXxkAbM3cffkD0sSPoCr_e8FVLysOuSPAToUGMm49teLeNY5kKKtsx4uf-hZIC4453xzJfCvXLE1QO7UtQX2Qs6pMMT4txRki3O49GU4L3KTpHIpLRF3NT283RUEyUgsQ4" 
                alt="Workspace" 
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex flex-col justify-end p-5">
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-wider">Workspace Insight</span>
                <h5 className="text-white font-headline font-bold">Organize your studio for better focus</h5>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Link 
        to="/create" 
        className="fixed bottom-24 right-8 md:bottom-12 md:right-12 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(0,96,173,0.3)] hover:scale-110 active:scale-95 transition-all z-[60]"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </Link>
      <BottomNav />
    </div>
  );
}
