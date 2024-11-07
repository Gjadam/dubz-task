/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        120: "30rem"
      },
      height: {
        120: "30rem"
      },
      borderColor: {
        primary: "#D8DADC"
      },
      fontSize: {
        '8': "2rem"
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      borderRadius: {
        '2.5': '0.625rem',
      }
    },
  },
  plugins: [],
};
