const tarotCards = [
  // Major Arcana (22)
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
  "Judgement", "The World",

  // Minor Arcana: Wands (14)
  "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands",
  "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands",
  "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",

  // Minor Arcana: Cups (14)
  "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups",
  "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
  "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",

  // Minor Arcana: Swords (14)
  "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords",
  "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords",
  "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",

  // Minor Arcana: Pentacles (14)
  "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles",
  "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles",
  "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"
];

// Mapping from each card name  its image filename in qtarotimages*.JPG

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

const drawBtn = document.getElementById('drawBtn');
const settingsBtn = document.getElementById('settingsBtn');
const modal = document.getElementById('settingsModal');
const saveSettings = document.getElementById('saveSettings');
const apiKeyInput = document.getElementById('apiKeyInput');

let apiKey = localStorage.getItem('qrng_api_key') || '';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/qtarot/service-worker.js', {
    scope: '/qtarot/'
  });
}

settingsBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  apiKeyInput.value = apiKey;
});

saveSettings.addEventListener('click', () => {
  apiKey = apiKeyInput.value;
  localStorage.setItem('qrng_api_key', apiKey);
  modal.classList.add('hidden');
});

drawBtn.addEventListener('click', async () => {
  const count = parseInt(document.getElementById('cardCount').value, 10);
  const reversed = document.getElementById('allowReversed').checked;
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  if (!apiKey) return alert('Please set an API key in settings.');

  try {
    const response = await fetch(`https://api.quantumnumbers.anu.edu.au/?length=${count}&type=hex16&size=10`, {
      headers: { 'x-api-key': apiKey }
    });
    const json = await response.json();

    if (!json.success) throw new Error(json.message);

    const cards = [];
    for (let i = 0; i < count; i++) {
      const index = parseInt(json.data[i].slice(0, 4), 16) % tarotCards.length;
      let card = tarotCards[index];
      const isReversed = reversed && Math.random() > 0.5;
      cards.push({ card, reversed: isReversed });
    }

    cards.forEach(({ card, reversed }) => {
      const img = tarotImages[card] || '';
      container.innerHTML += `
        <div class="text-center">
          <img src="images/${img}" class="w-32 mx-auto transform ${reversed ? 'rotate-180' : ''}" alt="${card}">
          <div class="mt-2">${reversed ? 'Reversed ' : ''}${card}</div>
        </div>
      `;
    });
  } catch (err) {
    alert('Error fetching cards: ' + err.message);
  }
});
