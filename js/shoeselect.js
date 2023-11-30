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
  