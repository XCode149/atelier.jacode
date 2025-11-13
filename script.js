// Ouvrir et fermer les modales
document.querySelectorAll('.objet').forEach(obj => {
  obj.addEventListener('click', () => {
    const id = 'modal-' + obj.id;
    document.getElementById(id).style.display = 'flex';
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.target).style.display = 'none';
  });
});

// Charger les planches
const dossierPlanches = 'planches/';
const conteneurPlanches = document.getElementById('planches');
const images = ['planche1.jpg', 'planche2.jpg', 'planche3.jpg'];

images.forEach(img => {
  const div = document.createElement('div');
  div.className = 'vignette';
  const image = document.createElement('img');
  image.src = dossierPlanches + img;
  div.appendChild(image);
  conteneurPlanches.appendChild(div);
});

// Charger le journal
fetch('journal.json')
  .then(res => res.json())
  .then(entries => {
    const journalDiv = document.getElementById('journal');
    entries.forEach(entry => {
      const item = document.createElement('div');
      item.className = 'journal-entry';
      item.innerHTML = `
        <img src="${entry.image}" alt="">
        <div class="text">
          <h3>${entry.date}</h3>
          <p>${entry.texte}</p>
        </div>
      `;
      journalDiv.appendChild(item);
    });
  });
