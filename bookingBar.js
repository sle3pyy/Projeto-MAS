

$(document).ready(function() {
    var storedDestino = localStorage.getItem('destino');
    var storedSelectedPets = localStorage.getItem('selectedPets');

    if (storedDestino) {
        document.getElementById('cidade').value = storedDestino;
    }

    if (storedSelectedPets) {
        document.getElementById('hospedes').value = storedSelectedPets;
    }
});
document.getElementById('cidade').addEventListener('change', function() {
    var destino = this.value;
    localStorage.setItem('destino', destino);
    console.log(destino);
});

  const quantityCounters = {
    'Cães': 0,
    'Gatos': 0,
    'Hamsters': 0,
    'Pássaros': 0,
  };

  // Listen for button clicks to update quantity
  document.querySelectorAll('.btn-quantity').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const animal = this.getAttribute('data-animal');
      const action = this.getAttribute('data-action');

      if (action === 'increase') {
        quantityCounters[animal]++;
      } else if (action === 'decrease' && quantityCounters[animal] > 0) {
        quantityCounters[animal]--;
      }

      // Update the quantity display
      document.getElementById(`quantity${animal.replace('ã', 'a').replace('á', 'a')}`).innerText = quantityCounters[animal];
    });
  });

  // Listen for button click to show the options
  document.getElementById('showOptionsButton').addEventListener('click', function() {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.classList.toggle('d-none');
  });

  // Listen for button click to confirm and close the options
  document.getElementById('confirmButton').addEventListener('click', function() {
    let selectedPets = '';

    for (const animal in quantityCounters) {
      if (quantityCounters[animal] > 0) {
        selectedPets += `${quantityCounters[animal]} ${animal}, `;
      }
    }

    // Remove trailing comma and space
    document.getElementById('hospedes').value = selectedPets.replace(/, $/, '');
    localStorage.setItem('selectedPets', selectedPets);
    document.getElementById('optionsContainer').classList.add('d-none');
  });

  // Reset the counters when the options are hidden
  document.getElementById('optionsContainer').addEventListener('transitionend', function() {
    if (this.classList.contains('d-none')) {
      for (const animal in quantityCounters) {
        quantityCounters[animal] = 0;
        document.getElementById(`quantity${animal.replace('ã', 'a')}`).innerText = '0';
      }
    }
  });

  