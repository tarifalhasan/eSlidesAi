/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        hero: "radial-gradient(289.46% 83.06% at 49.97% 48.3%, #FFF 0%, rgba(231, 238, 251, 0.84) 48.28%, rgba(244, 247, 251, 0.00) 100%)",
        gradient1:
          "linear-gradient(270deg, rgba(236, 240, 249, 0.80) 0.17%, rgba(240, 243, 250, 0.73) 48.25%, rgba(244, 247, 251, 0.00) 99.77%)",
      },
      colors: {
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#667599",
          foreground: "#fff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "dark-gray-25": "#E6E8EE",
        "dark-999": "#020817",
        gray: "#64748B",
        "gray-1000": "#001853",
        "gray-550": "#4B5563",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "card-sm":
          "0px 13px 28px 0px rgba(0, 0, 0, 0.10), 0px 51px 51px 0px rgba(0, 0, 0, 0.09), 0px 116px 69px 0px rgba(0, 0, 0, 0.05), 0px 206px 82px 0px rgba(0, 0, 0, 0.01), 0px 321px 90px 0px rgba(0, 0, 0, 0.00)",
      },
      fontFamily: {
        inter: "var(--inter)",
        anek_bangla: "var(--anek_bangla)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
