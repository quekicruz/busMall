'use strict'

//global variables 

const productResults = document.getElementById('productselection');
const productchoices = document.getElementById('productchoices');
const firstProductImg = document.getElementById('first_product');
const secondProductImg = document.getElementById('second_product');
const thirdProductImg = document.getElementById('third_product');
const firstProductPElem = document.getElementById('first_product_p_tag');
const secondProductPElem = document.getElementById('second_product_p_tag');
const thirdProductPElem = document.getElementById('third_product_p_tag');

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
  ProductImages.productchoices.push(this);
  storeItems();
}

// Array for product images
ProductImages.productchoices = [];


function searchStorage() {
  let stringifiedVotes = localStorage.getItem(`previousVotes`);
  if (stringifiedVotes) {
    let votesParsed = JSON.parse(stringifiedVotes);
    ProductImages.productchoices = votesParsed;
    // console.log(votesParsed);
    renderProduct();
  } else {
    createProducts();
  }
}

function storeItems() {
  let stringifiedVotes = JSON.stringify(ProductImages.productchoices);
  localStorage.setItem(`previousVotes`, stringifiedVotes);
}


//function to render products 

function renderProduct() {
  firstProductImg.src = firstProduct.imagePath;
  secondProductImg.src = secondProduct.imagePath;
  thirdProductImg.src = thirdProduct.imagePath;
  firstProductImg.alt = firstProduct.imagePath;
  secondProductImg.alt = secondProduct.imagePath;
  thirdProductImg.alt = thirdProduct.imagePath;

  firstProductPElem.textContent = firstProduct.name;
  secondProductPElem.textContent = secondProduct.name;
  thirdProductPElem.textContent = thirdProduct.name;


}

// Function to grab random product
function productGrabber() {

  const previousProducts = [];

  previousProducts.push(firstProduct)
  previousProducts.push(secondProduct)
  previousProducts.push(thirdProduct)

  while (previousProducts.includes(firstProduct)) {
    let firstIndex = Math.floor(Math.random() * ProductImages.productchoices.length);
    firstProduct = ProductImages.productchoices[firstIndex];
    firstProduct.timesShown += 1
  }

  previousProducts.push(firstProduct)

  while (previousProducts.includes(secondProduct)) {
    let secondIndex = Math.floor(Math.random() * ProductImages.productchoices.length);
    secondProduct = ProductImages.productchoices[secondIndex];
    secondProduct.timesShown += 1
  }

  previousProducts.push(secondProduct)

  while (previousProducts.includes(thirdProduct)) {
    let thirdIndex = Math.floor(Math.random() * ProductImages.productchoices.length);
    thirdProduct = ProductImages.productchoices[thirdIndex];
    thirdProduct.timesShown += 1
  }

  previousProducts.push(thirdProduct)

}

  
// Function to display results
function displayResults() {

  productResults.innerHTML = ' ';
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Results'
  productResults.appendChild(h2Elem);
  
  for(let product of ProductImages.productchoices) {
    const liElem = document.createElement('li');
    liElem.textContent = `${product.name}: ${product.clicks}, shown ${product.timesShown} times`;
    productResults.appendChild(liElem);
  }
}

function handleClick(event) {
  console.log(event.target)
  const productClicked = event.target; 
  const id = productClicked.id
  console.log(id);
  totalClicks++;


  if (totalClicks < 25) {
    for (let i = 0; i < ProductImages.productchoices.length ; i++) {
      console.log(ProductImages.productchoices[i], event.target.alt)
      if ( event.target.alt === ProductImages.productchoices[i].imagePath) {
        ProductImages.productchoices[i].clicks += 1
      }
    }

  }
  // if(totalClicks < 10) {
  //   if (id === first_product || id === second_product || id === third_product) {
  //     if ( id === first_product) {
  //       first_product.clicks++;
  //     } else if (id === second_product) {
  //       second_product.clicks++;
  //     } else if (id === third_product) {
  //       third_product.clicks++;
  //     }
  //     firstProduct.timesShown++;
  //     secondProduct.timesShown++;
  //     thirdProduct.timesShown++;
  //   }
  // }
  
  productGrabber();
  renderProduct();
  
  console.log(totalClicks)
  
  if (totalClicks === 25) {
    console.log('checking total clicks');
    productchoices.removeEventListener('click',handleClick);
    displayResults();
    renderProductChart();
    storeItems()

  }
  
}

function renderProductChart() {
  // get data set for labels
  let labelData = [];
  for (let i = 0; i < ProductImages.productchoices.length; i++) {
    let product = ProductImages.productchoices[i];
    labelData.push(product.name);
  }

  // get data set for votes
  let voteData = [];
  for (let product of ProductImages.productchoices) {
    voteData.push(product.clicks);
  }



  var ctx = document.getElementById('productChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
           labels: labelData,
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
function createProducts(){
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
}


// adds event listener
productchoices.addEventListener('click', handleClick);

// productGrabber();
// renderProduct();
// // renderProductChart();
// displayResults();

searchStorage();




