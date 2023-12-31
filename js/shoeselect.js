document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('price-range');
    filterSelect.addEventListener('change', filterCardsByPrice);
  
    function filterCardsByPrice() {
      const selectedRange = filterSelect.value.split('-');
      const minPrice = parseFloat(selectedRange[0]);
      const maxPrice = parseFloat(selectedRange[1]);
      let visibleCards = [];
  
      document.querySelectorAll('.card').forEach(card => {
        const cardPrice = parseFloat(card.getAttribute('data-price'));
        if (cardPrice >= minPrice && cardPrice <= maxPrice) {
          visibleCards.push(card);
        }
        card.style.display = 'none';
      });
        const cardContainer = document.querySelector('.card-container');
      cardContainer.innerHTML = '';
        visibleCards.forEach(card => {
        cardContainer.appendChild(card);
        card.style.display = 'block';
      });
  
      if (filterSelect.value === '0-1000') {
        location.reload();
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    let originalOrder = Array.from(document.getElementsByClassName('card'));
    
    document.getElementById('sort-price').addEventListener('change', function() {
      let cards = Array.from(document.getElementsByClassName('card'));
      let sortedCards = cards;
  
      if(this.value !== 'none') {
        sortedCards = cards.sort(function(a, b) {
          let priceA = parseFloat(a.getAttribute('data-price').replace('$', ''));
          let priceB = parseFloat(b.getAttribute('data-price').replace('$', ''));
          return this.value === 'asc' ? priceA - priceB : priceB - priceA;
        }.bind(this));
      } else {
        sortedCards = originalOrder;
      }
  
      let container = document.querySelector('.card-container .row');
      container.innerHTML = '';
      sortedCards.forEach(card => container.appendChild(card));
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const shoe = getParameterByName('shoe');
    const name = getParameterByName('name');
    const price = getParameterByName('price');

    if (shoe) {
      document.querySelector('.images-container img.placeholder').src = `images/${shoe}.webp`;
    }

    if (name) {
      document.querySelector('.shoe-name').textContent = name;
    }

    if (price) {
      document.querySelector('.shoe-price').textContent = `$${price}`;
    }
  });
