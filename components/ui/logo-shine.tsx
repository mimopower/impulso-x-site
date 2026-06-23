'use client';

interface LogoShineProps {
  variant?: 'full' | 'subtle' | 'intro';
  className?: string;
}

/**
 * LogoShine — cinematic 3-layer light effect on the Impulso X shield.
 *
 * Reference prompt: "Animação cinematográfica em 3D: o lado metálico reflete a luz,
 * os circuitos do lado direito brilham com pulsos de energia dourada, câmera se
 * aproximando lentamente do centro."
 *
 * Layers:
 *   (a) Metallic sheen sweep — diagonal highlight traversing the face
 *   (b) Energy pulse — right-side golden glow evoking circuit energy
 *
 * Camera zoom (c) is applied to the parent container (logo-zoom animation).
 *
 * Rules:
 *   - Only transform + opacity (GPU, no layout thrash)
 *   - mask-image clips all layers to the shield silhouette
 *   - prefers-reduced-motion is handled in CSS to keep hydration stable
 *   - No SVG filters, no libs
 */
export function LogoShine({ variant = 'full', className = '' }: LogoShineProps) {
  const maskStyle = {
    WebkitMaskImage: "url('/assets/identidade/marca-escudo.webp')",
    maskImage: "url('/assets/identidade/marca-escudo.webp')",
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  };

  const isFull = variant === 'full';
  const isIntro = variant === 'intro';

  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 select-none ${className}`}
    >
      {/* (a) Metallic sheen — diagonal sweep across the face */}
      <span
        className="logo-shine-sweep absolute inset-0"
        style={{
          ...maskStyle,
          background:
            'linear-gradient(105deg, transparent 36%, rgba(255,255,255,0.54) 47%, rgba(216,184,77,0.44) 52%, transparent 63%)',
          animation: isIntro
            ? 'logo-shine 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.08s 1 both'
            : `logo-shine ${isFull ? '5.5s' : '7s'} cubic-bezier(0.16, 1, 0.3, 1) infinite`,
          animationDelay: isIntro ? undefined : isFull ? '0.6s' : '2s',
        }}
      />
      {/* (b) Energy pulse — right-side circuit glow */}
      <span
        className="logo-shine-energy absolute inset-0"
        style={{
          ...maskStyle,
          background:
            'radial-gradient(ellipse 55% 62% at 78% 50%, rgba(216,184,77,0.68), rgba(201,162,39,0.2) 48%, transparent 72%)',
          animation: isIntro
            ? 'logo-energy 0.72s ease-in-out 0.12s 1 alternate both'
            : `logo-energy ${isFull ? '3.2s' : '4.2s'} ease-in-out infinite alternate`,
          animationDelay: isIntro ? undefined : isFull ? '1.2s' : '2.8s',
        }}
      />
    </span>
  );
}
