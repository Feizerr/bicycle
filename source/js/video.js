'use strict';

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
  iframe.setAttribute('width', 503);
  iframe.setAttribute('height', 282);
  iframe.classList.add('video__start');

  return iframe;
}

function generateURL() {
  var query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/KkVG8nCbPvU' + query;
}

findVideos();
