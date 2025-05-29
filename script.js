const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function showSlide(i) {
  if (i < 0) {
    index = 0; 
  } else if (i >= images.length - visibleCount + 1) {
    index = images.length - visibleCount; 
  } else {
    index = i;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

const visibleCount = 3;

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Код для модального окна 
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevModal = document.getElementById('prevModal');
const nextModal = document.getElementById('nextModal');

const modalImages = Array.from(document.querySelectorAll('.slides img')).map(img => img.src);
let modalIndex = 0;

document.querySelectorAll('.slides img').forEach((img, i) => {
  img.addEventListener('click', (e) => {
    e.stopPropagation(); 
    modalIndex = i;
    modalImg.src = modalImages[modalIndex];
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

prevModal.addEventListener('click', () => {
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
  modalImg.src = modalImages[modalIndex];
});

nextModal.addEventListener('click', () => {
  modalIndex = (modalIndex + 1) % modalImages.length;
  modalImg.src = modalImages[modalIndex];
});
