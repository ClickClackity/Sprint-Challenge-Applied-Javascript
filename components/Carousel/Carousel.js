/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const createCarousel = () => {
  const carousel = document.createElement('div'),
    leftButton = document.createElement('div'),
    imgOne = document.createElement('img'),
    imgTwo = document.createElement('img'),
    imgThree = document.createElement('img'),
    imgFour = document.createElement('img'),
    rightButton = document.createElement('div');
    //
    carousel.classList.add('carousel');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');
    //
    imgOne.src = './assets/carousel/mountains.jpeg';
    imgTwo.src = './assets/carousel/computer.jpeg';
    imgThree.src = './assets/carousel/trees.jpeg';
    imgFour.src = './assets/carousel/turntable.jpeg';
    //
    imgOne.style.display = 'block';

    carousel.appendChild(leftButton);
    carousel.appendChild(imgOne);
    carousel.appendChild(imgTwo);
    carousel.appendChild(imgThree);
    carousel.appendChild(imgFour);
    carousel.appendChild(rightButton);

    document.querySelector('.carousel-container').appendChild(carousel);
};

createCarousel();
//
let carouselImgs = Array.from(document.querySelectorAll('.carousel img'));
let carouselIndex = 0;
//
const turnLeft = () => {
  carouselImgs[carouselIndex].style.display = 'none';
  //
  if (carouselIndex == 0) {
    carouselIndex = carouselImgs.length - 1;
  } else {
    carouselIndex--;
  }
  //
  carouselImgs[carouselIndex].style.display = 'block';
};
//
const turnRight = () => {
  carouselImgs[carouselIndex].style.display = 'none';
  //
  if (carouselIndex == carouselImgs.length - 1) {
    carouselIndex = 0;
  } else {
    carouselIndex++;
  }
  //
  carouselImgs[carouselIndex].style.display = 'block';
};
//
document.querySelector('.left-button').addEventListener('click', turnLeft);
document.querySelector('.right-button').addEventListener('click', turnRight);