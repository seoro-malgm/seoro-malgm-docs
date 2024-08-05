import seoData from "./data/seoData.js";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  app: {
    ...seoData.head,
  },
  // router
  router: {
    options: {
      scrollBehaviorType: "smooth",
      linkActiveClass: "active",
      // linkExactActiveClass: "exact-active"
    },
    // middleware: ["auth"]
  },
  css: [],
  // modules
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/image",
    // "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "nuxt-tiptap-editor",
  ],

  // tailwindcss
  tailwindcss: {
    cssPath: "@/assets/css/global.css",
    configPath: "@/tailwind.config.js",
    viewer: false,
  },
  // nuxt ui와 tailwind CSS 와 관련된 설정
  ui: {
    global: true,
  },

  // // 에디터 Tiptap
  // tiptap: {
  //   prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  // },

  // plugins
  plugins: [
    // ...
  ],
  // nuxt-iamge 설정
  image: {
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1440,
    },
    providers: {
      // ...
    },
    presets: {
      thumbnail: {
        modifiers: {
          format: "webp", // 원하는 이미지 포맷으로 변환
          quality: 96, // 이미지 품질 설정
          width: (width, { sizes }) => {
            // 화면 크기에 따라 다른 가로 크기 설정
            if (width <= sizes.sm) return 382; // sm 이하
            if (width <= sizes.md) return 302; // md 이하
            return 212; // lg 이상
          },
          // height: "auto" // 세로 크기 자동 조절
        },
      },
      adminThumbnail: {
        modifiers: {
          format: "jpg, gif",
          width: 40,
          height: 40,
        },
      },
    },
  },
  // 기본 컬러모드
  colorMode: {
    preference: "light",
  },
  // env
  runtimeConfig: {},

  render: {
    cacheControl: {
      static: "public, max-age=604800", // 정적 자원 캐싱 설정
      server: false, // renderingCache 비활성화
      maxAge: 604800, // 일주일 후 캐시 만료
    },
  },

  // 배포환경
  nitro: {
    compatibility: {
      date: "2024-08-05",
    },
    storage: {
      data: {
        driver: "vercelKV",
        /* Vercel KV driver options */
      },
    },
  },
});
