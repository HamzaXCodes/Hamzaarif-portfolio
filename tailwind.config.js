/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          surface: '#f8faff',
          border: '#e4eaf6',
          text: '#282c3f',
          subtle: '#646e87',
        },
        dark: {
          bg: '#0a0c14',
          surface: '#121624',
          border: '#1e2133',
          text: '#e9edff',
          subtle: '#8494c7',
        },
        accent: {
          blue: '#2563eb',
          purple: '#7c3aed',
          cyan: '#38bdf8',
        },
        primary: '#4338ca',
        secondary: '#3b82f6',
        neutral: '#c7d2fe',
      },
      boxShadow: {
        card: '0 2px 24px 0 rgba(60,72,130,0.09)',
        "inner-md": 'inset 0 2px 8px 0 rgba(44,72,102,0.08)',
      },
      backgroundImage: theme => ({
        'hero-light': 'radial-gradient(circle at 60% 40%, #e9ebfd 0, #eef5ff 60%, #fff 100%)',
        'hero-dark': 'radial-gradient(ellipse at 60% 45%, #1e2644 0%, #0c1021 100%)',
        'main-gradient': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 67%, #38bdf8 100%)',
        'frosted-glass': 'linear-gradient(120deg,rgba(255,255,255,0.06) 80%,rgba(70,183,196,0.07) 100%)',
      }),
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px #7c3aed55)' },
          '50%': { filter: 'drop-shadow(0 0 32px #38bdf888)' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
          '100%': { transform: 'translateY(0)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        glow: 'glow 2.6s infinite alternate',
        float: 'float 4s ease-in-out infinite',
        spinSlow: 'rotate 12s linear infinite',
      }
    }
  },
  plugins: [],
};
