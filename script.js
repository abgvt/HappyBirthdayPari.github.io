window.onload = function() {
  // Create an audio element
  const audio = document.getElementById('background-audio');
  
  // Wait for user interaction to unmute and play the audio
  document.body.addEventListener('click', function() {
    if (audio.muted) {
      audio.muted = false;  // Unmute the audio
      audio.play();         // Play the audio
    }
  });

  // Fireworks effect (adds small circular elements to simulate fireworks)
  function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    document.body.appendChild(firework);

    // Random position within boundaries of the window
    firework.style.left = `${Math.random() * (window.innerWidth - 50)}px`; // Subtract 50px to ensure visibility
    firework.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // Subtract 50px for same reason

    setTimeout(() => {
      firework.remove();
    }, 2000); // Remove after animation
  }

  setInterval(createFirework, 500); // Create fireworks every 500ms
};

// Scroll Animation for Friendship Blockquote
const blockquote = document.querySelector('.friendship blockquote');

window.addEventListener('scroll', () => {
  const position = blockquote.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // When the blockquote is within the viewport, add the visible class
  if (position < windowHeight - 100) {
    blockquote.classList.add('visible');
  } else {
    blockquote.classList.remove('visible');
  }
});

// Ensure the blockquote is visible when initially in the viewport
document.addEventListener('DOMContentLoaded', () => {
  const position = blockquote.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (position < windowHeight - 100) {
    blockquote.classList.add('visible');
  }
});
