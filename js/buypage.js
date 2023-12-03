document.addEventListener("DOMContentLoaded", function() {
  const shoeImages = {
    'Shoe1': ['images/Shoe1.webp', 'images/Shoe1-secondary.webp'],
    'Shoe2': ['images/Shoe2.webp', 'images/Shoe2-secondary.webp'],
    'Shoe3': ['images/Shoe3.webp', 'images/Shoe3-secondary.webp'],
    'Shoe4': ['images/Shoe4.webp', 'images/Shoe4-secondary.webp'],
    'Shoe5': ['images/Shoe5.webp', 'images/Shoe5-secondary.webp'],
    'Shoe6': ['images/Shoe6.webp', 'images/Shoe6-secondary.webp'],
    'Shoe7': ['images/Shoe7.webp', 'images/Shoe7-secondary.webp'],
    'Shoe8': ['images/Shoe8.webp', 'images/Shoe8.webp'],
    'Shoe9': ['images/Shoe9.webp', 'images/Shoe9.webp'],
  };

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const selectedShoe = getQueryParam('shoe');

  if (selectedShoe && shoeImages[selectedShoe]) {
    const primaryImageSrc = shoeImages[selectedShoe][0];
    const secondaryImageSrc = shoeImages[selectedShoe][1];

    document.querySelector('.carousel-item.active img').src = primaryImageSrc;

    const carouselInner = document.querySelector('.carousel-inner');
    const secondaryImageElement = document.createElement('div');
    secondaryImageElement.className = 'carousel-item';
    secondaryImageElement.innerHTML = `<img class="d-block w-100" src="${secondaryImageSrc}" alt="Secondary slide">`;
    carouselInner.appendChild(secondaryImageElement);
  }
});
