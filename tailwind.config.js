import flowbitePlugin from 'flowbite/plugin';
import flowbiteReactPlugin from 'flowbite-react/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
    },
  },
  plugins: [
    flowbitePlugin,
    flowbiteReactPlugin,
  ],
};