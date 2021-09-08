export default {
  env: {
    STATIC_URL: process.env.STATIC_URL || ''
  },
  /*
   ** Build configuration
   */
  build: {
    styleResources: {
      scss: './assets/public.scss'
    },
    transpile: [/^element-ui/],
    extend(config, {isDev, isClient}) {
      if (!isDev && process.env.STATIC_URL) {
        config.output.publicPath = process.env.STATIC_URL
      }
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'SuperTyler的博客',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'SuperTyler的技术博客，分享编程与运维开发的个人经验'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: `${process.env.STATIC_URL || ''}/favicon.ico`}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#f56'},
  /*
   ** Global CSS
   */
  css: [
    '~/assets/reset.css',
    '~/assets/reactive.css',
    'element-ui/lib/theme-chalk/index.css',
    'swiper/css/swiper.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui/element-ui',
    {src: "@/plugins/vue-swiper.js", ssr: false}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ]
}
