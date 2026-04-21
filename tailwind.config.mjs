/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        chinese: ['"PingFang SC"', '"Noto Sans SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      fontSize: {
        'chinese-lg': ['5rem', { lineHeight: '1.1', letterSpacing: '0.04em' }],
      },
    },
  },
};
