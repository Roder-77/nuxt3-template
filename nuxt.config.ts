import eslint from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
    },
    modules: [
        '@nuxtjs/device',
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],
    runtimeConfig: {
        // private environment variable
        secret: '',
        public: {
            baseApiUrl: '',
        },
    },
    vite: {
        plugins: [eslint()],
        server: {
            proxy: {
                '^/api': {
                    target: 'https://localhost:44326/api', // https://{Domain}/api/
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: path => path.replace(/^\/api/g, ''),
                },
            },
        },
    },
});
