import { useEffect } from 'react'

export default function CheckoutModal({ desk, chair, accessories, total, onClose, onConfirm }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const hasSetup = desk || chair || accessories.length > 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-paper rounded-3xl shadow-2xl overflow-hidden animate-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-ink px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-black text-paper tracking-tight">
                Your Setup
              </h2>
              <p className="text-paper/50 text-sm font-body mt-1">Ready to make it yours?</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-paper/20 text-paper/60
                hover:bg-paper/10 hover:text-paper transition-colors flex items-center justify-center text-lg"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-5 max-h-[55vh] overflow-y-auto">
          {!hasSetup ? (
            <div className="text-center py-8 text-muted font-body">
              <div className="text-4xl mb-3">🌱</div>
              <p>Your workspace is empty.</p>
              <p className="text-sm mt-1">Add a desk and chair to get started.</p>
            </div>
          ) : (
            <>
              {/* Desk */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">Desk</h3>
                {desk ? (
                  <div className="flex items-center justify-between bg-white/70 rounded-2xl px-4 py-3 border border-border">
                    <div>
                      <div
                        className="w-4 h-4 rounded-full inline-block mr-2 border border-border/50 align-middle"
                        style={{ backgroundColor: desk.color }}
                      />
                      <span className="font-display font-bold text-ink text-sm">{desk.name}</span>
                      <span className="text-muted text-xs ml-2">{desk.tagline}</span>
                    </div>
                    <span className="font-mono text-accent font-semibold text-sm">${desk.price}/mo</span>
                  </div>
                ) : (
                  <div className="text-muted text-sm italic px-4 py-3 bg-paper border border-dashed border-border rounded-2xl">
                    No desk selected
                  </div>
                )}
              </div>

              {/* Chair */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">Chair</h3>
                {chair ? (
                  <div className="flex items-center justify-between bg-white/70 rounded-2xl px-4 py-3 border border-border">
                    <div>
                      <div
                        className="w-4 h-4 rounded-full inline-block mr-2 border border-border/50 align-middle"
                        style={{ backgroundColor: chair.color }}
                      />
                      <span className="font-display font-bold text-ink text-sm">{chair.name}</span>
                      <span className="text-muted text-xs ml-2">{chair.tagline}</span>
                    </div>
                    <span className="font-mono text-accent font-semibold text-sm">${chair.price}/mo</span>
                  </div>
                ) : (
                  <div className="text-muted text-sm italic px-4 py-3 bg-paper border border-dashed border-border rounded-2xl">
                    No chair selected
                  </div>
                )}
              </div>

              {/* Accessories */}
              {accessories.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">Accessories</h3>
                  <div className="space-y-2">
                    {accessories.map((acc) => (
                      <div
                        key={acc.id}
                        className="flex items-center justify-between bg-white/70 rounded-2xl px-4 py-3 border border-border"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{acc.emoji}</span>
                          <div>
                            <span className="font-display font-bold text-ink text-sm">{acc.name}</span>
                            {acc.qty > 1 && (
                              <span className="ml-1 text-xs text-muted font-mono">×{acc.qty}</span>
                            )}
                          </div>
                        </div>
                        <span className="font-mono text-accent font-semibold text-sm">
                          ${(acc.price * acc.qty).toLocaleString()}/mo
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-4 border-t border-border">
          {/* Total */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted block">Monthly Total</span>
              <span className="font-display text-3xl font-black text-ink">
                ${total.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-muted font-body block">Est. annual</span>
              <span className="font-mono text-sm text-muted">${(total * 12).toLocaleString()}</span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onConfirm}
            disabled={!hasSetup}
            className={`
              w-full py-4 rounded-2xl font-display font-black text-base tracking-tight
              transition-all duration-200 relative overflow-hidden group
              ${hasSetup
                ? 'bg-accent text-white hover:bg-ink hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                : 'bg-border text-muted cursor-not-allowed'
              }
            `}
          >
            <span className="relative z-10">
              {hasSetup ? '🚀 Confirm & Rent Setup' : 'Add items to continue'}
            </span>
            {hasSetup && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            )}
          </button>

          <p className="text-center text-xs text-muted mt-3 font-body">
            Cancel anytime · Free delivery · Setup included
          </p>
        </div>
      </div>
    </div>
  )
}
