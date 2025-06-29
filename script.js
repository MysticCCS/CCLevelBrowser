const cardsContainer = document.getElementById('cards');
const searchInput = document.getElementById('search');

document.getElementById('toggleTheme').onclick = () => {
  document.body.classList.toggle('dark');
};

function createCard({ episode, level, isDreamworld, image, levelCode, absLevel, scoreTargets, levelType, movesOrTime, s_or_m }) {
  const card = document.createElement('div');
  card.className = 'card';
  card.loading = 'lazy';
  //card.dataset.title = `episode ${episode} level ${level}`.toLowerCase();
  if (isDreamworld === false) { 
  card.dataset.title = `Level ${absLevel}`.toLowerCase();
}
else {
  card.dataset.title = `Dreamworld Level ${absLevel}`.toLowerCase();
}
  /*card.innerHTML = `
    <img src="/images/${image}" alt="Level Image" loading="lazy">
    <h3>${isDreamworld ? '🌙 Dreamworld - ' : ''}Episode ${episode}, Level ${level}</h3>
    <a href="https://mysticccs.github.io/playtester/?levelCode=${encodeURIComponent(JSON.stringify(levelCode))}" target="_blank">Play</a>
  `;*/
  let dreamlevel;
  if (isDreamworld === true) {
     dreamlevel = '🌙 Dreamworld';
  }
  else {
    dreamlevel = '';
  }
  card.innerHTML = `
    <img src="/images/${image}" alt="Level Image" loading="lazy">
    <h3>${dreamlevel} Level ${absLevel}</h3>
    <p>Score Targets: <strong>${scoreTargets[0]}</strong> for 1 Star, <strong>${scoreTargets[1]}</strong> for 2 Stars, <strong>${scoreTargets[2]}</strong> for 3 Stars.</p>
    <p>Level Type: <strong>${levelType}</strong></p>
    <p><strong>${movesOrTime} ${s_or_m}</strong></p>
    <a href="https://mysticccs.github.io/playtester/?levelCode=${encodeURIComponent(JSON.stringify(levelCode))}" target="_blank">Play</a>
  `;
  

  cardsContainer.appendChild(card);
}

async function loadLevels() {
  const card = document.createElement('div');
 // const res = await fetch('/api/levels');
 // console.log(res)
  const data = await fetch('./data.json');
  data.forEach(createCard);
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = card.dataset.title.includes(q) ? '' : 'none';
  });
});

loadLevels();
