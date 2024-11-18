// Select video and audio elements
const video = document.getElementById('revolution-video');
const audio = document.getElementById('background-audio');

// Stop background audio when video plays
video.addEventListener('play', () => {
  audio.pause();
});

// Resume background audio when video pauses
video.addEventListener('pause', () => {
  audio.play();
});
