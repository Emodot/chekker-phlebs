export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chekker Phlebs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css', '@assets/css/loaders.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-pincode-input.js', mode: 'client' },
    { src: '@/plugins/vue-select.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://phleb.mychekker.com/node/api/v1'
  },

  pwa: {
    meta: {
      title: 'Chekker',
      author: 'Me'
    },
    manifest: {
      name: 'Chekker for Phlebs',
      short_name: 'Chekker',
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
