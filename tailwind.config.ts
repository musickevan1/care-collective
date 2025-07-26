import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, calming palette for caregivers with high contrast for accessibility
        primary: {
          50: '#fef7ed',
          100: '#fedecb', 
          200: '#fcb886',
          300: '#f98b40',
          400: '#f97316', // Main warm orange
          500: '#ea580c',
          600: '#dc2626', 
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#451a03'
        },
        // High contrast grays for accessibility compliance
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        // Semantic colors for caregiving context
        care: {
          warmth: '#f97316', // Primary warm orange
          comfort: '#fef7ed', // Light warm background
          support: '#16a34a', // Green for positive actions
          urgent: '#dc2626',   // Red for urgent needs
          calm: '#0ea5e9'     // Blue for informational
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Larger base sizes for accessibility
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], 
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      spacing: {
        // Touch-friendly spacing
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;