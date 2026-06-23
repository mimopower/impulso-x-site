'use client';

type Variant = 'hero' | 'services' | 'process' | 'cta';

interface GoldCircuitLinesProps {
  variant: Variant;
  className?: string;
}

/**
 * GoldCircuitLines — ambient gold circuit-trace decoration.
 *
 * Design intent: echoes the gold circuit traces on the Impulso X shield.
 * Rules:
 *   - Only transform + opacity (GPU, no layout thrash)
 *   - opacity 0.06–0.14 — never competes with text
 *   - prefers-reduced-motion is handled in CSS to keep hydration stable
 *   - No SVG filters (too heavy in Safari)
 *   - Mobile: greatly reduced or hidden to avoid clutter
 */
export function GoldCircuitLines({ variant, className = '' }: GoldCircuitLinesProps) {
  const gold = 'rgba(201,162,39,';

  if (variant === 'hero') {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 right-0 hidden select-none md:block ${className}`}
        style={{ width: 'clamp(200px, 28vw, 400px)', opacity: 0.13 }}
      >
        <svg
          viewBox="0 0 200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Vertical spine */}
          <line x1="40" y1="0" x2="40" y2="600" stroke={`${gold}0.6)`} strokeWidth="0.8" />
          {/* Horizontal branches */}
          <line x1="40" y1="120" x2="130" y2="120" stroke={`${gold}0.5)`} strokeWidth="0.8" />
          <line x1="40" y1="240" x2="170" y2="240" stroke={`${gold}0.5)`} strokeWidth="0.8" />
          <line x1="40" y1="360" x2="110" y2="360" stroke={`${gold}0.5)`} strokeWidth="0.8" />
          <line x1="40" y1="480" x2="150" y2="480" stroke={`${gold}0.5)`} strokeWidth="0.8" />
          {/* Node circles */}
          <circle cx="40" cy="120" r="2.5" fill={`${gold}0.7)`} />
          <circle cx="130" cy="120" r="2.5" fill={`${gold}0.7)`} />
          <circle cx="40" cy="240" r="2.5" fill={`${gold}0.7)`} />
          <circle cx="170" cy="240" r="2.5" fill={`${gold}0.7)`} />
          <circle cx="40" cy="360" r="2.5" fill={`${gold}0.7)`} />
          <circle cx="110" cy="360" r="2.5" fill={`${gold}0.7)`} />
          <circle cx="40" cy="480" r="2.5" fill={`${gold}0.7)`} />
          <circle cx="150" cy="480" r="2.5" fill={`${gold}0.7)`} />
          {/* Animated pulse dot — translates along the vertical spine */}
          <circle className="gold-circuit-motion" cx="40" cy="0" r="3" fill={`${gold}0.85)`}>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,600; 0,0"
              dur="8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.16 1 0.3 1; 0.16 1 0.3 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    );
  }

  if (variant === 'services') {
    // Animated segment sliding along the hairline at section top
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 select-none ${className}`}
        style={{ height: '1px', overflow: 'visible' }}
      >
        <div
          className="gold-circuit-motion absolute top-0 h-px"
          style={{
            width: '15%',
            background: `linear-gradient(90deg, transparent, ${gold}0.7), transparent)`,
            animation: 'line-flow 8s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate',
          }}
        />
      </div>
    );
  }

  if (variant === 'process') {
    // Vertical line that runs alongside the step numbers 01-04
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 hidden select-none lg:block ${className}`}
        style={{ width: '2px', height: '100%', opacity: 0.12 }}
      >
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(to bottom, transparent 5%, ${gold}0.7) 20%, ${gold}0.7) 80%, transparent 95%)`,
          }}
        />
        <div
          className="gold-circuit-motion absolute left-0 w-full"
          style={{
            height: '20%',
            background: `linear-gradient(to bottom, transparent, ${gold}1), transparent)`,
            animation: 'process-pulse 5s cubic-bezier(0.16, 1, 0.3, 1) infinite',
          }}
        />
      </div>
    );
  }

  if (variant === 'cta') {
    // Diagonal circuit line for cinematic atmosphere in CTA section
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 hidden select-none md:block ${className}`}
        style={{ opacity: 0.08 }}
      >
        <svg
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Horizontal spines */}
          <line x1="0" y1="100" x2="800" y2="100" stroke={`${gold}0.5)`} strokeWidth="0.7" />
          <line x1="0" y1="300" x2="800" y2="300" stroke={`${gold}0.5)`} strokeWidth="0.7" />
          {/* Vertical connectors */}
          <line x1="200" y1="100" x2="200" y2="300" stroke={`${gold}0.4)`} strokeWidth="0.7" />
          <line x1="400" y1="100" x2="400" y2="300" stroke={`${gold}0.4)`} strokeWidth="0.7" />
          <line x1="600" y1="100" x2="600" y2="300" stroke={`${gold}0.4)`} strokeWidth="0.7" />
          {/* Nodes */}
          <circle cx="200" cy="100" r="2" fill={`${gold}0.7)`} />
          <circle cx="400" cy="100" r="2" fill={`${gold}0.7)`} />
          <circle cx="600" cy="100" r="2" fill={`${gold}0.7)`} />
          <circle cx="200" cy="300" r="2" fill={`${gold}0.7)`} />
          <circle cx="400" cy="300" r="2" fill={`${gold}0.7)`} />
          <circle cx="600" cy="300" r="2" fill={`${gold}0.7)`} />
          {/* Animated pulse across top spine */}
          <circle className="gold-circuit-motion" cx="0" cy="100" r="3" fill={`${gold}0.9)`}>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 800,0; 0,0"
              dur="10s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.16 1 0.3 1; 0.16 1 0.3 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    );
  }

  return null;
}
