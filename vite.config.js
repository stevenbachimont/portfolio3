import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 8282, // or any other port you use
        hmr: {
            overlay: false,
        },
    },
});