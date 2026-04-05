import { useState, useMemo } from 'react'
import Head from 'next/head'
import WorkspacePreview from '../components/WorkspacePreview'
import ItemCard from '../components/ItemCard'
import AccessoryCard from '../components/AccessoryCard'
import CheckoutModal from '../components/CheckoutModal'
import SuccessView from '../components/SuccessView'
import { DESKS, CHAIRS, ACCESSORIES, SECTIONS } from '../components/data'

const CATEGORY_FILTERS = ['All', 'Monitor', 'Lighting', 'Plants', 'Input', 'Audio', 'Camera', 'Connectivity', 'Surface', 'Productivity']

export default function Home() {
  const [activeSection, setActiveSection] = useState('desk')
  const [selectedDesk, setSelectedDesk] = useState(null)
  const [selectedChair, setSelectedChair] = useState(null)
  const [accessoryQtys, setAccessoryQtys] = useState({})
  const [showCheckout, setShowCheckout] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState('All')

  // Compute selected accessories with qty
  const selectedAccessories = useMemo(() => {
    return ACCESSORIES
      .filter(acc => (accessoryQtys[acc.id] || 0) > 0)
      .map(acc => ({ ...acc, qty: accessoryQtys[acc.id] }))
  }, [accessoryQtys])

  // Total price
  const total = useMemo(() => {
    let sum = 0
    if (selectedDesk) sum += selectedDesk.price
    if (selectedChair) sum += selectedChair.price
    selectedAccessories.forEach(acc => sum += acc.price * acc.qty)
    return sum
  }, [selectedDesk, selectedChair, selectedAccessories])

  const handleAddAccessory = (id) => {
    const item = ACCESSORIES.find(a => a.id === id)
    if (!item) return
    setAccessoryQtys(prev => {
      const current = prev[id] || 0
      if (current >= item.maxQty) return prev
      return { ...prev, [id]: current + 1 }
    })
  }

  const handleRemoveAccessory = (id) => {
    setAccessoryQtys(prev => {
      const current = prev[id] || 0
      if (current <= 0) return prev
      const next = { ...prev, [id]: current - 1 }
      if (next[id] === 0) delete next[id]
      return next
    })
  }

  const handleReset = () => {
    setSelectedDesk(null)
    setSelectedChair(null)
    setAccessoryQtys({})
    setShowSuccess(false)
    setShowCheckout(false)
    setActiveSection('desk')
  }

  const filteredAccessories = categoryFilter === 'All'
    ? ACCESSORIES
    : ACCESSORIES.filter(a => a.category === categoryFilter)

  const itemCount = (selectedDesk ? 1 : 0) + (selectedChair ? 1 : 0) + selectedAccessories.length

  return (
    <>
      <Head>
        <title>Workspace Designer — Build Your Setup</title>
        <meta name="description" content="Design and rent your perfect workspace setup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🖥️</text></svg>" />
      </Head>

      <div className="min-h-screen bg-cream" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* ── Header ── */}
        <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-ink rounded-xl flex items-center justify-center text-paper text-sm font-display font-black">
                W
              </div>
              <span className="font-display font-black text-ink text-lg tracking-tight">
                WorkSpace<span className="text-accent">.</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Mini total */}
              {total > 0 && (
                <div className="hidden sm:flex items-center gap-2 bg-white/80 border border-border rounded-xl px-3 py-1.5">
                  <span className="text-xs text-muted font-mono">TOTAL</span>
                  <span className="font-display font-black text-ink text-sm">${total.toLocaleString()}<span className="text-muted font-normal text-xs">/mo</span></span>
                </div>
              )}

              <button
                onClick={() => setShowCheckout(true)}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-xl font-display font-bold text-sm
                  transition-all duration-200
                  ${itemCount > 0
                    ? 'bg-ink text-paper hover:bg-accent shadow-md hover:shadow-lg hover:scale-105'
                    : 'bg-border text-muted cursor-default'
                  }
                `}
              >
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent rounded-full text-white text-[10px] font-black flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
                <span>🛒</span>
                <span>Review Setup</span>
              </button>
            </div>
          </div>
        </header>

        {/* ── Main Layout ── */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
          <div className="lg:grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8">

            {/* ── LEFT: Preview + Section Tabs ── */}
            <div className="flex flex-col gap-6">

              {/* Hero text */}
              <div className="space-y-1">
                <h1 className="font-display font-black text-3xl sm:text-4xl xl:text-5xl text-ink tracking-tight leading-none">
                  Design Your<br />
                  <span className="text-stroke" style={{ WebkitTextStroke: '2px #1a1a2e', color: 'transparent' }}>
                    Perfect
                  </span>{' '}
                  <span className="text-accent">Workspace.</span>
                </h1>
                <p className="text-muted font-body text-sm">
                  Pick your setup — we deliver, install, and manage it.
                </p>
              </div>

              {/* Preview Canvas */}
              <div className="relative bg-white/60 border-2 border-border rounded-3xl overflow-hidden"
                style={{ minHeight: '320px' }}>

                {/* Grid background */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #1a1a2e 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="relative p-6 h-full" style={{ minHeight: '320px' }}>
                  <WorkspacePreview
                    desk={selectedDesk}
                    chair={selectedChair}
                    accessories={selectedAccessories}
                  />
                </div>

                {/* Status chips */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center px-4">
                  {selectedDesk && (
                    <span className="bg-ink text-paper text-xs font-mono px-3 py-1 rounded-full animate-pop">
                      {selectedDesk.name}
                    </span>
                  )}
                  {selectedChair && (
                    <span className="bg-accent text-white text-xs font-mono px-3 py-1 rounded-full animate-pop">
                      {selectedChair.name}
                    </span>
                  )}
                  {selectedAccessories.slice(0, 3).map(acc => (
                    <span key={acc.id} className="bg-accent-2 text-ink text-xs font-mono px-3 py-1 rounded-full animate-pop">
                      {acc.emoji} {acc.qty > 1 ? `×${acc.qty}` : ''}
                    </span>
                  ))}
                  {selectedAccessories.length > 3 && (
                    <span className="bg-paper border border-border text-muted text-xs font-mono px-3 py-1 rounded-full">
                      +{selectedAccessories.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Quick progress bar */}
              <div className="flex gap-3">
                {[
                  { label: 'Desk', done: !!selectedDesk, icon: '🗂️' },
                  { label: 'Chair', done: !!selectedChair, icon: '🪑' },
                  { label: 'Accessories', done: selectedAccessories.length > 0, icon: '✨' },
                ].map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSection(['desk', 'chair', 'accessories'][i])}
                    className={`flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-display font-bold transition-all
                      ${step.done
                        ? 'bg-ink text-paper border-ink'
                        : activeSection === ['desk', 'chair', 'accessories'][i]
                          ? 'bg-paper border-ink text-ink'
                          : 'bg-white/50 border-border text-muted hover:border-ink/30'
                      }
                    `}
                  >
                    <span>{step.icon}</span>
                    <span className="hidden sm:inline">{step.label}</span>
                    {step.done && <span className="ml-auto text-accent-3">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Selector Panel ── */}
            <div className="mt-6 lg:mt-0 flex flex-col gap-4">

              {/* Section tabs */}
              <div className="flex bg-white/70 border border-border rounded-2xl p-1 gap-1">
                {SECTIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-display font-bold tracking-wide transition-all duration-200
                      ${activeSection === s.id
                        ? 'bg-ink text-paper shadow-sm'
                        : 'text-muted hover:text-ink hover:bg-paper/50'
                      }
                    `}
                  >
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>

              {/* Panel content */}
              <div className="bg-white/60 border border-border rounded-3xl overflow-hidden">
                <div className="p-5">

                  {/* DESK section */}
                  {activeSection === 'desk' && (
                    <div className="animate-slide-up">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="font-display font-black text-xl text-ink">Choose Desk</h2>
                        {selectedDesk && (
                          <button onClick={() => setSelectedDesk(null)} className="text-xs text-muted hover:text-accent font-mono">
                            clear ✕
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {DESKS.map(desk => (
                          <ItemCard
                            key={desk.id}
                            item={desk}
                            isSelected={selectedDesk?.id === desk.id}
                            onSelect={(d) => {
                              setSelectedDesk(d)
                              setTimeout(() => setActiveSection('chair'), 300)
                            }}
                            type="desk"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CHAIR section */}
                  {activeSection === 'chair' && (
                    <div className="animate-slide-up">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="font-display font-black text-xl text-ink">Choose Chair</h2>
                        {selectedChair && (
                          <button onClick={() => setSelectedChair(null)} className="text-xs text-muted hover:text-accent font-mono">
                            clear ✕
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {CHAIRS.map(chair => (
                          <ItemCard
                            key={chair.id}
                            item={chair}
                            isSelected={selectedChair?.id === chair.id}
                            onSelect={(c) => {
                              setSelectedChair(c)
                              setTimeout(() => setActiveSection('accessories'), 300)
                            }}
                            type="chair"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ACCESSORIES section */}
                  {activeSection === 'accessories' && (
                    <div className="animate-slide-up">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="font-display font-black text-xl text-ink">Accessories</h2>
                        <span className="text-xs font-mono text-muted">
                          {selectedAccessories.length} added
                        </span>
                      </div>

                      {/* Category filter scroll */}
                      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                        {CATEGORY_FILTERS.map(cat => (
                          <button
                            key={cat}
                            onClick={() => setCategoryFilter(cat)}
                            className={`flex-shrink-0 px-3 py-1 rounded-xl text-xs font-mono font-medium transition-all
                              ${categoryFilter === cat
                                ? 'bg-ink text-paper'
                                : 'bg-paper border border-border text-muted hover:border-ink/40 hover:text-ink'
                              }
                            `}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {filteredAccessories.map(acc => (
                          <AccessoryCard
                            key={acc.id}
                            item={acc}
                            qty={accessoryQtys[acc.id] || 0}
                            onAdd={() => handleAddAccessory(acc.id)}
                            onRemove={() => handleRemoveAccessory(acc.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA footer */}
                <div className="border-t border-border bg-paper/50 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted font-mono block uppercase tracking-wider">Monthly</span>
                      <span className="font-display font-black text-2xl text-ink">
                        ${total.toLocaleString()}
                        <span className="text-sm font-normal text-muted ml-1">/mo</span>
                      </span>
                    </div>
                    <button
                      onClick={() => setShowCheckout(true)}
                      disabled={!selectedDesk && !selectedChair}
                      className={`
                        px-6 py-3 rounded-2xl font-display font-black text-sm tracking-tight
                        transition-all duration-200 relative overflow-hidden group
                        ${(selectedDesk || selectedChair)
                          ? 'bg-accent text-white hover:bg-ink shadow-lg hover:shadow-xl hover:scale-105'
                          : 'bg-border text-muted cursor-not-allowed'
                        }
                      `}
                    >
                      Rent Setup →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      {showCheckout && (
        <CheckoutModal
          desk={selectedDesk}
          chair={selectedChair}
          accessories={selectedAccessories}
          total={total}
          onClose={() => setShowCheckout(false)}
          onConfirm={() => {
            setShowCheckout(false)
            setShowSuccess(true)
          }}
        />
      )}

      {showSuccess && (
        <SuccessView onReset={handleReset} />
      )}
    </>
  )
}
