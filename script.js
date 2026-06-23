const nameInput = document.getElementById('nameInput');
const enterBtn = document.getElementById('enterBtn');
const entryScreen = document.getElementById('entryScreen');
const birthdayScreen = document.getElementById('birthdayScreen');
const displayName = document.getElementById('displayName');
const particlesContainer = document.getElementById('particles');
const popupOverlay = document.getElementById('popupOverlay');
const popupText = document.getElementById('popupText');
const popupClose = document.getElementById('popupClose');
const cards = document.querySelectorAll('.card');

// Handle name submission
function enterBirthday() {
  let name = nameInput.value.trim();
  if (!name) name = 'Beautiful Soul';

  displayName.textContent = name;
  entryScreen.classList.add('hidden');
  birthdayScreen.classList.remove('hidden');
  birthdayScreen.style.opacity = '1';

  createParticles();
}

enterBtn.addEventListener('click', enterBirthday);

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') enterBirthday();
});

nameInput.focus();

// Floating particles
function createParticles() {
  const types = ['star', 'sparkle', 'heart'];
  const heartSymbols = ['💖', '✨', '🌟', '💕'];

  for (let i = 0; i < 50; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const el = document.createElement('div');
    el.classList.add('particle', type);

    const size = 3 + Math.random() * 8;
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.setProperty('--dur', (3 + Math.random() * 5) + 's');
    el.style.animationDelay = Math.random() * 5 + 's';

    if (type === 'heart') {
      el.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      el.style.fontSize = (12 + Math.random() * 14) + 'px';
    } else if (type === 'sparkle') {
      el.style.width = (6 + Math.random() * 10) + 'px';
      el.style.height = (6 + Math.random() * 10) + 'px';
    } else {
      el.style.width = (2 + Math.random() * 4) + 'px';
      el.style.height = (2 + Math.random() * 4) + 'px';
    }

    particlesContainer.appendChild(el);
  }
}

// Interactive cards
cards.forEach(card => {
  card.addEventListener('click', () => {
    const message = card.getAttribute('data-message');
    popupText.textContent = message;
    popupOverlay.classList.remove('hidden');
  });
});

// Close popup
popupClose.addEventListener('click', () => {
  popupOverlay.classList.add('hidden');
});

popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.add('hidden');
  }
});