'use strict';

var headerToggle = document.querySelector('.header__toggle');
var navigation = document.querySelector('.header__navigation');
var headerLogo = document.querySelector('.promo__logo');

headerToggle.classList.remove('visually-hidden');
navigation.classList.remove('navigation-nojs');


headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__toggle-closed');
  headerLogo.classList.toggle('visually-hidden');
  navigation.classList.toggle('navigation__show');
  navigation.classList.toggle('navigation__fixed');
});
