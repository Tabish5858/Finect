/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
        padding: "12px",
      },
      padding: {
        50: "50px",
        70: "70px",
        100: "100px",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          primaryBg: "var(--background)",
          gradientMain: "var(--gradient-main)",
          gradientSecondary: "var(--gradient-secondary)",
          buttonbg: "var(--button-bg)",
        },

        primary: {
          DEFAULT: "var(--primaryColor)",
        },

        secondary: {
          DEFAULT: "var(--secondaryColor)",
        },

        gradientMain: {
          DEFAULT: "var(--gradient-main)",
        },

        borderColor: {
          DEFAULT: "var(--border-1)",
          border2: "var(--border-2)",
        },
      },
      fontFamily: {
        main: ['"Helvetica Now Display"', "sans-serif"],
      },
      backgroundImage: {
        ribbion_1: "url('../images/bg/ribbion.png')",
        ribbion_2: "url('../images/bg/ribbion_2.png')",
        dotted_bg: "url('../images/bg/dotted_bg.png')",
        ballbg: "url('../images/bg/ball_bg.png')",
        ballbgmobile: "url('../images/bg/ball_bg_mobile.png')",
        graphbg: "url('../images/bg/Graph.png')",
      },
      keyframes: {
        slideFadeTwistEntrance: {
          "0%": {
            transform: "translateY(100vh) rotate(-30deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
        },
        scroll: {
          " 0% ": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 7))",
          },
        },
        pulse: {
          "0%": {
            boxShadow: "0 0 0 5px rgba(255, 255, 255, 1)",
          },
          "50%": {
            opacity: "1",
          },
          "70%": {
            boxShadow: "0 0 0 15px rgba(255, 255, 255, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 5px rgba(255, 255, 255, 0)",
          },
        },
        slideDown: {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(0%)",
          },
          to: {
            transform: "translateY(-100%)",
          },
        },
      },
      animation: {
        slideFadeTwistEntrance:
          "slideFadeTwistEntrance 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
        scroll: "scroll 40s linear infinite",
        pulse: "pulse 2s infinite",
        slideDown: "slideDown 0.3s ease forwards",
        slideUp: "slideUp 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
