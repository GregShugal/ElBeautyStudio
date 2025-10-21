/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: '#F4DDE1',
        lavender: '#E6D8F5',
        porcelain: '#FBFAF7',
        charcoal: '#2A2A2A',
        warmgray: '#6C6C6C',
        gold: '#C4A96A',
        emerald: '#1A8A6A',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.06)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
