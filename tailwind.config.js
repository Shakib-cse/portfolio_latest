/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        background: "var(--bg-base)",
        foreground: "var(--text-primary)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        card: {
          DEFAULT: "var(--bg-card)",
          hover: "var(--bg-card-hover)",
        },
        border: "var(--border-subtle)",
        accent: {
          violet:  "#7C3AED",
          violet2: "#9B5CF6",
          blue:    "#2563EB",
          cyan:    "#06B6D4",
          gold:    "#F59E0B",
          emerald: "#10B981",
        },
        text: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted:     "var(--text-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      animation: {
        "gradient-shift":  "gradientShift 6s ease-in-out infinite alternate",
        "shimmer":         "shimmerSweep 2.5s ease-in-out infinite",
        "float":           "floatY 4s ease-in-out infinite",
        "pulse-glow":      "pulseGlow 2.5s ease-in-out infinite",
        "bounce-down":     "bounceDown 1.8s ease-in-out infinite",
        "skill-bar":       "skillBarGlow 3s ease-in-out infinite alternate",
        "bg-pulse":        "bgPulse 12s ease-in-out infinite alternate",
        "ping-slow":       "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "spin-slow":       "spin 8s linear infinite",
        "fade-in-up":      "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-cosmic": "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
        "gradient-warm":   "linear-gradient(135deg, #7C3AED 0%, #F59E0B 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-violet": "0 0 20px rgba(124, 58, 237, 0.4), 0 0 60px rgba(124, 58, 237, 0.15)",
        "glow-cyan":   "0 0 20px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.15)",
        "glow-gold":   "0 0 20px rgba(245, 158, 11, 0.4)",
        "card-hover":  "0 20px 60px -12px rgba(0,0,0,0.5), 0 0 40px -8px rgba(124, 58, 237, 0.25)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      backdropBlur: {
        "xl2": "28px",
      },
    },
  },
  plugins: [],
};
