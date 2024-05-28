import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: [
      {
        theme: {
          "primary": "#143C89",
          "primary-content": "#FFFFFF",
          "secondary": "#FFFFFF",
          "secondary-content": "#143C89",
          "accent": "#00ff00",
          "neutral": "#D9D9D9",
          "neutral-content": "000000",
          "base-100": "#ffffff", 
          "info": "#0000ff",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "whatsapp-background": "#ece5dd",
        "whatsapp-system-message": "#f7f7f6",
        "whatsapp-user-message": "#dcf8c6",
        "whatsapp-prompt": "#128c7e",
        "whatsapp-home": "#25d366",
        "whatsapp-main": "#075e54"
      }
    },
  }
};

export default config;
