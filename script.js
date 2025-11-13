// Charger les planches automatiquement depuis le dossier
const dossierPlanches = 'planches/';
const conteneurPlanches = document.getElementById('planches');

// Liste manuelle (GitHub ne permet pas de lister automatiquement un dossier)
const images = [
  'planche1.jpg',
  'planche2.jpg',
  'planche3.jpg'
];

// Affiche les images
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
  .then(response => response.json())
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
