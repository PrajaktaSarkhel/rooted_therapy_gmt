import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40",   
        secondary: "#A3B18A", 
        accent: "#DAD7CD",    
        heading: "#344E41",   
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      },
      keyframes: {
        'ring-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(58, 90, 64, 0.7)' },
          '70%': { boxShadow: '0 0 0 15px rgba(58, 90, 64, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(58, 90, 64, 0)' },
        },
        'soft-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(58, 90, 64, 0.7)' 
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 10px rgba(58, 90, 64, 0)' 
          },
        },
      },
      animation: {
        'ring-pulse': 'ring-pulse 2s infinite',
        'soft-pulse': 'soft-pulse 2s infinite ease-in-out',
      },
    }, 
  },
  plugins: [],
};

export default config;