import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 8282,
        hmr: {
            host: 'portfolio3.stevenbachimont.com',
            protocol: 'wss',
            port: 443,  // Port sécurisé pour WebSocket (si HTTPS)
        },
    },
});
