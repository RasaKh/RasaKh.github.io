// ─── Data ───────────────────────────────────────────────────────────────────

const tarotCards = [
  // Major Arcana
  "The Fool","The Magician","The High Priestess","The Empress",
  "The Emperor","The Hierophant","The Lovers","The Chariot",
  "Strength","The Hermit","Wheel of Fortune","Justice",
  "The Hanged Man","Death","Temperance","The Devil",
  "The Tower","The Star","The Moon","The Sun",
  "Judgement","The World",
  // Wands
  "Ace of Wands","Two of Wands","Three of Wands","Four of Wands","Five of Wands",
  "Six of Wands","Seven of Wands","Eight of Wands","Nine of Wands","Ten of Wands",
  "Page of Wands","Knight of Wands","Queen of Wands","King of Wands",
  // Cups
  "Ace of Cups","Two of Cups","Three of Cups","Four of Cups","Five of Cups",
  "Six of Cups","Seven of Cups","Eight of Cups","Nine of Cups","Ten of Cups",
  "Page of Cups","Knight of Cups","Queen of Cups","King of Cups",
  // Swords
  "Ace of Swords","Two of Swords","Three of Swords","Four of Swords","Five of Swords",
  "Six of Swords","Seven of Swords","Eight of Swords","Nine of Swords","Ten of Swords",
  "Page of Swords","Knight of Swords","Queen of Swords","King of Swords",
  // Pentacles
  "Ace of Pentacles","Two of Pentacles","Three of Pentacles","Four of Pentacles","Five of Pentacles",
  "Six of Pentacles","Seven of Pentacles","Eight of Pentacles","Nine of Pentacles","Ten of Pentacles",
  "Page of Pentacles","Knight of Pentacles","Queen of Pentacles","King of Pentacles"
];

const tarotImages = {
  // Major Arcana
  "The Fool":               "major_arcana_fool.JPG",
  "The Magician":           "major_arcana_magician.JPG",
  "The High Priestess":     "major_arcana_priestess.JPG",
  "The Empress":            "major_arcana_empress.JPG",
  "The Emperor":            "major_arcana_emperor.JPG",
  "The Hierophant":         "major_arcana_hierophant.JPG",
  "The Lovers":             "major_arcana_lovers.JPG",
  "The Chariot":            "major_arcana_chariot.JPG",
  "Strength":               "major_arcana_strength.JPG",
  "The Hermit":             "major_arcana_hermit.JPG",
  "Wheel of Fortune":       "major_arcana_fortune.JPG",
  "Justice":                "major_arcana_justice.JPG",
  "The Hanged Man":         "major_arcana_hanged.JPG",
  "Death":                  "major_arcana_death.JPG",
  "Temperance":             "major_arcana_temperance.JPG",
  "The Devil":              "major_arcana_devil.JPG",
  "The Tower":              "major_arcana_tower.JPG",
  "The Star":               "major_arcana_star.JPG",
  "The Moon":               "major_arcana_moon.JPG",
  "The Sun":                "major_arcana_sun.JPG",
  "Judgement":              "major_arcana_judgement.JPG",
  "The World":              "major_arcana_world.JPG",

  // Minor Arcana: Wands
  "Ace of Wands":           "minor_arcana_wands_ace.JPG",
  "Two of Wands":           "minor_arcana_wands_2.JPG",
  "Three of Wands":         "minor_arcana_wands_3.JPG",
  "Four of Wands":          "minor_arcana_wands_4.JPG",
  "Five of Wands":          "minor_arcana_wands_5.JPG",
  "Six of Wands":           "minor_arcana_wands_6.JPG",
  "Seven of Wands":         "minor_arcana_wands_7.JPG",
  "Eight of Wands":         "minor_arcana_wands_8.JPG",
  "Nine of Wands":          "minor_arcana_wands_9.JPG",
  "Ten of Wands":           "minor_arcana_wands_10.JPG",
  "Page of Wands":          "minor_arcana_wands_page.JPG",
  "Knight of Wands":        "minor_arcana_wands_knight.JPG",
  "Queen of Wands":         "minor_arcana_wands_queen.JPG",
  "King of Wands":          "minor_arcana_wands_king.JPG",

  // Minor Arcana: Cups
  "Ace of Cups":            "minor_arcana_cups_ace.JPG",
  "Two of Cups":            "minor_arcana_cups_2.JPG",
  "Three of Cups":          "minor_arcana_cups_3.JPG",
  "Four of Cups":           "minor_arcana_cups_4.JPG",
  "Five of Cups":           "minor_arcana_cups_5.JPG",
  "Six of Cups":            "minor_arcana_cups_6.JPG",
  "Seven of Cups":          "minor_arcana_cups_7.JPG",
  "Eight of Cups":          "minor_arcana_cups_8.JPG",
  "Nine of Cups":           "minor_arcana_cups_9.JPG",
  "Ten of Cups":            "minor_arcana_cups_10.JPG",
  "Page of Cups":           "minor_arcana_cups_page.JPG",
  "Knight of Cups":         "minor_arcana_cups_knight.JPG",
  "Queen of Cups":          "minor_arcana_cups_queen.JPG",
  "King of Cups":           "minor_arcana_cups_king.JPG",

  // Minor Arcana: Swords
  "Ace of Swords":          "minor_arcana_swords_ace.JPG",
  "Two of Swords":          "minor_arcana_swords_2.JPG",
  "Three of Swords":        "minor_arcana_swords_3.JPG",
  "Four of Swords":         "minor_arcana_swords_4.JPG",
  "Five of Swords":         "minor_arcana_swords_5.JPG",
  "Six of Swords":          "minor_arcana_swords_6.JPG",
  "Seven of Swords":        "minor_arcana_swords_7.JPG",
  "Eight of Swords":        "minor_arcana_swords_8.JPG",
  "Nine of Swords":         "minor_arcana_swords_9.JPG",
  "Ten of Swords":          "minor_arcana_swords_10.JPG",
  "Page of Swords":         "minor_arcana_swords_page.JPG",
  "Knight of Swords":       "minor_arcana_swords_knight.JPG",
  "Queen of Swords":        "minor_arcana_swords_queen.JPG",
  "King of Swords":         "minor_arcana_swords_king.JPG",

  // Minor Arcana: Pentacles
  "Ace of Pentacles":       "minor_arcana_pentacles_ace.JPG",
  "Two of Pentacles":       "minor_arcana_pentacles_2.JPG",
  "Three of Pentacles":     "minor_arcana_pentacles_3.JPG",
  "Four of Pentacles":      "minor_arcana_pentacles_4.JPG",
  "Five of Pentacles":      "minor_arcana_pentacles_5.JPG",
  "Six of Pentacles":       "minor_arcana_pentacles_6.JPG",
  "Seven of Pentacles":     "minor_arcana_pentacles_7.JPG",
  "Eight of Pentacles":     "minor_arcana_pentacles_8.JPG",
  "Nine of Pentacles":      "minor_arcana_pentacles_9.JPG",
  "Ten of Pentacles":       "minor_arcana_pentacles_10.JPG",
  "Page of Pentacles":      "minor_arcana_pentacles_page.JPG",
  "Knight of Pentacles":    "minor_arcana_pentacles_knight.JPG",
  "Queen of Pentacles":     "minor_arcana_pentacles_queen.JPG",
  "King of Pentacles":      "minor_arcana_pentacles_king.JPG"
};


// ─── Element Hooks ────────────────────────────────────────────────────────────

const drawBtn        = document.getElementById('drawBtn');
const settingsBtn    = document.getElementById('settingsBtn');
const settingsModalEl= document.getElementById('settingsModal');
const saveSettings   = document.getElementById('saveSettings');
const apiKeyInput    = document.getElementById('apiKeyInput');
const cardsContainer = document.getElementById('cardsContainer');

// Bootstrap Modal instance
const bootstrapModal = new bootstrap.Modal(settingsModalEl);

// Load stored key
let apiKey = localStorage.getItem('qrng_api_key') || '';

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/qtarot/service-worker.js', {
    scope: '/qtarot/'
  });
}

// ─── Settings Handlers ───────────────────────────────────────────────────────

// Show the Bootstrap modal
settingsBtn.addEventListener('click', () => {
  apiKeyInput.value = apiKey;
  bootstrapModal.show();
});

// Save & hide modal
saveSettings.addEventListener('click', () => {
  apiKey = apiKeyInput.value.trim();
  localStorage.setItem('qrng_api_key', apiKey);
  bootstrapModal.hide();
});



// ─── Drawing Logic with Fallback ───────────────────────────────────────────

drawBtn.addEventListener('click', async () => {
  const count       = parseInt(document.getElementById('cardCount').value, 10);
  const allowRev    = document.getElementById('allowReversed').checked;
  cardsContainer.innerHTML = '';

  if (!apiKey) {
    return alert('⚠️ Please set your API key in Settings first.');
  }

  // Helper to process an array of hex strings into cards
  function renderFromHexes(hexArray) {
    const deck = tarotCards.slice();
    const draws = [];

    for (let i = 0; i < count; i++) {
      const hex    = hexArray[i];
      const value  = parseInt(hex, 16);
      const space  = allowRev ? deck.length * 2 : deck.length;
      let   idx    = value % space;
      const rev    = allowRev && idx >= deck.length;
      if (rev) idx -= deck.length;
      const card   = deck.splice(idx, 1)[0];
      draws.push({ card, rev });
    }

    draws.forEach(({ card, rev }) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 text-center mb-4';
      const img = document.createElement('img');
      img.src       = `images/${tarotImages[card]}`;
      img.alt       = card;
      img.className = 'img-fluid' + (rev ? ' rotate-180' : '');
      const cap = document.createElement('p');
      cap.textContent = (rev ? 'Reversed ' : '') + card;
      cap.className = 'mt-2';
      col.append(img, cap);
      cardsContainer.appendChild(col);
    });
  }

  try {
    // Primary API
    const resp = await fetch(
      `https://api.quantumnumbers.anu.edu.au/?length=${count}&type=hex16&size=10`,
      { headers: { 'x-api-key': apiKey } }
    );
    const body = await resp.json();
    if (!body.success) throw new Error(body.message);

    renderFromHexes(body.data);

  } catch (originalErr) {
    // Fallback to secondary API
    alert(`❌ Error: ${originalErr.message}. Trying secondary source...`);
    try {
      // Collect 'count' hex strings from the secondary service, with delays
      const hexes = [];
      for (let i = 0; i < count; i++) {
        // Pause 1.1 seconds between requests
        await new Promise(resolve => setTimeout(resolve, 1100));

        const resp2 = await fetch(
          'https://lfdr.de/qrng_api/qrng?length=10&format=HEX'
        );
        const body2 = await resp2.json();
        if (!body2.qrn) throw new Error('Invalid response from secondary source');
        hexes.push(body2.qrn);
      }
      renderFromHexes(hexes);

    } catch (/* secondaryErr */) {
      // If secondary fails, show original error only
      alert(`❌ Error: ${originalErr.message}`);
    }
  }
});
