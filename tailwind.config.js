/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#070f26',
        bgSecondary: '#0e1738',
        cardBg: 'rgba(255, 255, 255, 0.05)',
        glassBg: 'rgba(255, 255, 255, 0.08)',
        borderLine: 'rgba(255, 255, 255, 0.08)',
        accent: {
          DEFAULT: '#2563eb',
          hover: '#3b82f6',
          glow: 'rgba(37, 99, 235, 0.45)',
          muted: 'rgba(37, 99, 235, 0.15)',
        },
        textMain: '#ffffff',
        textMuted: '#cbd5e1',
        textSecondary: '#94a3b8',
        textSubtle: '#64748b',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'button': '999px',
        'card': '24px',
        'image': '28px',
        'input': '18px',
      },
      boxShadow: {
        'soft-glow': '0 0 30px rgba(37, 99, 235, 0.25)',
        'accent-glow': '0 0 50px rgba(37, 99, 235, 0.45)',
        'glass-card': '0 15px 40px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
