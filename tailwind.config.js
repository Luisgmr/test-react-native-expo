module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  // Adiciona as utilities do NativeWind
  presets: [require('nativewind/preset')],
  important: 'html',

  theme: {
    extend: {},
  },
  plugins: [],
};
