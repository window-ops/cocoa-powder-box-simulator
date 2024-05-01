const powderElement = document.getElementById('powder');
const sugarRatioInput = document.getElementById('sugar-ratio');
const sugarRatioValue = document.getElementById('sugar-ratio-value');
const sugarTbspElement = document.getElementById('sugar-tbsp');
const cocoaTbspElement = document.getElementById('cocoa-tbsp');
const tbspPerGram = 0.177; // Tablespoons per gram of powder

function updatePowderRatio() {
  const totalGrams = parseInt(document.getElementById('total-grams').value); // Total grams of powder in the box
  const sugarRatio = parseInt(sugarRatioInput.value);
  const cocoaRatio = 100 - sugarRatio;
  const sugarGrams = (totalGrams * sugarRatio) / 100;
  const cocoaGrams = (totalGrams * cocoaRatio) / 100;

  powderElement.style.height = `${cocoaGrams / totalGrams * 100}%`;
  sugarRatioValue.textContent = `${sugarRatio}%`;
  sugarTbspElement.textContent = (sugarGrams * tbspPerGram).toFixed(2);
  cocoaTbspElement.textContent = (cocoaGrams * tbspPerGram).toFixed(2);
}

sugarRatioInput.addEventListener('input', updatePowderRatio);

updatePowderRatio();