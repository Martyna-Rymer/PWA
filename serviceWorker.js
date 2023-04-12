self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })


  var GHPATH = '/PWA';
  var APP_PREFIX = 'pwa_';
  var VERSION = 'version_00';
  var URLS = [    
    `${GHPATH}/`,
    `${GHPATH}/index.html`,
    `${GHPATH}/src/assets/main.css`,
    `${GHPATH}/src/main.js`
  ]