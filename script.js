const powderElement = document.getElementById('powder');
const totalGramsInput = document.getElementById('total-grams');
const sugarRatioInput = document.getElementById('sugar-ratio');
const sugarRatioValue = document.getElementById('sugar-ratio-value');
const sugarTbspElement = document.getElementById('sugar-tbsp');
const cocoaTbspElement = document.getElementById('cocoa-tbsp');
const tbspPerGram = 0.177;

function updatePowderRatio() {
  const totalGrams = parseInt(totalGramsInput.value);
  const sugarRatio = parseInt(sugarRatioInput.value);
  const cocoaRatio = 100 - sugarRatio;
  const sugarGrams = (totalGrams * sugarRatio) / 100;
  const cocoaGrams = (totalGrams * cocoaRatio) / 100;

  powderElement.style.height = `${cocoaGrams / totalGrams * 100}%`;
  sugarRatioValue.textContent = `${sugarRatio}%`;
  sugarTbspElement.textContent = (sugarGrams * tbspPerGram).toFixed(2);
  cocoaTbspElement.textContent = (cocoaGrams * tbspPerGram).toFixed(2);
}

totalGramsInput.addEventListener('input', updatePowderRatio);
sugarRatioInput.addEventListener('input', updatePowderRatio);

updatePowderRatio();