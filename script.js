const powderElement = document.getElementById('powder');
const totalGramsInput = document.getElementById('total-grams');
const sugarRatioInput = document.getElementById('sugar-ratio');
const sugarRatioValue = document.getElementById('sugar-ratio-value');
const sugarSpElement = document.getElementById('sugar-sp');
const cocoaSpElement = document.getElementById('cocoa-sp');
const gramPerSp = 5.73;

function updatePowderRatio() {
  const totalGrams = parseInt(totalGramsInput.value);
  const sugarRatio = parseInt(sugarRatioInput.value);
  const cocoaRatio = 100 - sugarRatio;
  const sugarGrams = (totalGrams * sugarRatio) / 100;
  const cocoaGrams = (totalGrams * cocoaRatio) / 100;

  powderElement.style.height = `${cocoaGrams / totalGrams * 100}%`;
  sugarRatioValue.textContent = `${sugarRatio}%`;
  sugarSpElement.textContent = (sugarGrams / gramPerSp).toFixed(2);
  cocoaSpElement.textContent = (cocoaGrams / gramPerSp).toFixed(2);
}

totalGramsInput.addEventListener('input', updatePowderRatio);
sugarRatioInput.addEventListener('input', updatePowderRatio);

updatePowderRatio();