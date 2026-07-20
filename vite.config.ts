import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue(), UnoCSS()],
	server: {
		host: '0.0.0.0',
		port: 3008,
		strictPort: true,
		open: true,
	},
	preview: {
		host: '0.0.0.0',
		port: 3008,
		strictPort: true,
		open: true,
	},
});
