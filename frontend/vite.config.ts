import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
	plugins: [
		react(),
		imagetools({
			maxWidth: 100,
			maxHeight: 100,
		})
	],

	optimizeDeps: {
		exclude: ['js-big-decimal'],
	},
})
