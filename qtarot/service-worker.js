const VERSION = 'v0.0.3';
const CACHE_NAME = `quantum-tarot-${VERSION}`;
const URLS_TO_CACHE = [
  '/qtarot/',
  '/qtarot/index.html',
  '/qtarot/app.js',
  '/qtarot/manifest.json',
  '/qtarot/css/bootstrap.min.css',
  '/qtarot/js/bootstrap.bundle.min.js',
  '/qtarot/images/major_arcana_fool.JPG',
  '/qtarot/images/major_arcana_magician.JPG',
  '/qtarot/images/major_arcana_priestess.JPG',
  '/qtarot/images/major_arcana_empress.JPG',
  '/qtarot/images/major_arcana_emperor.JPG',
  '/qtarot/images/major_arcana_hierophant.JPG',
  '/qtarot/images/major_arcana_lovers.JPG',
  '/qtarot/images/major_arcana_chariot.JPG',
  '/qtarot/images/major_arcana_strength.JPG',
  '/qtarot/images/major_arcana_hermit.JPG',
  '/qtarot/images/major_arcana_fortune.JPG',
  '/qtarot/images/major_arcana_justice.JPG',
  '/qtarot/images/major_arcana_hanged.JPG',
  '/qtarot/images/major_arcana_death.JPG',
  '/qtarot/images/major_arcana_temperance.JPG',
  '/qtarot/images/major_arcana_devil.JPG',
  '/qtarot/images/major_arcana_tower.JPG',
  '/qtarot/images/major_arcana_star.JPG',
  '/qtarot/images/major_arcana_moon.JPG',
  '/qtarot/images/major_arcana_sun.JPG',
  '/qtarot/images/major_arcana_judgement.JPG',
  '/qtarot/images/major_arcana_world.JPG',

  // Minor Arcana: Wands (14)
  '/qtarot/images/minor_arcana_wands_ace.JPG',
  '/qtarot/images/minor_arcana_wands_2.JPG',
  '/qtarot/images/minor_arcana_wands_3.JPG',
  '/qtarot/images/minor_arcana_wands_4.JPG',
  '/qtarot/images/minor_arcana_wands_5.JPG',
  '/qtarot/images/minor_arcana_wands_6.JPG',
  '/qtarot/images/minor_arcana_wands_7.JPG',
  '/qtarot/images/minor_arcana_wands_8.JPG',
  '/qtarot/images/minor_arcana_wands_9.JPG',
  '/qtarot/images/minor_arcana_wands_10.JPG',
  '/qtarot/images/minor_arcana_wands_page.JPG',
  '/qtarot/images/minor_arcana_wands_knight.JPG',
  '/qtarot/images/minor_arcana_wands_queen.JPG',
  '/qtarot/images/minor_arcana_wands_king.JPG',

  // Minor Arcana: Cups (14)
  '/qtarot/images/minor_arcana_cups_ace.JPG',
  '/qtarot/images/minor_arcana_cups_2.JPG',
  '/qtarot/images/minor_arcana_cups_3.JPG',
  '/qtarot/images/minor_arcana_cups_4.JPG',
  '/qtarot/images/minor_arcana_cups_5.JPG',
  '/qtarot/images/minor_arcana_cups_6.JPG',
  '/qtarot/images/minor_arcana_cups_7.JPG',
  '/qtarot/images/minor_arcana_cups_8.JPG',
  '/qtarot/images/minor_arcana_cups_9.JPG',
  '/qtarot/images/minor_arcana_cups_10.JPG',
  '/qtarot/images/minor_arcana_cups_page.JPG',
  '/qtarot/images/minor_arcana_cups_knight.JPG',
  '/qtarot/images/minor_arcana_cups_queen.JPG',
  '/qtarot/images/minor_arcana_cups_king.JPG',

  // Minor Arcana: Swords (14)
  '/qtarot/images/minor_arcana_swords_ace.JPG',
  '/qtarot/images/minor_arcana_swords_2.JPG',
  '/qtarot/images/minor_arcana_swords_3.JPG',
  '/qtarot/images/minor_arcana_swords_4.JPG',
  '/qtarot/images/minor_arcana_swords_5.JPG',
  '/qtarot/images/minor_arcana_swords_6.JPG',
  '/qtarot/images/minor_arcana_swords_7.JPG',
  '/qtarot/images/minor_arcana_swords_8.JPG',
  '/qtarot/images/minor_arcana_swords_9.JPG',
  '/qtarot/images/minor_arcana_swords_10.JPG',
  '/qtarot/images/minor_arcana_swords_page.JPG',
  '/qtarot/images/minor_arcana_swords_knight.JPG',
  '/qtarot/images/minor_arcana_swords_queen.JPG',
  '/qtarot/images/minor_arcana_swords_king.JPG',

  // Minor Arcana: Pentacles (14)
  '/qtarot/images/minor_arcana_pentacles_ace.JPG',
  '/qtarot/images/minor_arcana_pentacles_2.JPG',
  '/qtarot/images/minor_arcana_pentacles_3.JPG',
  '/qtarot/images/minor_arcana_pentacles_4.JPG',
  '/qtarot/images/minor_arcana_pentacles_5.JPG',
  '/qtarot/images/minor_arcana_pentacles_6.JPG',
  '/qtarot/images/minor_arcana_pentacles_7.JPG',
  '/qtarot/images/minor_arcana_pentacles_8.JPG',
  '/qtarot/images/minor_arcana_pentacles_9.JPG',
  '/qtarot/images/minor_arcana_pentacles_10.JPG',
  '/qtarot/images/minor_arcana_pentacles_page.JPG',
  '/qtarot/images/minor_arcana_pentacles_knight.JPG',
  '/qtarot/images/minor_arcana_pentacles_queen.JPG',
  '/qtarot/images/minor_arcana_pentacles_king.JPG'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(res => res || fetch(event.request))
  );
});
