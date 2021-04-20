'use strict'

//global variables 

const productResults = document.getElementById('productselection');
const productChoices = document.getElementById('productchoices');
const firstProductImg = document.getElementById('firstproduct');
const secondProductImg = document.getElementById('secondproduct');
const thirdProductImg = document.getElementById('thirdproduct');

let totalClicks = 0;

let firstProduct = null;
let secondProduct = null;
let thirdProduct = null;

// constructor function for all products images

const ProductImages = function (name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.clicks = 0;
  this.timesShown = 0;
  
  ProductImages.allImages.push(this);
}

ProductImages.allImages = [];

// function to render products 
function renderProduct() {
  firstProductImg.src = firstProduct.imagePath;
  secondProductImg.src = secondProduct.imagePath;
  thirdProductImg.src = thirdProduct.imagePath;

}

// Function to grab random product
function productGrabber() {
   let firstProductChoice = Math.floor(Math.random() * ProductImages.allImages.length);
   let secondProductChoice = Math.floor(Math.random() * ProductImages.allImages.length);
   let thirdProductChoice = Math.floor(Math.random() * ProductImages.allImages.length);
  while (firstProductChoice === secondProductChoice || firstProductChoice === thirdProductChoice || firstProduct === undefined ) {
    firstProductChoice = Math.floor(Math.random() * ProductImages.allImages.length);
  }
  while (secondProductChoice === firstProductChoice || secondProductChoice === thirdProductChoice || secondProductChoice === undefined) {
    secondProductChoice = Math.floor(Math.random() * ProductImages.allImages.length);
  }
  while (thirdProductChoice === secondProductChoice || thirdProductChoice === firstProductChoice || secondProductChoice === undefined) {
    thirdProductChoice = Math.floor(Math.random() * ProductImages.allImages.length);
  }

  firstProduct = ProductImages.allImages[firstProductChoice];
  secondProduct = ProductImages.allImages[secondProductChoice];
  thirdProduct = ProductImages.allImages[thirdProductChoice];
}
  


// Function to 
function displayResults() {
  productResults.innerHTML = ' ';
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Results'
  productResults.appendChild(h2Elem);
  
  for(let product of ProductImages.allImages) {
    const liElem = document.createElement('li');
    liElem.textContent = `${product.name}${product.clicks}`;
    productResults.appendChild(liElem);
  }
}

function handleClick(event) {
  const productClicked = event.target 
  const id = productClicked.id

  if(totoalClicks <= 10) {
    if (id === first_product || id === second_product || id === third_product) {
      if ( id === first_product) {
        firstProduct.clicks++;
      } else if (id === second_product) {
        second_product.clicks++;
      } else if (id === third_product) {
        third_product.clicks++;
      }
  }
  totalClicks++;
  firstProduct.timesShown++;
  second_product.timesShown++;
  thirdProduct.timesShown++;
  productGrabber();
}
if (totalClicks > 10) {
  allImages.removeEventListener('click',handleClick);
}
}

// new arguments for constructor function with all product information

new ProductImages('bag', './img/bag.jpg');
new ProductImages('banana','./img/banana.jpg');
new ProductImages('bubblegum','./img/bubblegum.jpg');
new ProductImages('chair','./img/chair.jpg');
new ProductImages('cthulhu','./img/cthulhu.jpg');
new ProductImages('dog-duck','./img/dog-duck.jpg');
new ProductImages('dragon','./img/dragon.jpg');
new ProductImages('pen','./img/pen.jpg');
new ProductImages('pet-sweep','./img/pet-sweep.jpg');
new ProductImages('boots','./img/boots.jpg');
new ProductImages('breakfast', './img/breakfast.jpg');
new ProductImages('scissors','./img/scissors.jpg');
new ProductImages('shark','./img/shark.jpg');
new ProductImages('sweep','./img/sweep.png');
new ProductImages('tauntaun','./img/tautaun.jpg');
new ProductImages('unicorn','./img/unicorn.jpg');
new ProductImages('wine-glass','./img/wine-glass.jpg');
new ProductImages('water-can','./img/water-can.jpg');
new ProductImages('usb','./img/usb.gif');
new ProductImages('bathroom','./img/bathroom.jpg');



productGrabber();
console.log(firstProduct);
console.log(secondProduct);
console.log(thirdProduct);



  