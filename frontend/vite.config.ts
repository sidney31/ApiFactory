import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({
			png: {
				quality: 50,
			},
		}),
	],

	optimizeDeps: {
		exclude: ['js-big-decimal'],
	},
})
