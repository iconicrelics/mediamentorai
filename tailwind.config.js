/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-purple': '#8b5cf6',
        'electric-purple-dark': '#7c3aed',
        'electric-cyan': '#06b6d4',
        'electric-blue': '#3b82f6',
        'hot-pink': '#ec4899',
        'deep-bg': '#0a0a0f',
        'dark-bg': '#0d0d1a',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'glow': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'slide-up': 'slideUpFade 0.6s ease forwards',
        'fade-in': 'fadeInUp 0.8s ease forwards',
        'pulse-glow': 'glow-pulse 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -20px) rotate(5deg)' },
          '50%': { transform: 'translate(-15px, 15px) rotate(-5deg)' },
          '75%': { transform: 'translate(15px, 10px) rotate(3deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUpFade: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
