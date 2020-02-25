const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src/'),
        '@api': path.resolve('src/api/'),
        '@css': path.resolve('src/assets/css/'),
        '@font': path.resolve('src/assets/font/'),
        '@image': path.resolve('src/assets/image/'),
        '@resource': path.resolve('src/assets/resource/'),
        '@commons': path.resolve('src/components/commons/'),
        '@sections': path.resolve('src/components/sections/'),
        '@constants': path.resolve('src/constants/'),
        '@mixins': path.resolve('src/mixins/'),
        '@pages': path.resolve('src/pages/'),
        '@router': path.resolve('src/router/'),
        '@store': path.resolve('src/store/'),
        '@utils': path.resolve('src/utils/')
      }
    }
  }
}
