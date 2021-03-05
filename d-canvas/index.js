
// Register service worker to control making site work offline
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/mytest/d-canvas/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}

var full = false;
function toggleFullscreen() {
  if (full) {
    full = false;
    document.exitFullscreen();
  } else {
    full = true;
    document.documentElement.requestFullscreen();
  }
}
