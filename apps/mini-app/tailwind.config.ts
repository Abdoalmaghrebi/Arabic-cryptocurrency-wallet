import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        card: '#111827',
        primary: '#2563eb'
      }
    }
  },
  plugins: []
};

export default config;
