export default function ItemCard({ item, isSelected, onSelect, type }) {
  return (
    <button
      onClick={() => onSelect(item)}
      className={`
        relative w-full text-left rounded-2xl border-2 p-4 transition-all duration-200
        font-body group overflow-hidden
        ${isSelected
          ? 'border-ink bg-ink text-paper shadow-lg scale-[1.02]'
          : 'border-border bg-white/70 text-ink hover:border-ink/40 hover:shadow-md hover:scale-[1.01]'
        }
      `}
    >
      {/* Selected badge */}
      {isSelected && (
        <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
          ✓
        </span>
      )}

      {/* Color swatch for desk/chair */}
      {item.color && (
        <div
          className="w-8 h-8 rounded-full mb-3 border-2 shadow-inner"
          style={{
            backgroundColor: item.color,
            borderColor: isSelected ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.08)'
          }}
        />
      )}

      <div className="space-y-1">
        <h3 className={`font-display font-bold text-sm leading-tight tracking-tight ${isSelected ? 'text-paper' : 'text-ink'}`}>
          {item.name}
        </h3>
        <p className={`text-xs leading-snug ${isSelected ? 'text-paper/70' : 'text-muted'}`}>
          {item.tagline}
        </p>
        <p className={`font-mono text-sm font-medium mt-2 ${isSelected ? 'text-accent-3' : 'text-accent'}`}>
          ${item.price.toLocaleString()}
          <span className={`text-xs font-normal ml-1 ${isSelected ? 'text-paper/50' : 'text-muted'}`}>/mo</span>
        </p>
      </div>

      {/* Hover shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  )
}
