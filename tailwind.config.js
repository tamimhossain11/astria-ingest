/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "350px",
      sm: "575px",
      md: "768px",
      lg: "1025px",
      xl: "1920px",
    },
    fontFamily: {
      display: ['"CalSans-SemiBold"', "sans-serif"],
      body: ['"DM Sans"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      accent: "#8358FF",
      "accent-dark": "#7444FF",
      "accent-light": "#9E7CFF",
      "accent-lighter": "#B9A0FF",
      "light-base": "#F5F8FA",
      green: "#10b981",
      orange: "#FEB240",
      red: "#EF4444",
      blue: "#428AF8",
      jacarta: {
        base: "#5A5D79",
        50: "#F4F4F6",
        100: "#E7E8EC",
        200: "#C4C5CF",
        300: "#A1A2B3",
        400: "#7D7F96",
        500: "#5A5D79",
        600: "#363A5D",
        700: "#131740",
        800: "#101436",
        900: "#0D102D",
      },
      greens: {
        400: "#4fce5d",
        800: "#009b0f",
        A700_02: "#10cc00",
        A700_01: "#009d48",
        A700_33: "#10cc0033",
        A700: "#1ed760",
      },
      deep_purple: {
        A200_19: "#9f4deb19",
        A200: "#9f4deb",
        A200_cc: "#9f4debcc",
        A200_3f: "#9f4deb3f",
        A400: "#551bf9",
        A200_66: "#9f4deb66",
        A200_00: "#9f4deb00",
        A200_01: "#6b43fd",
        A200_02: "#9f4dea",
        A200_7f: "#9f4deb7f",
        A200_99: "#9f4deb99",
      },
      light_green: { 800: "#53a318", A700: "#7fba00" },
      reds: {
        600: "#e52836",
        800: "#cb2026",
        A700: "#bd0000",
        A200: "#ff5050",
        A700_01: "#ff0000",
        A700_33: "#ff000033",
      },
      light_blue: {
        100: "#a9d2fe",
        500: "#00a4ef",
        600: "#139ad6",
        "500_01": "#00acee",
        A700: "#0084ff",
        A400_7f: "#00c1ff7f",
        A700_26: "#0084ff26",
      },
      black: {
        900: "#05011d",
        900_01: "#000000",
        "900_00": "#04001d00",
        "900_99": "#05011d99",
        "900_19": "#05011d19",
        "900_3f": "#0000003f",
      },
      yellow: {
        700: "#f3b925",
        800: "#f5a623",
        900: "#e27625",
        A400: "#ffe500",
        "800_02": "#f6ac1d",
        "800_01": "#f7981d",
        "900_02": "#e17726",
        "900_01": "#f5841f",
        "900_04": "#f6921e",
        "900_03": "#e27525",
        A200_7f: "#f5fa007f",
      },
      blue_gray: { 900: "#233447" },
      whiter: {
        A700_4c: "#ffffff4c",
        A700_63: "#ffffff63",
        A700_33: "#ffffff33",
        A700_19: "#ffffff19",
        A700: "#ffffff",
        A700_6c: "#ffffff6c",
      },
      gray: {
        100: "#f5f5f5",
        200: "#eaeaea",
        300: "#dce5e5",
        400: "#d4c3b3",
        500: "#a5a5a5",
        600: "#818181",
        700: "#555555",
        800: "#4f4f4f",
        900: "#1f1f1f",
        "500_01": "#979797",
        "400_05": "#c3c3c3",
        "400_01": "#b4b4b4",
        "400_02": "#d5bfb2",
        "400_03": "#c0ac9d",
        "400_04": "#c6c6c6",
        "900_02": "#142029",
        "900_01": "#161616",
        "300_01": "#dadada",
      },
      oranges: {
        500: "#ff9900",
        600: "#ff8500",
        800: "#ed6c0c",
        900: "#e05a00",
        "600_01": "#ef8f00",
        "800_01": "#e26600",
        "900_01": "#d85107",
      },
      amber: {
        600: "#ffb700",
        "600_26": "#ffb80026",
        "600_01": "#ffb900",
        "600_02": "#ffb600",
      },
      blues: {
        A700: "#0052ff",
        A200_01: "#4a92ff",
        A200: "#4285f4",
      },
      purple: {
        100: "#ffacff",
        A700: "#bc00ff",
        A700_26: "#bd00ff26",
        A100: "#f7a0f9",
      },
      deep_orange: { 600: "#f25022", 800: "#cc6228" },
      lime: { 900: "#763e1a" },
      pink: { 600: "#d62976", A200: "#ff3567" },
      indigo: { 500: "#534bb1", "500_01": "#4267b2" },
    },

    textShadow: { ts: "0px 4px  4px #0000003f" },

    boxShadow: {
      bs5: "0px 5px  30px 0px #9f4debcc",
      bs7: "0px 0px  60px 0px #9f4deb3f",
      bs8: "0px 10px  60px 0px #9f4deb3f",
      bs1: "0px 10px  30px 0px #9f4deb99",
      bs: "0px 4px  35px 0px #299ad144",
      bs6: "-5px 10px  30px 0px #9f4deb99",
      bs2: "-6px 10px  20px 0px #9f4deb66",
      bs3: "-10px 10px  30px 0px #9f4deb99",
      bs4: "10px 10px  30px 0px #9f4deb99",
      none: "none",
      sm: "0px 1px 2px 0px rgba(13, 16, 45, 0.1)",
      base: "0px 1px 2px -1px rgba(13, 16, 45, 0.1), 0px 2px 4px 0px rgba(13, 16, 45, 0.1)",
      md: "0px 2px 4px -2px rgba(13, 16, 45, 0.1), 0px 4px 6px -1px rgba(13, 16, 45, 0.1)",
      lg: "0px 4px 6px -4px rgba(13, 16, 45, 0.1), 0px 10px 15px -3px rgba(13, 16, 45, 0.1)",
      xl: "0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)",
      "2xl":
        "0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)",
      "accent-volume":
        "5px 5px 10px rgba(108, 106, 213, 0.25), inset 2px 2px 6px #A78DF0, inset -5px -5px 10px #6336E4",
      "white-volume":
        "5px 5px 10px rgba(108, 106, 212, 0.25), inset 2px 2px 6px #EEF1F9, inset -5px -5px 10px #DFE3EF",
    },
    backgroundImage: {
      gradient: "linear-gradient(180deg ,#534bb1,#551bf9)",
      gradient1: "linear-gradient(180deg ,#04001d00,#05011d)",
      gradient2: "linear-gradient(270deg ,#9f4deb00,#9f4deb,#9f4deb00)",
      gradient3: "linear-gradient(223deg ,#ffacff,#f7a0f9)",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "normal" }],
      "2xs": ["0.8125rem", { lineHeight: "normal" }],
      sm: ["0.875rem", { lineHeight: "normal" }],
      base: ["1rem", { lineHeight: "normal" }],
      lg: ["1.25rem", { lineHeight: "normal" }],
      xl: ["1.5rem", { lineHeight: "normal" }],
      "2xl": ["1.75rem", { lineHeight: "normal" }],
      "3xl": ["2rem", { lineHeight: "normal" }],
      "4xl": ["2.25rem", { lineHeight: "normal" }],
      "5xl": ["2.5rem", { lineHeight: "normal" }],
      "6xl": ["3.5rem", { lineHeight: "normal" }],
      "7xl": ["4.25rem", { lineHeight: "normal" }],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },

    extend: {
      flex: {
        col: 'flex flex-col',
        row: 'flex flex-row',
      },
      borderRadius: {
        "2lg": "0.625rem",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      animation: {
        fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        progress: "progress 5s linear",
      },
      keyframes: {
        fly: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(0)" },
        },
        heartBeat: {
          "0%, 40%, 80%, 100%": { transform: "scale(1.1)" },
          "20%, 60%": { transform: "scale(.8)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
    namedGroups: ["dropdown"],
  },
  // variants: {
  // 	display: ['children', 'children-not'],
  // },
  plugins: [],
};
