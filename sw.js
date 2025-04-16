self.addEventListener('install', function (event) {
  console.log('DUACT Service Worker instalado.');
});

self.addEventListener('fetch', function (event) {
  // Pode personalizar cache aqui se quiser futuramente
});
