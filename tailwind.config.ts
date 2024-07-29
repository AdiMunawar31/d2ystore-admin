/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        print: { raw: "print" },
      },
      colors: {
        placeholder: "var(--placeholder)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        neutral: {
          grey: {
            200: {
              bg: "var(--neutral-grey-200-bg)",
            },
            300: {
              "disable-btn": "var(--neutral-grey-300-disable-btn)",
            },
            400: {
              DEFAULT: "var(--neutral-grey-400)",
            },
            500: {
              "disable-text": "var(--neutral-grey-500-disable-text)",
            },
            600: {
              "body-text": "var(--neutral-grey-600-body-text)",
            },
            900: {
              DEFAULT: "var(--neutral-grey-900)",
            },
          },
        },
        main: {
          blue: {
            DEFAULT: "var(--main-blue)",
            lightest: "var(--main-blue-lightest)",
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        active: {
          DEFAULT: "var(--active)",
          foreground: "var(--active-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          lightest: {
            DEFAULT: "var(--primary-lightest)",
            foreground: "var(--primary-lightest-foreground)",
          },
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
          lightest: {
            DEFAULT: "var(--success-lightest)",
            foreground: "var(--success-lightest-foreground)",
          },
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
          lightest: {
            DEFAULT: "var(--destructive-lightest)",
            foreground: "var(--destructive-lightest-foreground)",
          },
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
          lightest: {
            DEFAULT: "var(--warning-lightest)",
            foreground: "var(--warning-lightest-foreground)",
          },
        },
        pink: {
          DEFAULT: "var(--pink)",
          foreground: "var(--pink-foreground)",
          lightest: {
            DEFAULT: "var(--pink-lightest)",
            foreground: "var(--pink-lightest-foreground)",
          },
        },
        purple: {
          DEFAULT: "var(--purple)",
          foreground: "var(--purple-foreground)",
          lightest: {
            DEFAULT: "var(--purple-lightest)",
            foreground: "var(--purple-lightest-foreground)",
          },
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
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
    },
  },
  plugins: [require("tailwindcss-animate"), "prettier-plugin-tailwindcss"],
}
