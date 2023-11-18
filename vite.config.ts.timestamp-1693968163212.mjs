// vite.config.ts
import { defineConfig } from "file:///A:/MianShi/educationProject/Project/homework-help-pc/node_modules/.pnpm/registry.npmmirror.com+vite@3.2.0_less@4.1.3/node_modules/vite/dist/node/index.js";
import react from "file:///A:/MianShi/educationProject/Project/homework-help-pc/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@2.2.0_vite@3.2.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///A:/MianShi/educationProject/Project/homework-help-pc/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-eslint@1.8.1_eslint@8.28.0_vite@3.2.0/node_modules/vite-plugin-eslint/dist/index.mjs";
import path from "node:path";
var vite_config_default = defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3334,
    open: true,
    cors: true,
    proxy: {
      "/graphql": "http://localhost:3000"
    }
  },
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve("./src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJBOlxcXFxNaWFuU2hpXFxcXGVkdWNhdGlvblByb2plY3RcXFxcUHJvamVjdFxcXFxob21ld29yay1oZWxwLXBjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJBOlxcXFxNaWFuU2hpXFxcXGVkdWNhdGlvblByb2plY3RcXFxcUHJvamVjdFxcXFxob21ld29yay1oZWxwLXBjXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9BOi9NaWFuU2hpL2VkdWNhdGlvblByb2plY3QvUHJvamVjdC9ob21ld29yay1oZWxwLXBjL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJywgLy8gXHU2MjUzXHU1RjAwXHU5MDFBXHU4RkM3SVBcdTU3MzBcdTU3NDBcdThCQkZcdTk1RUVcdTc2ODRcdTVGMDBcdTUxNzNcbiAgICBwb3J0OiAzMzM0LFxuICAgIG9wZW46IHRydWUsIC8vIFx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxuICAgIGNvcnM6IHRydWUsIC8vIFx1NjI1M1x1NUYwMFx1OERFOFx1NTdERlxuICAgIHByb3h5OiB7XG4gICAgICAnL2dyYXBocWwnOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIGVzbGludCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdAJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZSgnLi9zcmMnKVxuICAgICAgfVxuICAgIF1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1YsU0FBUyxvQkFBb0I7QUFDclgsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFVBQVU7QUFDakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxPQUFPO0FBQUEsTUFDbkM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
