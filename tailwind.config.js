// import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

module.exports = {
  // mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  plugins: [],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px"
      },
      container: {
        fluid: {
          maxWidth: "100%"
        }
      },
      fontFamily: {
        sans: [
          "Wanted Sans Variable",
          "Wanted Sans",
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif"
        ],
        serif: ["Lora", "serif"]
      },
      colors: {
        main: {
          DEFAULT: "#a21958",
          50: "#fdf2f9",
          100: "#fce7f4",
          200: "#fbcfeb",
          300: "#f8a9d8",
          400: "#f373bd",
          500: "#eb49a2",
          600: "#da2881",
          700: "#bd1966",
          800: "#a21958",
          900: "#821949",
          950: "#4f0828"
        },
        sub: {
          DEFAULT: "#f47464",
          50: "#fef3f2",
          100: "#fde6e3",
          200: "#fdd1cb",
          300: "#fab0a7",
          400: "#f47464",
          500: "#eb5a48",
          600: "#d83d2a",
          700: "#b6301f",
          800: "#962b1e",
          900: "#7d291f",
          950: "#44110b"
        },

        red: {
          DEFAULT: "#ca391c",
          50: "#fef4ee",
          100: "#fce7d8",
          200: "#f7cbb1",
          300: "#f2a67f",
          400: "#ec784b",
          500: "#e75428",
          600: "#ca391c",
          700: "#b32c1b",
          800: "#8f251d",
          900: "#73221b",
          950: "#3e0e0c"
        },
        blue: {
          DEFAULT: "#1e6db4",
          50: "#f2f8fd",
          100: "#e4eefa",
          200: "#c3dcf4",
          300: "#8ec1eb",
          400: "#52a0de",
          500: "#2c85cb",
          600: "#1e6db4",
          700: "#18548c",
          800: "#184874",
          900: "#193c61",
          950: "#112740"
        },
        yellow: {
          DEFAULT: "#efb700",
          50: "#fffde7",
          100: "#fffcc1",
          200: "#fff486",
          300: "#ffe641",
          400: "#ffd30d",
          500: "#efb700",
          600: "#d18e00",
          700: "#a66402",
          800: "#894e0a",
          900: "#74400f",
          950: "#442104"
        },

        green: {
          DEFAULT: "#26a048",
          50: "#f1fcf3",
          100: "#dff9e6",
          200: "#c1f1ce",
          300: "#90e5a7",
          400: "#58d079",
          500: "#32b556",
          600: "#26a048",
          700: "#1f7638",
          800: "#1e5d30",
          900: "#1a4d29",
          950: "#092a14"
        },
        grayscale: {
          DEFAULT: "#2a2b2b",
          50: "#f5f6f6",
          100: "#e6e7e7",
          200: "#d0d1d1",
          300: "#afb1b0",
          400: "#868a8a",
          500: "#6b6f6f",
          600: "#5c5e5d",
          700: "#4e504f",
          800: "#444646",
          900: "#3c3d3d",
          950: "#2a2b2b"
        },
        transparent: "transparent",
        current: "currentColor",
        // blue: colors.blue,
        green: colors.green,
        orange: colors.orange,
        red: colors.red,
        white: colors.white,
        black: colors.black
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        "4/3": "4 / 3",
        video: "16 / 9"
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        xl: "1rem",
        "2xl": "1.8rem",
        full: "9999px"
      },
      opacity: {
        0: "0",
        20: "0.2",
        40: "0.4",
        60: "0.6",
        80: "0.8",
        100: "1"
      }
      // },
    }
  }
};
