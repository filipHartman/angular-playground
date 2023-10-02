const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
        colors: {
            'bg-green': '#5edb93',
            'primary-green': '#6dc066',
            'dark-green': '#20391e',
            'accent': '#268bd2',
        },
    },
  },
  plugins: [],
};
