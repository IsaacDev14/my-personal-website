document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const heroParagraph = document.querySelector("#hero p");
const text = heroParagraph.textContent;  // Get the original text

function typeWriter() {
  heroParagraph.textContent = "";  // Clear text immediately to start fresh
  let index = 0;  // Start index

  function type() {
    if (index < text.length) {
      heroParagraph.textContent += text.charAt(index);  // Add one character at a time
      index++;
      setTimeout(type, 50);  // Adjust typing speed (100ms delay per character)
    } else {
      setTimeout(typeWriter, 1000);  // Restart typing after a 1-second delay
    }
  }

  type();  // Start typing
}

window.addEventListener("load", typeWriter);  // Start typing on page load


const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");

let index = 0;

function slideImages() {
  index++;
  if (index >= images.length) {
    index = 0;  // Reset to the first image
  }
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideImages, 3000);  // Change image every 3 seconds
