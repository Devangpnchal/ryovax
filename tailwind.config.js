module.exports = {
  content: [
    './frontend/pages/**/*.{js,jsx}',
    './frontend/components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'soft-radial': 'radial-gradient(circle at top left, rgba(74, 222, 128, 0.2), transparent 45%), radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.18), transparent 50%)'
      },
      boxShadow: {
        glass: '0 10px 35px rgba(14, 21, 47, 0.15)'
      }
    }
  },
  plugins: []
};
