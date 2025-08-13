module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
        'primary-dark': '#0f766e',
        'primary-light': '#14b8a6',
        secondary: '#06b6d4',
      },
      animation: {
        'float': 'float 20s infinite ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'fillLevel': 'fillLevel 1.5s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(30px) rotate(240deg)' },
        },
        fillLevel: {
          from: { width: '0' },
        },
      },
      backgroundImage: {
        'gradient-teal': 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #5eead4 100%)',
        'gradient-1': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-2': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-3': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
    },
  },
  plugins: [],
}