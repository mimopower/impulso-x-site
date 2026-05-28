import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        ink2: '#111111',
        surface: '#1A1A1A',
        gold: '#D4AF37',
        'gold-dim': '#8C7321',
        'gold-deep': '#5C4A0E',
        grafite: '#3A3A3A',
        mist: '#A8A8A8',
        cream: '#F5F5F0',
      },
      fontFamily: {
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 9vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        display: ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '0.96', letterSpacing: '-0.02em' }],
        title: ['clamp(1.75rem, 2.6vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        lead: ['clamp(1.125rem, 1.3vw, 1.5rem)', { lineHeight: '1.45' }],
      },
      spacing: {
        section: 'clamp(5rem, 8vw, 10rem)',
        gutter: 'clamp(1.25rem, 4vw, 3rem)',
      },
      maxWidth: {
        container: '1440px',
        prose: '64ch',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        'gold-sweep': {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'gold-sweep': 'gold-sweep 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
