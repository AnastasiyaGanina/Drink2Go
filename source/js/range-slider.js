const rangeSliderInit = () => {
  const range = document.getElementById('range');
  const inputMin = document.getElementById('min');
  const inputMax = document.getElementById('max');

  if (!range || !inputMin || !inputMax) {
    return;
  }

  const inputs = [inputMin, inputMax];

  noUiSlider.create(range, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    },
    step: 1,
  });

  const rangeDefault = (input, handle) => {
    input[handle].removeAttribute('style');
    if (input[handle].value === '0') {
      input[handle].setAttribute('style', 'color: #bdbdbd');
    }
    if (input[handle].value === '1000') {
      input[handle].setAttribute('style', 'color: #bdbdbd');
    }
  };

  const inputDefault = (input) => {
    input.removeAttribute('style');
    if (input.value === '0' || input.value === '1000') {
      input.setAttribute('style', 'color: #bdbdbd');
    }
  };

  const onRangeUpdate = (values, handle) => {
    inputs[handle].value = parseInt(values[handle], 10);
    rangeDefault(inputs, handle);
  };

  range.noUiSlider.on('update', onRangeUpdate);

  inputMin.addEventListener('change', function () {
    range.noUiSlider.set([this.value, null]);
    inputDefault(inputMin);
  });

  inputMax.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
    inputDefault(inputMax);
  });
};

const init = () => {
  rangeSliderInit();
};

window.addEventListener('DOMContentLoaded', init);
