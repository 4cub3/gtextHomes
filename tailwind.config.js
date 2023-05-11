/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Playfair", "serif"],
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
    },
    flex: {
      2: "0, 0, 40%",
      3: "0,0,60%",
    },
    extend: {
      colors: {
        "red-gtext": "#FF0000",
        "blue-gtext": "#428EBE",
        "blue-10": "#010615",
        "white-10": "#E5E5E5",
      },
      backgroundImage: {
        "living1-room": "url('./Living-room1.jpg')",
        "living2-room": "url('./Living-room2.jpg')",
        "living3-room": "url('./Living-room3.jpg')",
        spiral: "url('./Group.svg')",
        Nigeria: "url('./image 29.png')",
        Dubai: "url('./image 22.png')",
        UK: "url('./image 24.png')",
        US: "url('./image 25.png')",
      },
      animation: {
        living1: "living1 2s ease-in-out  ",
        living2: "living2 2s ease-in-out  ",
        living3: "living3 2s ease-in-out  ",
        pulse: "pulse .1s ease-in-out",
      },
      keyframes: {
        living1: {
          "0%": { transform: "translateY(50%)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        living2: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        living3: {
          "0%": { transform: "translateY(-50%)", opacity: "0.5" },
          // '50%' :{transform : 'translateY(-30%)'},
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
