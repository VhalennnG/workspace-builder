export default function SuccessView({ onReset }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-paper rounded-3xl shadow-2xl overflow-hidden animate-pop text-center">
        {/* Confetti header */}
        <div className="bg-gradient-to-br from-accent to-accent-2 px-8 py-10">
          <div className="text-6xl mb-3 animate-float">🎉</div>
          <h2 className="font-display text-3xl font-black text-white tracking-tight">
            You're all set!
          </h2>
          <p className="text-white/80 font-body mt-2 text-sm">
            Your workspace is being prepared.
          </p>
        </div>

        <div className="px-8 py-8 space-y-4">
          <div className="space-y-3">
            {[
              { icon: '📦', text: 'Order confirmed & processing' },
              { icon: '🚚', text: 'Delivery in 3–5 business days' },
              { icon: '🛠️', text: 'Professional setup included' },
              { icon: '📱', text: 'Track via email confirmation' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/60 rounded-2xl px-4 py-3 border border-border text-left"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-body text-sm text-ink">{item.text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onReset}
            className="w-full mt-4 py-4 rounded-2xl bg-ink text-paper font-display font-black
              text-base tracking-tight hover:bg-accent transition-colors duration-200"
          >
            Design Another Workspace
          </button>
        </div>
      </div>
    </div>
  )
}
