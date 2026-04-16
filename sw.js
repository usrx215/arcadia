const CACHE_NAME = 'scgames-cache';
const urlsToCache = [
  '/',
  '/spikedodger.html',
  '/characters.html',
  'clickaim.html',
  'dvd.html',
  'guessnum.html',
  'jumperup.html',
  'manifest.json',
  'mazegame.html',
  'pongout.html',
  'rhythm.html',
  'scemu.html',
  'scflash.html',
  'sw.js',
  'trampoline.html',
  'https://usrx215.github.io/scgames/scgameslogo.png',
  'https://usrx215.github.io/scgames/spikedodger.png',
  'https://usrx215.github.io/scgames/scgamesicon.png',
  'https://usrx215.github.io/scgames/dvd.png',
  'https://usrx215.github.io/scgames/gtn.png',
  'https://usrx215.github.io/scgames/mazegame.png',
  'https://usrx215.github.io/scgames/jumperup.png',
  'https://usrx215.github.io/scgames/pongout.png',
  'https://usrx215.github.io/scgames/xrhythm.png',
  'https://usrx215.github.io/scgames/emujs.png',
  'https://usrx215.github.io/scgames/trampoline.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
