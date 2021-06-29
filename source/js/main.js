'use strict';

// Video
var videoWidth = 503;
var videoHeight = 282;

var videoUrl = 'https://www.youtube.com/embed/KkVG8nCbPvU';

function findVideos() {
  var videos = document.querySelectorAll('.video__player');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  var link = video.querySelector('.video__link');
  var button = video.querySelector('.video__button');

  var setupVideoHandler = function () {
    var iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  };

  video.addEventListener('click', setupVideoHandler);

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function createIframe() {
  var iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL());
  iframe.setAttribute('width', videoWidth);
  iframe.setAttribute('height', videoHeight);
  iframe.classList.add('video__start');

  return iframe;
}

function generateURL() {
  var query = '?rel=0&showinfo=0&autoplay=1';

  return videoUrl + query;
}

findVideos();

// Navigation

var headerToggle = document.querySelector('.header__toggle');
var navigation = document.querySelector('.header__navigation');
var headerLogo = document.querySelector('.promo__logo');
var headerLinks = document.querySelectorAll('.navigation__link');

headerToggle.classList.remove('visually-hidden');
navigation.classList.remove('navigation-nojs');


headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__toggle-closed');
  headerLogo.classList.toggle('visually-hidden');
  navigation.classList.toggle('navigation__show');
  navigation.classList.toggle('navigation__fixed');
});

headerLinks.forEach(function (element) {
  element.addEventListener('click', function () {
    headerToggle.classList.remove('header__toggle-closed');
    headerLogo.classList.remove('visually-hidden');
    navigation.classList.remove('navigation__show');
    navigation.classList.remove('navigation__fixed');
  });
});
