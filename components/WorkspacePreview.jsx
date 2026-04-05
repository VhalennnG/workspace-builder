import { useMemo } from 'react'

// SVG desk shapes
function DeskSVG({ desk }) {
  if (!desk) return null

  const configs = {
    'desk-minimal': {
      // Simple rectangular desk
      path: (
        <g>
          <rect x="60" y="145" width="380" height="12" rx="3" fill={desk.color} />
          <rect x="60" y="155" width="380" height="40" rx="0" fill="#c8b99a" />
          <rect x="75" y="195" width="14" height="55" rx="2" fill={desk.color} />
          <rect x="411" y="195" width="14" height="55" rx="2" fill={desk.color} />
          <rect x="170" y="195" width="14" height="55" rx="2" fill={desk.color} />
          <rect x="316" y="195" width="14" height="55" rx="2" fill={desk.color} />
        </g>
      )
    },
    'desk-lshape': {
      path: (
        <g>
          <rect x="40" y="145" width="380" height="12" rx="3" fill={desk.color} />
          <rect x="40" y="155" width="380" height="35" rx="0" fill="#b8a898" />
          <rect x="300" y="110" width="140" height="40" rx="3" fill={desk.color} />
          <rect x="300" y="148" width="140" height="47" rx="0" fill="#b8a898" />
          <rect x="55" y="190" width="12" height="55" rx="2" fill={desk.color} />
          <rect x="400" y="190" width="12" height="55" rx="2" fill={desk.color} />
          <rect x="170" y="190" width="12" height="55" rx="2" fill={desk.color} />
          <rect x="430" y="148" width="10" height="55" rx="2" fill={desk.color} />
        </g>
      )
    },
    'desk-standing': {
      path: (
        <g>
          {/* Height-adjustable frame */}
          <rect x="70" y="130" width="360" height="14" rx="3" fill={desk.color} />
          <rect x="70" y="142" width="360" height="38" rx="0" fill="#c8bca8" />
          {/* Thick motorized legs */}
          <rect x="80" y="180" width="22" height="75" rx="3" fill={desk.color} />
          <rect x="95" y="200" width="8" height="55" rx="2" fill="#aaa09a" />
          <rect x="398" y="180" width="22" height="75" rx="3" fill={desk.color} />
          <rect x="413" y="200" width="8" height="55" rx="2" fill="#aaa09a" />
          {/* Crossbar */}
          <rect x="102" y="215" width="296" height="6" rx="3" fill="#b0a898" />
        </g>
      )
    },
    'desk-vintage': {
      path: (
        <g>
          {/* Thick walnut top */}
          <rect x="55" y="140" width="390" height="18" rx="4" fill={desk.color} />
          <rect x="55" y="156" width="390" height="38" rx="0" fill="#7a5a10" />
          {/* Drawers */}
          <rect x="80" y="160" width="90" height="32" rx="2" fill="#6a4c0e" />
          <rect x="80" y="160" width="90" height="32" rx="2" fill="none" stroke="#8b6914" strokeWidth="1" />
          <circle cx="125" cy="176" r="4" fill="#c8a830" />
          <rect x="330" y="160" width="90" height="32" rx="2" fill="#6a4c0e" />
          <circle cx="375" cy="176" r="4" fill="#c8a830" />
          {/* Turned legs */}
          <ellipse cx="95" cy="205" rx="10" ry="6" fill={desk.color} />
          <rect x="88" y="205" width="14" height="50" rx="7" fill={desk.color} />
          <ellipse cx="95" cy="254" rx="12" ry="5" fill="#6a4c0e" />
          <ellipse cx="405" cy="205" rx="10" ry="6" fill={desk.color} />
          <rect x="398" y="205" width="14" height="50" rx="7" fill={desk.color} />
          <ellipse cx="405" cy="254" rx="12" ry="5" fill="#6a4c0e" />
          <ellipse cx="200" cy="205" rx="9" ry="5" fill={desk.color} />
          <rect x="193" y="205" width="13" height="50" rx="6" fill={desk.color} />
          <ellipse cx="300" cy="205" rx="9" ry="5" fill={desk.color} />
          <rect x="293" y="205" width="13" height="50" rx="6" fill={desk.color} />
        </g>
      )
    },
  }

  return configs[desk.id]?.path || configs['desk-minimal'].path
}

// SVG chair shapes
function ChairSVG({ chair }) {
  if (!chair) return null

  const configs = {
    'chair-mesh': {
      path: (
        <g transform="translate(195, 200)">
          {/* Mesh back */}
          <rect x="-28" y="-90" width="56" height="75" rx="5" fill={chair.color} opacity="0.9" />
          <line x1="-18" y1="-85" x2="-18" y2="-20" stroke="#5a6070" strokeWidth="1.5" />
          <line x1="-6" y1="-85" x2="-6" y2="-20" stroke="#5a6070" strokeWidth="1.5" />
          <line x1="6" y1="-85" x2="6" y2="-20" stroke="#5a6070" strokeWidth="1.5" />
          <line x1="18" y1="-85" x2="18" y2="-20" stroke="#5a6070" strokeWidth="1.5" />
          <line x1="-26" y1="-70" x2="26" y2="-70" stroke="#5a6070" strokeWidth="1" />
          <line x1="-26" y1="-55" x2="26" y2="-55" stroke="#5a6070" strokeWidth="1" />
          <line x1="-26" y1="-40" x2="26" y2="-40" stroke="#5a6070" strokeWidth="1" />
          {/* Seat */}
          <rect x="-32" y="-20" width="64" height="18" rx="4" fill="#4a4a5a" />
          {/* Armrests */}
          <rect x="-44" y="-30" width="14" height="30" rx="3" fill="#3a3a4a" />
          <rect x="30" y="-30" width="14" height="30" rx="3" fill="#3a3a4a" />
          {/* Post */}
          <rect x="-5" y="-2" width="10" height="40" rx="2" fill="#888" />
          {/* Base */}
          {[-72, -36, 0, 36, 72].map((angle, i) => (
            <line key={i}
              x1="0" y1="38"
              x2={Math.cos((angle - 90) * Math.PI / 180) * 38}
              y2={38 + Math.sin((angle - 90) * Math.PI / 180) * 14}
              stroke="#666" strokeWidth="4" strokeLinecap="round"
            />
          ))}
        </g>
      )
    },
    'chair-executive': {
      path: (
        <g transform="translate(195, 200)">
          {/* Headrest */}
          <rect x="-22" y="-120" width="44" height="22" rx="8" fill={chair.color} />
          {/* Back */}
          <rect x="-30" y="-100" width="60" height="82" rx="8" fill={chair.color} />
          {/* Lumbar */}
          <ellipse cx="0" cy="-45" rx="25" ry="8" fill="#2a2a3e" />
          {/* Seat */}
          <rect x="-35" y="-18" width="70" height="22" rx="6" fill={chair.color} />
          {/* Armrests */}
          <rect x="-50" y="-35" width="18" height="38" rx="4" fill="#2a2a3e" />
          <rect x="32" y="-35" width="18" height="38" rx="4" fill="#2a2a3e" />
          {/* Post */}
          <rect x="-6" y="4" width="12" height="40" rx="2" fill="#999" />
          {/* Base */}
          {[-72, -36, 0, 36, 72].map((angle, i) => (
            <line key={i}
              x1="0" y1="44"
              x2={Math.cos((angle - 90) * Math.PI / 180) * 42}
              y2={44 + Math.sin((angle - 90) * Math.PI / 180) * 16}
              stroke="#777" strokeWidth="5" strokeLinecap="round"
            />
          ))}
        </g>
      )
    },
    'chair-ergonomic': {
      path: (
        <g transform="translate(195, 200)">
          {/* Lumbar-shaped back */}
          <path d="M-28,-95 Q-35,-60 -28,-20 Q0,-10 28,-20 Q35,-60 28,-95 Q0,-105 -28,-95 Z" fill={chair.color} />
          <path d="M-20,-70 Q0,-55 20,-70" fill="none" stroke="#d4ccc4" strokeWidth="2" />
          {/* Seat */}
          <ellipse cx="0" cy="-14" rx="34" ry="12" fill={chair.color} />
          {/* Armrests */}
          <rect x="-46" y="-38" width="12" height="28" rx="3" fill="#d4ccc4" />
          <rect x="34" y="-38" width="12" height="28" rx="3" fill="#d4ccc4" />
          {/* Post */}
          <rect x="-5" y="-2" width="10" height="38" rx="2" fill="#aaa" />
          {/* Base */}
          {[-72, -36, 0, 36, 72].map((angle, i) => (
            <line key={i}
              x1="0" y1="36"
              x2={Math.cos((angle - 90) * Math.PI / 180) * 38}
              y2={36 + Math.sin((angle - 90) * Math.PI / 180) * 14}
              stroke="#999" strokeWidth="4" strokeLinecap="round"
            />
          ))}
        </g>
      )
    },
    'chair-saddle': {
      path: (
        <g transform="translate(195, 200)">
          {/* Kneeling pad seat */}
          <ellipse cx="0" cy="-55" rx="28" ry="12" fill={chair.color} />
          <rect x="-28" y="-65" width="56" height="22" rx="10" fill={chair.color} />
          {/* Knee pads */}
          <ellipse cx="-20" cy="-10" rx="18" ry="10" fill={chair.color} />
          <ellipse cx="20" cy="-10" rx="18" ry="10" fill={chair.color} />
          {/* Frame */}
          <path d="M0,-53 L-20,-15" stroke="#b04830" strokeWidth="6" strokeLinecap="round" />
          <path d="M0,-53 L20,-15" stroke="#b04830" strokeWidth="6" strokeLinecap="round" />
          {/* Post */}
          <rect x="-5" y="-45" width="10" height="50" rx="2" fill="#c86050" />
          {/* Base */}
          {[-60, 0, 60].map((angle, i) => (
            <line key={i}
              x1="0" y1="5"
              x2={Math.cos((angle - 90) * Math.PI / 180) * 32}
              y2={5 + Math.sin((angle - 90) * Math.PI / 180) * 12}
              stroke="#b04830" strokeWidth="5" strokeLinecap="round"
            />
          ))}
        </g>
      )
    },
  }

  return configs[chair.id]?.path || configs['chair-mesh'].path
}

// Accessory elements in the scene
function AccessoryElements({ accessories }) {
  const items = []

  let monitorCount = 0
  let plantCount = 0

  accessories.forEach((acc) => {
    if (acc.id === 'acc-monitor-1') {
      for (let i = 0; i < acc.qty; i++) {
        const x = 150 + monitorCount * 90
        items.push(
          <g key={`monitor-${i}`} transform={`translate(${x}, 85)`}>
            <rect x="-32" y="-60" width="64" height="46" rx="4" fill="#1a1a2e" />
            <rect x="-28" y="-56" width="56" height="38" rx="2" fill="#2a3a5e" />
            <rect x="-6" y="-14" width="12" height="14" rx="1" fill="#2a2a3a" />
            <rect x="-16" y="0" width="32" height="4" rx="2" fill="#2a2a3a" />
          </g>
        )
        monitorCount++
      }
    }

    if (acc.id === 'acc-monitor-ultrawide') {
      items.push(
        <g key="ultrawide" transform="translate(220, 85)">
          <rect x="-65" y="-55" width="130" height="42" rx="6" fill="#1a1a2e" />
          <rect x="-60" y="-51" width="120" height="34" rx="3" fill="#1e3a5e" />
          <rect x="-8" y="-13" width="16" height="13" rx="1" fill="#2a2a3a" />
          <rect x="-20" y="0" width="40" height="4" rx="2" fill="#2a2a3a" />
        </g>
      )
    }

    if (acc.id === 'acc-lamp') {
      items.push(
        <g key="lamp" transform="translate(400, 110)">
          <line x1="0" y1="0" x2="-20" y2="-55" stroke="#8a7a6a" strokeWidth="3" strokeLinecap="round" />
          <line x1="-20" y1="-55" x2="-5" y2="-85" stroke="#8a7a6a" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="-5" cy="-85" rx="16" ry="8" fill="#c8a830" />
          <circle cx="-5" cy="-85" r="5" fill="#ffe066" opacity="0.8" />
          <rect x="-6" y="-4" width="12" height="8" rx="2" fill="#6a5a4a" />
        </g>
      )
    }

    if (acc.id === 'acc-plant-small') {
      for (let i = 0; i < acc.qty; i++) {
        const x = 90 + i * 30
        items.push(
          <g key={`plant-sm-${i}`} transform={`translate(${x}, 138)`}>
            <rect x="-8" y="-10" width="16" height="12" rx="2" fill="#c85030" />
            <ellipse cx="0" cy="-12" rx="10" ry="14" fill="#4a8a3a" />
            <line x1="0" y1="-5" x2="8" y2="-18" stroke="#3a7a2a" strokeWidth="1.5" />
            <line x1="0" y1="-5" x2="-7" y2="-20" stroke="#3a7a2a" strokeWidth="1.5" />
          </g>
        )
        plantCount++
      }
    }

    if (acc.id === 'acc-plant-tall') {
      items.push(
        <g key="plant-tall" transform="translate(65, 100)">
          <rect x="-12" y="-5" width="24" height="20" rx="3" fill="#c85030" />
          <rect x="-9" y="-10" width="18" height="8" rx="2" fill="#b04020" />
          {/* Monstera leaves */}
          <ellipse cx="0" cy="-30" rx="20" ry="28" fill="#3a7a2a" transform="rotate(-20)" />
          <ellipse cx="15" cy="-50" rx="18" ry="25" fill="#4a8a3a" transform="rotate(15)" />
          <ellipse cx="-15" cy="-55" rx="16" ry="22" fill="#3a7a2a" transform="rotate(-10)" />
          <line x1="0" y1="-5" x2="5" y2="-55" stroke="#2a6a1a" strokeWidth="2" />
        </g>
      )
    }

    if (acc.id === 'acc-keyboard') {
      items.push(
        <g key="keyboard" transform="translate(220, 145)">
          <rect x="-55" y="-9" width="110" height="18" rx="4" fill="#2a2a3a" />
          {[...Array(5)].map((_, row) =>
            [...Array(10)].map((_, col) => (
              <rect key={`key-${row}-${col}`}
                x={-50 + col * 10}
                y={-7 + row * 3}
                width="8" height="2.5" rx="0.5"
                fill="#3a3a4a"
              />
            ))
          )}
        </g>
      )
    }

    if (acc.id === 'acc-speaker') {
      for (let i = 0; i < Math.min(acc.qty, 2); i++) {
        const x = i === 0 ? 80 : 360
        items.push(
          <g key={`speaker-${i}`} transform={`translate(${x}, 110)`}>
            <rect x="-14" y="-35" width="28" height="45" rx="4" fill="#2a2a3a" />
            <circle cx="0" cy="-18" r="9" fill="#1a1a2a" />
            <circle cx="0" cy="-18" r="6" fill="#333" />
            <circle cx="0" cy="0" r="4" fill="#1a1a2a" />
          </g>
        )
      }
    }

    if (acc.id === 'acc-mousepad') {
      items.push(
        <g key="mousepad" transform="translate(220, 145)">
          <rect x="-90" y="-8" width="180" height="22" rx="4" fill="#2a1a0e" opacity="0.7" />
        </g>
      )
    }

    if (acc.id === 'acc-headphones') {
      items.push(
        <g key="headphones" transform="translate(430, 120)">
          <path d="M-14,-20 Q0,-38 14,-20" fill="none" stroke="#333" strokeWidth="4" />
          <rect x="-18" y="-22" width="10" height="16" rx="5" fill="#444" />
          <rect x="8" y="-22" width="10" height="16" rx="5" fill="#444" />
        </g>
      )
    }

    if (acc.id === 'acc-webcam') {
      items.push(
        <g key="webcam" transform="translate(250, 32)">
          <rect x="-18" y="-8" width="36" height="14" rx="5" fill="#222" />
          <circle cx="0" cy="-2" r="5" fill="#333" />
          <circle cx="0" cy="-2" r="3" fill="#1a3a5a" />
          <rect x="-4" y="6" width="8" height="10" rx="1" fill="#333" />
        </g>
      )
    }

    if (acc.id === 'acc-dockstation') {
      items.push(
        <g key="dock" transform="translate(360, 140)">
          <rect x="-22" y="-12" width="44" height="20" rx="4" fill="#1a2a3a" />
          {[-12, 0, 12].map((x, i) => (
            <rect key={i} x={x - 2} y="-6" width="4" height="8" rx="1" fill="#3a6a9a" />
          ))}
        </g>
      )
    }

    if (acc.id === 'acc-whiteboard') {
      items.push(
        <g key="whiteboard" transform="translate(490, 90)">
          <rect x="-5" y="-80" width="55" height="75" rx="3" fill="white" stroke="#ddd" strokeWidth="1" />
          <rect x="-5" y="-80" width="55" height="8" rx="3" fill="#eee" />
          <line x1="5" y1="-55" x2="40" y2="-55" stroke="#ff6b35" strokeWidth="2" />
          <line x1="5" y1="-42" x2="30" y2="-42" stroke="#4ecdc4" strokeWidth="2" />
          <line x1="5" y1="-29" x2="35" y2="-29" stroke="#1a1a2e" strokeWidth="1.5" />
        </g>
      )
    }
  })

  return <>{items}</>
}

export default function WorkspacePreview({ desk, chair, accessories }) {
  const hasItems = desk || chair || accessories.length > 0

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {!hasItems ? (
        <div className="text-center space-y-3 animate-pulse">
          <div className="text-5xl">🏗️</div>
          <p className="font-display text-muted text-sm tracking-wide uppercase">
            Select items to begin
          </p>
        </div>
      ) : (
        <svg
          viewBox="0 0 500 310"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[340px] drop-shadow-sm"
          style={{ filter: 'drop-shadow(0 8px 24px rgba(26,26,46,0.08))' }}
        >
          {/* Floor shadow ellipse */}
          {desk && (
            <ellipse cx="250" cy="270" rx="200" ry="18" fill="rgba(0,0,0,0.06)" />
          )}

          {/* Desk */}
          <DeskSVG desk={desk} />

          {/* Accessories on desk */}
          <AccessoryElements accessories={accessories} />

          {/* Chair */}
          <ChairSVG chair={chair} />

          {/* Empty state items ghost */}
          {desk && !chair && (
            <g opacity="0.15">
              <g transform="translate(195, 200)">
                <rect x="-30" y="-95" width="60" height="80" rx="6" fill="#1a1a2e" />
                <rect x="-35" y="-18" width="70" height="22" rx="6" fill="#1a1a2e" />
              </g>
            </g>
          )}
        </svg>
      )}
    </div>
  )
}
