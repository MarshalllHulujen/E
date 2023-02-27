/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.jsx",
    "./src/components/body.jsx",
    "./src/components/footer.jsx",
    "./src/components/header.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/Signin.jsx",
    "./src/pages/Signup.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
      },
    },
  },
  plugins: [],
};
