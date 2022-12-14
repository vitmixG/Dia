'use strict';

let position = 0;
const slidesToshow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-content');
const track = document.querySelector('.slider-content-wrapper');
const items = document.querySelectorAll('.slider-content__item');
const btnPrev = document.querySelector('.slider__arrow-prev');
const btnNext = document.querySelector('.slider__arrow-next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToshow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minwidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs (position) + slidesToshow * container.clientWidth / slidesToshow) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
  });

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
  };

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToshow) * itemWidth;
};

checkBtns();

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const header = document.getElementById('header');
const form = document.querySelector('.page__section-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
  header.scrollIntoView({block: "center", behavior: "smooth"});
});
