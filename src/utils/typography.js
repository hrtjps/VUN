import Typography from 'typography'

const typography = new Typography({
  title: 'PerfectedApp',
  baseFontSize: '18px',
  baseLineHeight: 1.4,
  scaleRatio: 2.7,
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400'],
    },
    {
      name: 'Poppins',
      styles: ['600'],
    },
  ],
  headerFontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
  headerGray: 20,
  bodyGray: 20,
});

export default typography;