document.addEventListener('DOMContentLoaded', () => {
  const bottomBread = document.querySelector('.burger_hero-bottomBread');
  const butter = document.querySelector('.burger_hero-butter');
  const bottomLetuce = document.querySelector('.burger_hero-bottomLetuce');
  const bottomChease = document.querySelector('.burger_hero-bottomChease');
  const onion = document.querySelector('.burger_hero-onion');
  const meat = document.querySelector('.burger_hero-meat');
  const tomatos = document.querySelector('.burger_hero-tomatos');
  const cocumber = document.querySelector('.burger_hero-cocumber');
  const butterTop = document.querySelector('.burger_hero-butterTop');
  const topBread = document.querySelector('.burger_hero-topBread');

  const initialRotationBottomBread = 'rotate(12deg)';
  const initialRotationButter = 'rotate(12deg)';
  const initialRotationBottomLetuce = 'rotate(0deg)';
  const initialRotationBottomChease = 'rotate(12deg)';
  const initialRotationOnion = 'rotate(12deg)';
  const initialRotationMeat = 'rotate(12deg)';
  const initialRotationTomatos = 'rotate(12deg)';
  const initialRotationCocumber = 'rotate(-10deg)';
  const initialRotationButterTop = 'rotate(-10deg)';
  const initialRotationTopBread = 'rotate(-20deg)';

  const initialTranslation = 'translate(0, 0)';

  bottomBread.style.transform = `${initialRotationBottomBread} ${initialTranslation}`;
  butter.style.transform = `${initialRotationButter} ${initialTranslation}`;
  bottomLetuce.style.transform = `${initialRotationBottomLetuce} ${initialTranslation}`;
  bottomChease.style.transform = `${initialRotationBottomChease} ${initialTranslation}`;
  onion.style.transform = `${initialRotationOnion} ${initialTranslation}`;
  meat.style.transform = `${initialRotationMeat} ${initialTranslation}`;
  tomatos.style.transform = `${initialRotationTomatos} ${initialTranslation}`;
  cocumber.style.transform = `${initialRotationCocumber} ${initialTranslation}`;
  butterTop.style.transform = `${initialRotationButterTop} ${initialTranslation}`;
  topBread.style.transform = `${initialRotationTopBread} ${initialTranslation}`;

  const section = document.getElementById('discover');
  const burger = document.querySelector('.burger');

  section.addEventListener('mousemove', (e) => {
    const sectionRect = section.getBoundingClientRect();
    const burgerRect = burger.getBoundingClientRect();

    const offsetX = e.clientX - burgerRect.left - burgerRect.width / 2;
    const offsetY = e.clientY - burgerRect.top - burgerRect.height / 2;

    const transformXButterTop = offsetX * 0.4;
    const transformYButterTop = offsetY * 0.4;

    const tiltXButterTop = (offsetY / burgerRect.height) * 30;
    const newRotationButterTop = `rotate(${tiltXButterTop}deg)`;

    butterTop.style.transform = `translate(${transformXButterTop}px, ${transformYButterTop}px) ${initialRotationButterTop} ${newRotationButterTop}`;

    const transformXTopBread = offsetX * 0.45;
    const transformYTopBread = offsetY * 0.45;

    const tiltXTopBread = (offsetY / burgerRect.height) * 35;
    const newRotationTopBread = `rotate(${tiltXTopBread}deg)`;

    topBread.style.transform = `translate(${transformXTopBread}px, ${transformYTopBread}px) ${initialRotationTopBread} ${newRotationTopBread}`;

    const transformXTomatos = offsetX * 0.23;
    const transformYTomatos = offsetY * 0.23;

    const tiltXTomatos = (offsetY / burgerRect.height) * 13;
    const newRotationTomatos = `rotate(${tiltXTomatos}deg)`;

    tomatos.style.transform = `translate(${transformXTomatos}px, ${transformYTomatos}px) ${initialRotationTomatos} ${newRotationTomatos}`;

    const transformXCocumber = offsetX * 0.17;
    const transformYCocumber = offsetY * 0.17;

    const tiltXCocumber = (offsetY / burgerRect.height) * 18;
    const newRotationCocumber = `rotate(${tiltXCocumber}deg)`;

    cocumber.style.transform = `translate(${transformXCocumber}px, ${transformYCocumber}px) ${initialRotationCocumber} ${newRotationCocumber}`;

    const transformXMeat = offsetX * 0.35;
    const transformYMeat = offsetY * 0.35;

    const tiltXMeat = (offsetY / burgerRect.height) * -10;
    const newRotationMeat = `rotate(${tiltXMeat}deg)`;

    meat.style.transform = `translate(${transformXMeat}px, ${transformYMeat}px) ${initialRotationMeat} ${newRotationMeat}`;

    const transformXOnion = offsetX * 0.25;
    const transformYOnion = offsetY * 0.25;

    const tiltXOnion = (offsetY / burgerRect.height) * -10;
    const newRotationOnion = `rotate(${tiltXOnion}deg)`;

    onion.style.transform = `translate(${transformXOnion}px, ${transformYOnion}px) ${initialRotationOnion} ${newRotationOnion}`;

    const transformXBottomChease = offsetX * 0.15;
    const transformYBottomChease = offsetY * 0.15;

    const tiltXBottomChease = (offsetY / burgerRect.height) * -10;
    const newRotationBottomChease = `rotate(${tiltXBottomChease}deg)`;

    bottomChease.style.transform = `translate(${transformXBottomChease}px, ${transformYBottomChease}px) ${initialRotationBottomChease} ${newRotationBottomChease}`;

    const transformXBottomLetuce = offsetX * 0.12;
    const transformYBottomLetuce = offsetY * 0.12;

    const tiltXBottomLetuce = (offsetY / burgerRect.height) * -7;
    const newRotationBottomLetuce = `rotate(${tiltXBottomLetuce}deg)`;

    bottomLetuce.style.transform = `translate(${transformXBottomLetuce}px, ${transformYBottomLetuce}px) ${initialRotationBottomLetuce} ${newRotationBottomLetuce}`;

    const transformXBottomBread = offsetX * 0.1;
    const transformYBottomBread = offsetY * 0.1;

    const tiltXBottomBread = (offsetY / burgerRect.height) * 20;
    const newRotationBottomBread = `rotate(${tiltXBottomBread}deg)`;

    bottomBread.style.transform = `translate(${transformXBottomBread}px, ${transformYBottomBread}px) ${initialRotationBottomBread} ${newRotationBottomBread}`;

    const transformXButter = offsetX * -0.1;
    const transformYButter = offsetY * -0.1;

    const tiltXButter = (offsetY / burgerRect.height) * -10;
    const newRotationButter = `rotate(${tiltXButter}deg)`;

    butter.style.transform = `translate(${transformXButter}px, ${transformYButter}px) ${initialRotationButter} ${newRotationButter}`;
  });

  burger.addEventListener('mouseenter', () => {
    bottomBread.style.transform = `${initialRotationBottomBread} ${initialTranslation}`;
    butter.style.transform = `${initialRotationButter} ${initialTranslation}`;
    bottomLetuce.style.transform = `${initialRotationBottomLetuce} ${initialTranslation}`;
    bottomChease.style.transform = `${initialRotationBottomChease} ${initialTranslation}`;
    onion.style.transform = `${initialRotationOnion} ${initialTranslation}`;
    meat.style.transform = `${initialRotationMeat} ${initialTranslation}`;
    tomatos.style.transform = `${initialRotationTomatos} ${initialTranslation}`;
    cocumber.style.transform = `${initialRotationCocumber} ${initialTranslation}`;
    butterTop.style.transform = `${initialRotationButterTop} ${initialTranslation}`;
    topBread.style.transform = `${initialRotationTopBread} ${initialTranslation}`;
  });

  burger.addEventListener('mouseleave', () => {
    bottomBread.style.transform = `${initialRotationBottomBread} ${initialTranslation}`;
    butter.style.transform = `${initialRotationButter} ${initialTranslation}`;
    bottomChease.style.transform = `${initialRotationBottomChease} ${initialTranslation}`;
    bottomLetuce.style.transform = `${initialRotationBottomLetuce} ${initialTranslation}`;
    onion.style.transform = `${initialRotationOnion} ${initialTranslation}`;
    meat.style.transform = `${initialRotationMeat} ${initialTranslation}`;
    tomatos.style.transform = `${initialRotationTomatos} ${initialTranslation}`;
    cocumber.style.transform = `${initialRotationCocumber} ${initialTranslation}`;
    butterTop.style.transform = `${initialRotationButterTop} ${initialTranslation}`;
    topBread.style.transform = `${initialRotationTopBread} ${initialTranslation}`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const callBackButton = document.querySelector('.callBack');
  const modal = document.getElementById('callBackModal');
  const closeBtn = modal.querySelector('.close');
  const scrollLink = modal.querySelector('.scroll-link');
  const burgerMakeButton = document.querySelector('.burger_make_link');

  callBackButton.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  if (scrollLink) {
    scrollLink.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }, 300);
      }
    });
  }

  if (burgerMakeButton) {
    burgerMakeButton.addEventListener('click', function () {
      const targetElement = document.getElementById('maker');

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navigationLinks = document.querySelectorAll('.navigation__item-link');
  const sections = document.querySelectorAll('section');

  const hideSections = () => {
    sections.forEach((section) => {
      section.style.display = 'none';
      section.classList.remove('active');
    });
  };

  navigationLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetSectionId = link.getAttribute('data-section');

      hideSections();

      const targetSection = document.getElementById(targetSectionId);
      targetSection.style.display = 'block';
      targetSection.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    
  const incrementButtons = document.querySelectorAll('.choose-card-increment');
  const decrementButtons = document.querySelectorAll('.choose-card-decrement');
  const priceBlockSum = document.querySelector('.price-block-sum');
  const totalCaloriesElem = document.getElementById('total-calories');
  const totalTimeElem = document.getElementById('total-time');
  const totalWeightElem = document.getElementById('total-weight');
  const burgerBlock = document.querySelector('.burger-block');
  const sureBlock = document.querySelector('.sure');
  const valueElem = document.querySelector('.choose-card-value');

  let value = parseInt(valueElem.textContent);
  let totalCalories = 50;
  let totalTime = 0;
  let totalWeight = 20;
  let totalPrice = 0;
  let ingredientCount = 0;

  function checkIngredientCount() {
    let threshold = 70;

    if (window.innerWidth < 768) {
      threshold = 10;
    } else if (window.innerWidth >= 1200) {
      threshold = 80;
    }

    if (ingredientCount >= threshold) {
      sureBlock.style.display = 'block';
    } else {
      sureBlock.style.display = 'none';
    }
  }

  function updateIngredientCount(increment) {
    ingredientCount += increment;
    checkIngredientCount();
  }

  incrementButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const card = this.closest('.choose-card');
      updateValues(card, 1);
      addIngredientToBurger(card);
      updateIngredientCount(1);
    });
  });

  if (value === 0) {
    decrementButtons.disabled = true;
  } else {
    decrementButtons.disabled = false;
  }

  decrementButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const card = this.closest('.choose-card');
      updateValues(card, -1);
      removeIngredientFromBurger(card);
      updateIngredientCount(-1);
    });
  });

  function updateValues(card, increment) {
    const valueElem = card.querySelector('.choose-card-value');

    let value = parseInt(valueElem.textContent);
    value += increment;
    if (value < 0) value = 0;
    valueElem.textContent = value;

    const price = parseFloat(card.getAttribute('data-price'));
    const calories = parseInt(card.getAttribute('data-calories'));
    const time = parseInt(card.getAttribute('data-time'));
    const weight = parseInt(card.getAttribute('data-weight'));

    totalCalories += calories * increment;
    totalTime += time * increment;
    totalWeight += weight * increment;
    totalPrice += price * increment;

    if (totalPrice < 0) {
      totalPrice = 0;
    }

    if (totalCalories < 50) {
      totalCalories = 50;
    }

    if (totalTime < 0) {
      totalTime = 0;
    }

    if (totalWeight < 20) {
      totalWeight = 20;
    }

    totalCaloriesElem.textContent = `${totalCalories} kcal`;
    totalTimeElem.textContent = `${Math.floor(totalTime / 60)} min`;
    totalWeightElem.textContent = `${totalWeight} g`;
    priceBlockSum.textContent = `$${totalPrice.toFixed(2)}`;

    checkGiftPromotion();
  }

  function checkGiftPromotion() {
    const giftPorpuseBlock = document.querySelector(
      '.price-block-gift-porpuse'
    );
    const giftPromotionBlock = document.querySelector(
      '.price-block-gift-promotion'
    );

    if (totalPrice >= 5.0) {
      giftPorpuseBlock.style.display = 'none';
      giftPromotionBlock.style.display = 'flex';
    } else {
      giftPorpuseBlock.style.display = 'block';
      giftPromotionBlock.style.display = 'none';
    }
  }

  function addIngredientToBurger(card) {
    const imgSrc = card.querySelector('.choose-card-img-item').src;

    if (card.querySelector('.choose-card-title').textContent.trim() === 'Bun') {
      const ingredientImg = document.createElement('img');
      ingredientImg.src = imgSrc;
      ingredientImg.classList.add('burger-ingredient');
      ingredientImg.classList.add('burger-ingredient-bun');
      burgerBlock.appendChild(ingredientImg);
    } else {
      const ingredient = document.createElement('img');
      ingredient.src = imgSrc;
      ingredient.classList.add('burger-ingredient');
      ingredient.dataset.id =
        card.querySelector('.choose-card-title').textContent.trim() +
        '-' +
        new Date().getTime();
      burgerBlock.appendChild(ingredient);
    }

    updateIngredientPositions();
  }

  function removeIngredientFromBurger(card) {
    const ingredientId = card
      .querySelector('.choose-card-title')
      .textContent.trim();
      const ingredients = Array.from(
        burgerBlock.querySelectorAll(
          `.burger-ingredient[data-id^="${ingredientId}"], .burger-ingredient-bun`
        )
      );
    if (ingredients.length > 0) {
      burgerBlock.removeChild(ingredients[0]);
      updateIngredientPositions();
    }
  }

  function updateIngredientPositions() {
    const ingredients = Array.from(
      burgerBlock.querySelectorAll('.burger-ingredient')
    );
    let position;
    if (window.innerWidth <= 768) {
      position = 290;
    } else {
      position = burgerBlock.clientHeight - 90;
    }

    ingredients.forEach((ingredient) => {
      ingredient.style.top = `${position}px`;
      position -= 5;
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const orderButton = document.querySelector('.order-button');
  const popup = document.getElementById('popup');
  const popupClose = document.getElementById('popup-close');
  const popupBurger = document.getElementById('popup-burger');
  const burgerBlock = document.querySelector('.burger-block');

  orderButton.addEventListener('click', () => {
    popupBurger.innerHTML = '';
    const clonedIngredients = burgerBlock.querySelectorAll(
      '.burger-ingredient, .bottomBun-img'
    );
    clonedIngredients.forEach((ingredient) => {
      const clone = ingredient.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.animation = 'none';
      clone.style.left = '0%';
      clone.style.top = '54%';

      if (ingredient.classList.contains('burger-ingredient')) {
        clone.style.width = '30%';
      } else if (ingredient.classList.contains('bottomBun-img')) {
        clone.style.width = '40%';
      }

      popupBurger.appendChild(clone);
    });

    updatePopupIngredientPositions(popupBurger);

    popup.style.display = 'flex';
    document.body.classList.add('lock-scroll');
  });

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.classList.remove('lock-scroll');
  });

  function updatePopupIngredientPositions(container) {
    const ingredients = Array.from(
      container.querySelectorAll('.burger-ingredient')
    );
    let positionPercentage = 50;

    ingredients.forEach((ingredient) => {
      const position = `${positionPercentage}%`;
      ingredient.style.top = position;
      positionPercentage -= 1;
      positionPercentage = Math.max(positionPercentage, 0);
    });
  }

    const emailForm = document.getElementById('email-form');
    const popupConfirm = document.getElementById('popup-confirm');
    const popupConfirmClose = document.getElementById('popup-confirm-close');
    const closeConfirmPopup = document.getElementById('close-confirm-popup');
  
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    popupConfirmClose.addEventListener('click', () => {
      popupConfirm.style.display = 'none';
    });
  
    closeConfirmPopup.addEventListener('click', () => {
      popupConfirm.style.display = 'none';
    });
  
    emailForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      popup.style.display = 'none';
      popupConfirm.style.display = 'flex';
    });
  });
