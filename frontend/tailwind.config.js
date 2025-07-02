/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-star1": "moveStar1 4s infinite ease-in-out",
        "move-star2": "moveStar2 5s infinite ease-in-out",
        "move-star3": "moveStar3 6s infinite ease-in-out",
        "move-star4": "moveStar4 7s infinite ease-in-out",
        "move-star5": "moveStar5 8s infinite ease-in-out",
      },
      keyframes: {
        moveStar1: {
          "0%": { transform: "translate(0, 0) scale(0.8)", opacity: "0.3" },
          "50%": {
            transform: "translate(15px, -15px) scale(1)",
            opacity: "0.5",
          },
          "100%": { transform: "translate(0, 0) scale(0.8)", opacity: "0.3" },
        },
        moveStar2: {
          "0%": { transform: "translate(0, 0) scale(0.6)", opacity: "0.3" },
          "50%": {
            transform: "translate(-15px, 10px) scale(1)",
            opacity: "0.5",
          },
          "100%": { transform: "translate(0, 0) scale(0.6)", opacity: "0.3" },
        },
        moveStar3: {
          "0%": { transform: "translate(0, 0) scale(0.7)", opacity: "0.3" },
          "50%": {
            transform: "translate(20px, -20px) scale(1)",
            opacity: "0.5",
          },
          "100%": { transform: "translate(0, 0) scale(0.7)", opacity: "0.3" },
        },
        moveStar4: {
          "0%": { transform: "translate(0, 0) scale(0.9)", opacity: "0.3" },
          "50%": {
            transform: "translate(-25px, 25px) scale(1)",
            opacity: "0.5",
          },
          "100%": { transform: "translate(0, 0) scale(0.9)", opacity: "0.3" },
        },
        moveStar5: {
          "0%": { transform: "translate(0, 0) scale(0.75)", opacity: "0.3" },
          "50%": {
            transform: "translate(30px, -10px) scale(1)",
            opacity: "0.5",
          },
          "100%": { transform: "translate(0, 0) scale(0.75)", opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};
