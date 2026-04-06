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
      colors: {
        brand: {
          primary:   '#1E5FAD',  // Main blue — nav, buttons, footer, headings
          dark:      '#154080',  // Darker blue — hover states, active
          light:     '#2E7DD1',  // Lighter blue — borders, highlights
          accent:    '#F5A623',  // Gold — CTAs, icons, badges, accent
          accentDark:'#D4891A',  // Darker gold — hover on accent buttons
          surface:   '#F0F4FA',  // Light blue-gray — section backgrounds
          muted:     '#6B7A9A',  // Muted text on light backgrounds
          dark_bg:   '#0D2B5E',  // Very dark blue — footer, dark sections
        }
      },
    },
  },
  plugins: [
    flowbitePlugin,
    flowbiteReactPlugin,
  ],
};