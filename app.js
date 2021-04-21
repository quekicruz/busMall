'use strict'

//global variables 

const productResults = document.getElementById('productselection');
const productChoices = document.getElementById('productchoices');
const firstProductImg = document.getElementById('first_product');
const secondProductImg = document.getElementById('second_product');
const thirdProductImg = document.getElementById('third_product');

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
  ProductImages.productChoices.push(this);
}

// Array for product images
ProductImages.productChoices = [];

//function to render products 

function renderProduct() {
  firstProductImg.src = firstProduct.imagePath;
  secondProductImg.src = secondProduct.imagePath;
  thirdProductImg.src = thirdProduct.imagePath;

}

// Function to grab random product
function productGrabber() {

  const previousProducts = [];

  previousProducts.push(firstProduct)
  previousProducts.push(secondProduct)
  previousProducts.push(thirdProduct)

  while (previousProducts.includes(firstProduct)) {
    let firstIndex = Math.floor(Math.random() * ProductImages.productChoices.length);
    firstProduct = ProductImages.productChoices[firstIndex];
  }

  previousProducts.push(firstProduct)

  while (previousProducts.includes(secondProduct)) {
    let secondIndex = Math.floor(Math.random() * ProductImages.productChoices.length);
    secondProduct = ProductImages.productChoices[secondIndex];
  }

  previousProducts.push(secondProduct)

  while (previousProducts.includes(thirdProduct)) {
    let thirdIndex = Math.floor(Math.random() * ProductImages.productChoices.length);
    thirdProduct = ProductImages.productChoices[thirdIndex];
  }

  previousProducts.push(thirdProduct)

}

  
// Function to display results
function displayResults() {

  productResults.innerHTML = ' ';
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Results'
  productResults.appendChild(h2Elem);
  
  for(let product of ProductImages.productChoices) {
    const liElem = document.createElement('li');
    liElem.textContent = `${product.name}: ${product.clicks}, shown ${product.timesShown} times`;
    productResults.appendChild(liElem);
  }
}

function handleClick(event) {
  console.log(event.target)
  const productClicked = event.target; 
  const id = productClicked.id

  if(totalClicks < 25) {
    if (id === first_product || id === second_product || id === third_product) {
      if ( id === first_product) {
        first_product.clicks++;
      } else if (id === second_product) {
        second_product.clicks++;
      } else if (id === third_product) {
        third_product.clicks++;
      }
      totalClicks++;
      firstProduct.timesShown++;
      secondProduct.timesShown++;
      thirdProduct.timesShown++;
      productGrabber();
      renderProduct();
  }
}

if (totalClicks === 25) {
    productchoices.removeEventListener('click',handleClick);
    displayResults();

  }
}

function renderProductChart() {
  // get data set for labels
  let labelData = [];
  for (let i = 0; i < ProductImages.productChoices.length; i++) {
    let product = ProductImages.productChoices[i];
    labelData.push(product.name);
  }
  // get data set for votes
  let voteData = [];
  for (let product of ProductImages.productChoices) {
    voteData.push(product.clicks);
  }

  console.log(labelData);
  console.log(voteData);


  var ctx = document.getElementById('productChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
           labels: ['Pink', 'Yellow', 'Blue', 'Brown', 'Green'],
          datasets: [{
              label: '# of Votes',
              data: voteData,
              backgroundColor: [
                  'rgba(255, 128, 179)',
                  'rgba(255, 255, 77)',
                  'rgba(0, 255, 255)',
                  'rgba(102, 68, 0)',
                  'rgba(0, 153, 51)',
                  'rgba(255, 128, 179)',
                  'rgba(255, 255, 77)',
                  'rgba(0, 255, 255)',
                  'rgba(102, 68, 0)',
                  'rgba(0, 153, 51)',
                  'rgba(255, 128, 179)',
                  'rgba(255, 255, 77)',
                  'rgba(0, 255, 255)',
                  'rgba(102, 68, 0)',
                  'rgba(0, 153, 51)',
                  'rgba(255, 128, 179)',
                  'rgba(255, 255, 77)',
                  'rgba(0, 255, 255)',
                  'rgba(102, 68, 0)',
                  'rgba(0, 153, 51)',
                  'rgba(255, 128, 179)',
                  'rgba(255, 255, 77)',
                  'rgba(0, 255, 255)',
                  'rgba(102, 68, 0)',
                  'rgba(0, 153, 51)',
              ],
              borderColor: [
                'rgba(255, 128, 179)',
                'rgba(255, 255, 77)',
                'rgba(0, 255, 255)',
                'rgba(102, 68, 0)',
                'rgba(0, 153, 51)',
                'rgba(255, 128, 179)',
                'rgba(255, 255, 77)',
                'rgba(0, 255, 255)',
                'rgba(102, 68, 0)',
                'rgba(0, 153, 51)',
                'rgba(255, 128, 179)',
                'rgba(255, 255, 77)',
                'rgba(0, 255, 255)',
                'rgba(102, 68, 0)',
                'rgba(0, 153, 51)',
                'rgba(255, 128, 179)',
                'rgba(255, 255, 77)',
                'rgba(0, 255, 255)',
                'rgba(102, 68, 0)',
                'rgba(0, 153, 51)',
                'rgba(255, 128, 179)',
                'rgba(255, 255, 77)',
                'rgba(0, 255, 255)',
                'rgba(102, 68, 0)',
                'rgba(0, 153, 51)',
                'rgba(255, 128, 179)',
                'rgba(255, 255, 77)',
                'rgba(0, 255, 255)',
                'rgba(102, 68, 0)',
                'rgba(0, 153, 51)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

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
new ProductImages('tauntaun','./img/tauntaun.jpg');
new ProductImages('unicorn','./img/unicorn.jpg');
new ProductImages('wine-glass','./img/wine-glass.jpg');
new ProductImages('water-can','./img/water-can.jpg');
new ProductImages('usb','./img/usb.gif');
new ProductImages('bathroom','./img/bathroom.jpg');



// adds event listener
productchoices.addEventListener('click', handleClick);

productGrabber();
console.log(firstProduct);
console.log(secondProduct)
console.log(thirdProduct);
renderProduct();
renderProductChart();




