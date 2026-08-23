const images= [
      'pic1.jpeg',
      'pic2.jpeg',
      'pic3.jpeg',
      'pic4.jpeg',
];
let current = 0;

const sliderimg = document.getElementById('slider-img');

function showslide(index){
     sliderimg.src = images[index];
}
function nextslide(){
    current =(current+1)%images.length ;
    showslide(current);
}
function prevslide(){
    current =(current-1+images.length)%images.length ;
    showslide(current);
}
setInterval(nextslide, 3000);