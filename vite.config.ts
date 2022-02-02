import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import eslintPlugin from "vite-plugin-eslint";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { VitePWA } from "vite-plugin-pwa";
import ViteFonts from "vite-plugin-fonts";
import ViteRadar from "vite-plugin-radar";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png"
      ],
      manifest: {
        name: "High School",
        short_name: "Short High School",
        description: "High School",
        theme_color: "#063296",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    ViteRadar({
      gtm: [
        {
          id: "GTM-MZ5WDSP"
        }
      ]
    }),
    Components({
      importPathTransform: (path) =>
        path.startsWith("C:") ? path.replaceAll("\\", "\\\\") : path
    }),
    Pages(),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: "defaultLayout"
    }),
    eslintPlugin(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "ital,wght@0,400;1,200"
          },
          {
            name: "Rubik"
          }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/_utilities.scss";`
      }
    }
  }
});
