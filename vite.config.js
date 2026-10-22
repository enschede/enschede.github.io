import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({base:'./',build:{rollupOptions:{input:{main:resolve('index.html'),blog:resolve('blog.html'),verhaal:resolve('mijn-verhaal.html'),cv:resolve('cv.html'),longread:resolve('longread.html'),eersteVerhaal:resolve('eerste-verhaal.html'),drieStappenVoor2fa:resolve('drie-stappen-voor-2fa.html'),kleinBeginnen:resolve('klein-beginnen.html')}}}});
