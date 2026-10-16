import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({base:'./',build:{rollupOptions:{input:{main:resolve('index.html'),blog:resolve('blog.html'),cv:resolve('cv.html'),longread:resolve('longread.html')}}}});
