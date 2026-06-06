/** @type {import('tailwindcss').Config} */
export default {
  // Theme is driven by a `.dark` class on <html>, toggled from React state.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Semantic tokens. Every value resolves to a CSS variable defined in
      // src/index.css, so a single `.dark` class flip re-themes the whole app
      // and the values cross-fade via the global color transition.
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        surface: "var(--surface)",
        card: "var(--card)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        text: "var(--text)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-border": "var(--accent-border)",
        hover: "var(--hover)",
        media: "var(--media)",
        "tag-bg": "var(--tag-bg)",
        "dot-live": "var(--dot-live)",
        "cv-bg": "var(--cv-bg)",
        "cv-fg": "var(--cv-fg)",
      },
      fontFamily: {
        // Distinctive display + refined body, matching the signed-off design.
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "var(--sh-sm)",
        md: "var(--sh-md)",
        lg: "var(--sh-lg)",
        "accent-glow": "0 12px 30px -10px var(--accent-glow)",
        "accent-glow-lg": "0 18px 38px -10px var(--accent-glow)",
      },
      borderRadius: {
        "4xl": "28px",
      },
      maxWidth: {
        wrap: "1200px",
      },
      transitionTimingFunction: {
        // The easing curve used across the original reveals.
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        // Single GPU transform — the aurora layer only ever rotates.
        "aurora-spin": {
          from: { transform: "translate3d(-50%,-50%,0) rotate(0deg)" },
          to: { transform: "translate3d(-50%,-50%,0) rotate(360deg)" },
        },
        // Live availability dot.
        "pulse-dot": {
          "0%,100%": { boxShadow: "0 0 0 4px rgba(52,211,153,0.16)" },
          "50%": { boxShadow: "0 0 0 7px transparent" },
        },
      },
      animation: {
        "aurora-spin": "aurora-spin 44s linear infinite",
        "pulse-dot": "pulse-dot 2.4s infinite",
      },
    },
  },
  plugins: [],
};
