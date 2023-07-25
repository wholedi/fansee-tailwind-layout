/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    screens: {
      'bp375': '375px',
      'bp576': '576px',
      'bp768': '768px',
      'bp992': '992px',
      'bp1200': '1200px',
      'bp1440': '1440px',
      'bp1920': '1920px',
    },
    extend: {
      fontFamily: {
        'akzidenz': 'var(--font-akzidenz)',
        'manrope': 'var(--font-manrope)',
      },
      colors: {
        'accent': 'rgba(var(--accent), <alpha-value>)',

        'background-primary': 'rgba(var(--background-primary), <alpha-value>)',
        'background-secondary': 'rgba(var(--background-secondary), <alpha-value>)',

        'primary': 'rgba(var(--text-primary), <alpha-value>)',
        'secondary': 'rgba(var(--text-secondary), <alpha-value>)',
        'highlighted': 'rgba(var(--text-highlighted), <alpha-value>)',

        'input-icon-active': 'rgba(var(--input-icon-active), <alpha-value>)',
        'input-icon-disabled': 'rgba(var(--input-icon-disabled), <alpha-value>)',
        'input-border-active': 'rgba(var(--input-border-active), <alpha-value>)',
        'input-border-disabled': 'rgba(var(--input-border-disabled), <alpha-value>)',
        'input-text-form': 'rgba(var(--input-text-form), <alpha-value>)',
        'input-text-error': 'rgba(var(--input-text-error), <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial-type1': 'var(--radial-gradient-type-1)',
        'gradient-radial-type2': 'var(--radial-gradient-type-2)',
      }
    },
  },
  plugins: [],
};

