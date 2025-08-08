/* Код для слайдеров и открытия в модальном окне */ 
const sliders = document.querySelectorAll('.slider');
const visibleCount = 3;

sliders.forEach(slider => {
  const slides = slider.querySelector('.slides');
  const images = slider.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');

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

  prev.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));
});


const sliderModal = document.getElementById("sliderModal");
const sliderModalImg = document.getElementById("sliderModalImage");
const sliderClose = document.getElementById("sliderClose");
const sliderPrevBtn = document.getElementById("sliderPrevBtn");
const sliderNextBtn = document.getElementById("sliderNextBtn");

// Собираем все изображения из всех слайдеров
const sliderImages = Array.from(document.querySelectorAll('.slider .slides img'));
let sliderCurrentIndex = 0;

function openSliderModal(index) {
  sliderCurrentIndex = index;
  sliderModalImg.src = sliderImages[sliderCurrentIndex].src;
  sliderModalImg.alt = sliderImages[sliderCurrentIndex].alt;
  sliderModal.style.display = "flex";
}

function changeSliderImage(offset) {
  sliderCurrentIndex = (sliderCurrentIndex + offset + sliderImages.length) % sliderImages.length;
  sliderModalImg.src = sliderImages[sliderCurrentIndex].src;
  sliderModalImg.alt = sliderImages[sliderCurrentIndex].alt;
}

// Обработчики
sliderImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    openSliderModal(index);
  });
});

sliderClose.addEventListener("click", () => {
  sliderModal.style.display = "none";
});

sliderModal.addEventListener("click", (e) => {
  if (e.target === sliderModal) {
    sliderModal.style.display = "none";
  }
});

sliderPrevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  changeSliderImage(-1);
});

sliderNextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  changeSliderImage(1);
});

document.addEventListener("keydown", (e) => {
  if (sliderModal.style.display === "flex") {
    if (e.key === "ArrowLeft") {
      changeSliderImage(-1);
    } else if (e.key === "ArrowRight") {
      changeSliderImage(1);
    } else if (e.key === "Escape") {
      sliderModal.style.display = "none";
    }
  }
});





// Код для модального окна 
const galleryImages = Array.from(document.querySelectorAll(".gallery-item"));

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showModal(index) {
  currentIndex = index;
  modalImg.src = galleryImages[currentIndex].src;
  modalImg.alt = galleryImages[currentIndex].alt;
  modal.style.display = "flex";
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    showModal(index);
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showModal(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showModal(currentIndex);
});

document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showModal(currentIndex);
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showModal(currentIndex);
    } else if (e.key === "Escape") {
      modal.style.display = "none";
    }
  }
});
// Код для таймлайна 
document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
