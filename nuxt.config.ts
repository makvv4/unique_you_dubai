// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', 'nuxt-icon'],
    tailwindcss: {
        // add '~tailwind.config` alias
        exposeConfig: true
    }
})
