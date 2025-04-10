import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px', // set the max-width for container class
      },
      boxShadow: {
        'upward': '0 -10px 20px rgba(0, 0, 0, 0.2)', // Custom upward shadow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bcHead: {
          red:'#d1fae5',
        },
        C:{
          Violet:'#4F2D83',
          Blue:"rgb(91,32,240)",
          Gray:'#808080',
          Lgray:"#F5F6FA",
          Bviolet:'blueviolet',
          Yellow:'rgb(255, 219, 76)',
          BgNav:'#98F5F9',
          Btn1:'#DFB81C',
          BlackV:'#26004d'
        }
      },
    },
  },
  plugins: [],
}




export default config
