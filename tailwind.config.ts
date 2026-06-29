import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        ink2: '#141414',
        surface: '#1A1A1A',
        metal: '#888888',
        steel: '#B8B2A5',
        gold: '#C9A227',
        'gold-soft': '#D8B84D',
        'gold-dim': '#756225',
        cream: '#F4F0E7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.25rem, 5.2vw, 5rem)', { lineHeight: '0.98' }],
        display: ['clamp(2.2rem, 4.6vw, 5rem)', { lineHeight: '1' }],
        title: ['clamp(1.55rem, 2.6vw, 2.8rem)', { lineHeight: '1.08' }],
        lead: ['clamp(1.05rem, 1.25vw, 1.35rem)', { lineHeight: '1.55' }],
      },
      spacing: {
        sectionTight: 'clamp(3.5rem, 5.8vw, 6.5rem)',
        section: 'clamp(4.5rem, 7.5vw, 8.5rem)',
        sectionWide: 'clamp(5.5rem, 9vw, 10rem)',
        gutter: 'clamp(1rem, 4vw, 3rem)',
      },
      maxWidth: {
        container: '1440px',
        prose: '68ch',
      },
      borderRadius: {
        brand: 'var(--radius-brand)',
        card: 'var(--radius-card)',
        'card-lg': 'var(--radius-card-lg)',
        control: 'var(--radius-control)',
        pill: 'var(--radius-pill)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        'shield-breathe': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -10px, 0) scale(1.015)' },
        },
        'line-flow': {
          '0%': { transform: 'translateX(-18%)', opacity: '0.25' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateX(18%)', opacity: '0.25' },
        },
      },
      animation: {
        'shield-breathe': 'shield-breathe 9s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'line-flow': 'line-flow 8s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
