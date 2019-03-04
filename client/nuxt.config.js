const webpack = require('webpack')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-client',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Laravel nuxt SPA'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#4CC1D1'
  },

  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      locales: [

        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'en',
      lazy: true,

    }]
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },
  auth: {
    'strategies': {
      local: {
        endpoints: {
          login: {
            url: 'login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: 'user',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'logout',
            method: 'post'
          }
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
     ** Run ESLint on save
     */

  },

  css: ['./node_modules/bootstrap/dist/css/bootstrap.css'],

  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/mixins/user.js'
  ]
}
