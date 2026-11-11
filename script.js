// Sélection des éléments du DOM
const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const changeColorBtn = document.getElementById('changeColorBtn');

// Génère un code couleur hexadécimal aléatoire, ex. "#3FA2C8"
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Au clic : on génère une couleur et on l'applique à la boîte
changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});
