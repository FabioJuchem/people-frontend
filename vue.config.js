module.exports = {
  devServer: {
    port: 4200,
    proxy: {
      '^/api': {
        target: 'https://fabio-people-api.herokuapp.com/',
        ws: true,
        changeOrigin: true,
      },
    },
    watchOptions: {
      poll: 2000,
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
