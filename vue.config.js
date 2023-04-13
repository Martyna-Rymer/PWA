module.exports = {
  //   publicPath: process.env.NODE_ENV === "production" ? "/PWA/" : "/",
  // };
  
  // module.exports = {
    pwa: {
      name: 'PWA',
      themeColor: "#83A6FF",
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: '/serviceWorker.js',
      }
    }
  }