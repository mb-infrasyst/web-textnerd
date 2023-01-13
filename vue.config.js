const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      favicon32: "../public/img/textnerd-images/favicon.ico",
      favicon16: "../public/img/textnerd-images/favicon.ico",
      appleTouchIcon: "../public/img/textnerd-images/favicon.ico",
      maskIcon: "../public/img/textnerd-images/favicon.ico",
      msTileImage: "../public/img/textnerd-images/favicon.ico",
    },
  },
});
