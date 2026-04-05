export default function AccessoryCard({ item, qty, onAdd, onRemove }) {
  const isAdded = qty > 0

  return (
    <div className={`
      relative rounded-2xl border-2 p-4 transition-all duration-200 font-body
      ${isAdded
        ? 'border-accent-2 bg-accent-2/5 shadow-md'
        : 'border-border bg-white/70 hover:border-ink/30 hover:shadow-sm'
      }
    `}>
      {/* Category pill */}
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted bg-paper px-2 py-0.5 rounded-full border border-border">
        {item.category}
      </span>

      <div className="mt-3 flex items-start gap-3">
        <span className="text-2xl leading-none mt-0.5">{item.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-sm text-ink leading-tight">
            {item.name}
          </h3>
          <p className="text-xs text-muted mt-0.5">{item.description}</p>
          <p className="font-mono text-xs text-accent font-medium mt-1">
            +${item.price}/mo
          </p>
        </div>
      </div>

      {/* Add / Qty controls */}
      <div className="mt-3 flex items-center gap-2">
        {!isAdded ? (
          <button
            onClick={onAdd}
            className="flex-1 py-1.5 rounded-xl bg-ink text-paper text-xs font-display font-semibold tracking-wide
              hover:bg-accent transition-colors duration-150"
          >
            + Add
          </button>
        ) : (
          <div className="flex items-center gap-2 flex-1">
            <button
              onClick={onRemove}
              className="w-8 h-8 rounded-xl border-2 border-ink text-ink font-bold text-sm
                hover:bg-ink hover:text-paper transition-colors duration-150 flex items-center justify-center"
            >
              −
            </button>
            <span className="flex-1 text-center font-mono font-semibold text-ink text-sm">
              {qty}×
            </span>
            {qty < item.maxQty && (
              <button
                onClick={onAdd}
                className="w-8 h-8 rounded-xl bg-ink text-paper font-bold text-sm
                  hover:bg-accent transition-colors duration-150 flex items-center justify-center"
              >
                +
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
