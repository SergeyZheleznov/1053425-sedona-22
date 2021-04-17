//Файл для открытия и закрытия меню
const buttonOpen = document.querySelector('.page-header__button');
const menu = document.querySelector('.main-nav');

menu.classList.add('main-nav--close');
buttonOpen.classList.add ('page-header__button--burger');

buttonOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.toggle('main-nav--close');
  menu.classList.toggle('main-nav--show');
  buttonOpen.classList.toggle('page-header__button--burger');
  buttonOpen.classList.toggle('page-header__button--cross');
});
