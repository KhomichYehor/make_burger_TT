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

    const transformXButterTop = offsetX * 0.40;
    const transformYButterTop = offsetY * 0.40;

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
