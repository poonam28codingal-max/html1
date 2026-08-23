const images = [
    'pic1.jpeg',
    'pic2.jpeg',
    'pic1.jpeg',
    'pic2.jpeg',
];

let current = 0;

const sliderImg = document.getElementById("slider-img");

function showSlide(index) {
    sliderImg.src = images[index];
}

function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current)
}

function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
}

setInterval(nextSlide, 3000);
