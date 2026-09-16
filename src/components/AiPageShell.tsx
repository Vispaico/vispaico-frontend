export default function AiPageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-[50%] opacity-[0.12]"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #f97316 0deg, transparent 60deg, transparent 300deg, #f97316 360deg)',
            animation: 'spin 60s linear infinite',
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 20%, transparent 80%)',
          }}
        />
        <div className="absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -left-40 top-[45%] h-[360px] w-[360px] rounded-full bg-orange-500/[0.06] blur-3xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
}
