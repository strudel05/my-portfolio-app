/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          inverted: "var(--color-text-inverted)",
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          accent: "var(--color-accent)",
        },
      },
      backgroundColor: {
        skin: {
          alwaysdark: "var(--color-fill-alwaysdark)",
          alwaysdarkalpha: "var(--color-fill-alwaysdarkalpha)",
          base: "var(--color-fill-base)",
          basealpha: "var(--color-fill-basealpha)",
          muted: "var(--color-fill-muted)",
          moremuted: "var(--color-fill-moremuted)",
          accent: "var(--color-accent)",
          accentalpha: "var(--color-accentalpha)",
        },
      },
      borderColor: {
        skin: {
          accent: "var(--color-accent)",
        },
      },
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Fira Mono", "monospace"],
    },
  },
};
