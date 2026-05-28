type GlowProps = {
  intensity?: 'soft' | 'medium' | 'strong';
  position?: 'top' | 'center' | 'bottom';
  className?: string;
};

const intensityMap = {
  soft: 0.12,
  medium: 0.22,
  strong: 0.35,
};

const positionMap = {
  top: '0%',
  center: '50%',
  bottom: '100%',
};

export function Glow({ intensity = 'soft', position = 'center', className = '' }: GlowProps) {
  const op = intensityMap[intensity];
  const pos = positionMap[position];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(ellipse 60% 45% at 50% ${pos}, rgba(212, 175, 55, ${op}) 0%, rgba(212, 175, 55, ${op * 0.25}) 35%, transparent 70%)`,
      }}
    />
  );
}
