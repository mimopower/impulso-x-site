import type { CSSProperties } from 'react';

const streams = [
  { left: '4%', delay: '-8s', duration: '17s', glyphs: '01001X10110' },
  { left: '13%', delay: '-15s', duration: '22s', glyphs: 'AI011001X01' },
  { left: '25%', delay: '-4s', duration: '19s', glyphs: '101X0011010' },
  { left: '38%', delay: '-12s', duration: '24s', glyphs: 'IX010101100' },
  { left: '52%', delay: '-19s', duration: '18s', glyphs: '0011AI0101X' },
  { left: '65%', delay: '-6s', duration: '21s', glyphs: '101001X1010' },
  { left: '76%', delay: '-17s', duration: '25s', glyphs: 'IA011010010' },
  { left: '88%', delay: '-10s', duration: '20s', glyphs: 'X1010011001' },
];

/** Decorative, transform-only background texture. Kept outside content flow. */
export function MatrixCodeRain() {
  return (
    <div className="matrix-code-rain" aria-hidden>
      {streams.map((stream) => (
        <span
          key={stream.left}
          className="matrix-code-rain__stream"
          style={
            {
              '--matrix-left': stream.left,
              '--matrix-delay': stream.delay,
              '--matrix-duration': stream.duration,
            } as CSSProperties
          }
        >
          {stream.glyphs}
        </span>
      ))}
    </div>
  );
}
