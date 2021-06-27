function findVideos() {
  let videos = document.querySelectorAll('.video__player');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');

  video.addEventListener('click', () => {
      let iframe = createIframe();

      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL());
  iframe.setAttribute('width', 503);
  iframe.setAttribute('height', 282);
  iframe.classList.add('video__start');

  return iframe;
}

function generateURL() {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/KkVG8nCbPvU' + query;
}

findVideos();

