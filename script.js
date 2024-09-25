// JavaScript to play the audio when the button is clicked
const button = document.getElementById('playButton');
const audio = document.getElementById('audioPlayer');
const volumeSlider = document.getElementById('volumeSlider');

// Play sound on button click
button.addEventListener('click', function() {
  audio.play();
});

// Adjust volume based on slider
volumeSlider.addEventListener('input', function() {
  audio.volume = volumeSlider.value;
});

