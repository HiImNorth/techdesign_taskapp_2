import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateTask() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface pb-32">
      <header className="w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="active:scale-95 transition-transform text-primary">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="font-headline text-lg font-semibold tracking-tight text-on-surface">Task Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:bg-surface-container-low transition-colors duration-200 p-2 rounded-full active:scale-95 text-primary">
              <span className="material-symbols-outlined">search</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Sg97zsi9Z9q3m1lL4f0Qr8Y7YckR5o8RRtdG8wgQ8opM9-vss7P1hDQUnzBs_piG-wRFVkMYpu2lYY4VeNEZAC6ZCKSE22t3JcvXAJiXTl00BuZt14hW7mLiMSRAuWNcr0YwqQiCEWqmAfoTf_K_7tSB6AXE9AZcL_NAaStsbuts8V3_c06iQcbMT4WnYbbfmUdozXI5nZ9pYuzUjDxq8yXIaHPCoQ7g1K1LHTJ5e3kTXyZ6V84_Wspqq_2Po3ZXXj0k9R00oJBD" 
                alt="User profile" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-2xl mx-auto w-full px-6 pt-8">
        <div className="mb-10">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-2">Create New Task</h2>
          <p className="text-on-surface-variant font-body text-sm">Organize your thoughts and set clear objectives for your workspace.</p>
        </div>

        <div className="space-y-8">
          <section>
            <label className="block font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Task Title</label>
            <div className="bg-surface-container-low p-1 rounded-xl focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <input 
                type="text" 
                placeholder="What needs to be done?" 
                className="w-full bg-surface-container-lowest border-none rounded-lg py-4 px-5 text-lg font-headline font-semibold text-on-surface placeholder:text-outline-variant focus:ring-0 focus:outline-none" 
              />
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-surface-container-low p-6 rounded-xl">
              <label className="block font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-4">Due Date</label>
              <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-lg cursor-pointer hover:bg-white transition-colors">
                <div className="bg-primary-container/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-on-surface-variant font-medium">Select Date</span>
                  <span className="font-headline font-bold text-on-surface">Oct 24, 2023</span>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-low p-6 rounded-xl">
              <label className="block font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-4">Priority</label>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container transition-colors">Low</button>
                <button className="flex-1 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-on-primary shadow-lg shadow-primary/20">Med</button>
                <button className="flex-1 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container transition-colors">High</button>
              </div>
            </section>
          </div>

          <section>
            <label className="block font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Notes</label>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <textarea 
                rows="5" 
                placeholder="Add some context or specific details about this task..." 
                className="w-full bg-transparent border-none p-0 focus:ring-0 focus:outline-none text-on-surface font-body leading-relaxed placeholder:text-outline-variant resize-none"
              ></textarea>
            </div>
          </section>

          <div className="relative h-48 rounded-3xl overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw82lLkP9I0MmZVIz17nPVbZbb1AkWzDHXPosVgxe_ykKUzxpUNzB6Fde_ZvnndkxL-OmsAFepvGsLnLsTjz--UpdX7jpIKw95BEK0JSKcaDYBUz2lDaRjJDP2Ib3ZkZN8FFifceg4vIMDox10EOM9peEHxCn_64VnVh3RNU8Wdp906p_gevMGdgzZXd85aPK35BlrTt-bso2pXQjwi6Kw1PQEKvQwy6mmPK_gTbzJONTwfgC7WwgHh65ZpnKGpf94s9bhLbPPN8wJ" 
              alt="Inspiration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="glass-panel p-2 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-primary text-sm">lightbulb</span>
              </div>
              <span className="text-xs font-medium text-on-surface-variant italic">Tip: Break large tasks into smaller steps.</span>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed left-0 w-full p-6 md:p-8 bg-white/40 backdrop-blur-xl border-t border-outline-variant/10 z-40 bottom-0">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg tracking-tight shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            Save Task
          </Link>
        </div>
      </div>
    </div>
  );
}
