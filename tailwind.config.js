/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f0ff',
        'neon-purple': '#b000ff',
        'neon-pink': '#ff00e5',
        'dark-bg': '#0a0a0f',
        'dark-surface': '#151520',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 20px #00f0ff, 0 0 30px #00f0ff, 0 0 40px #00f0ff' },
          '100%': { textShadow: '0 0 30px #b000ff, 0 0 40px #b000ff, 0 0 50px #b000ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
