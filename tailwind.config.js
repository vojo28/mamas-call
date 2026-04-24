module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#166534",
        primaryLight: "#22C55E",

        background: "#F9FAFB",
        foreground: "#111827",

        muted: "#6B7280",
        border: "#E5E7EB",
        card: "#FFFFFF",

        danger: "#DC2626",
        dangerBg: "#FEF2F2",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};