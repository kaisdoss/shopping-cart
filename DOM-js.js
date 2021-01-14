var removeCarts = document.getElementsByClassName("btn-reset");
const hearts = document.querySelectorAll(".fa-heart");
let btnPlus = document.querySelectorAll(".button1");
let btnMinus = document.querySelectorAll(".button-1");
let prices = document.querySelectorAll(".price");
// let pricesTotalEl = document.querySelectorAll(".price-h3");
let sum = document.querySelector(".total");
let sumP1 = document.querySelector(".pro1");
let sumP2 = document.querySelector(".p2");
let sumP3 = document.querySelector(".p3");

// -----------------------------------------------------------------------------------------

// RemoveButton
for (i = 0; i < removeCarts.length; i++) {
  var buttom = removeCarts[i];
  // console.log(buttom);
  buttom.addEventListener("click", function (even) {
    let buttonClick = even.target;
    buttonClick.parentElement.parentElement.parentElement.remove();
    totalSum();
  });
}

// redLike
for (i = 0; i < hearts.length; i++) {
  var heart = hearts[i];
  heart.addEventListener("click", function (e) {
    e.target.classList.toggle("redLike");
  });
}

for (t = 0; t < btnPlus.length; t++) {
  var fp = btnPlus[t];
  // console.log(ff);
  fp.addEventListener("click", function (y) {
    var quantity = y.target.parentElement.childNodes[3];
    if (parseInt(quantity.innerText) < 20) {
      quantity.innerText = parseInt(quantity.innerText) + 1;
    }
    totalSum();
  });
}


btnMinus.forEach((minus) => {
  minus.addEventListener("click", function (e) {
    e.preventDefault()
    if (minus.previousElementSibling.innerHTML > 0) {
      minus.previousElementSibling.innerHTML--;
    } 
    totalSum();
  
  });
});


// function totalSumP1() {
//   let totalp = [];
//   let pricesp = Array.from(document.querySelectorAll(".pr"));
//   let quantitiesp = Array.from(document.querySelector("#quantity1"));
//   for (let i = 0; i < pricesp.length; i++) {
//     totalp.push(pricesp[i].innerHTML * quantitiesp[i].innerHTML);
//     sumP1.innerHTML = totalp.reduce((a, b) => a + b)+ "$";
//   }
// }


function totalSum() {
  let total = [];
  let prices = Array.from(document.querySelectorAll(".pr"));
  let quantities = Array.from(document.querySelectorAll(".quantity"));
  for (let i = 0; i < prices.length; i++) {
    total.push(prices[i].innerHTML * quantities[i].innerHTML);
    sum.innerHTML = total.reduce((a, b) => a + b)+ "$";
  }
}


// for (u = 0; u < btnMinus.length; u++) {
//   var fm = btnMinus[u];
//   // console.log(fm);
//   fm.addEventListener("click", function (pp) {
//     
//     var quantity = pp.target.parentElement.childNodes[3];
//     if (parseInt(quantity.innerText) > 0) {
//       quantity.innerText = parseInt(quantity.innerText) - 1;
//     }
//   });
// }

// for (t = 0; t < pricesTotalEl.length; t++) {
//   // Quantity Is Here
//   var quantity =
//     pricesTotalEl[0].parentElement.parentElement.childNodes[5].childNodes[1]
//       .childNodes[3].innerHTML;
//   console.log(quantity);
//   // Price Is Here
//   var price = prices[t].childNodes[1].innerHTML;
//   console.log(price);
//   // Total Price
//   pricesTotalEl[t].innerHTML = parseInt(price) * parseInt(quantity) + "$";
//   console.log(pricesTotalEl[t].innerHTML);
//   // pricesTotalEl.innerText = prices[t]
// }

// hearts.forEach((heart) => {
//   heart.addEventListener("click", function () {
//     heart.classList.toggle("red-hearts");
//   });
// });
// btnPlus.forEach((plus) => {
//   plus.addEventListener("click", function () {
//     plus.nextElementSibling.innerHTML++;
//     totalSum();
//   });
// });

// btnMinus.forEach((minus) => {
//   minus.addEventListener("click", function () {
//     if (minus.previousElementSibling.innerHTML > 0) {
//       minus.previousElementSibling.innerHTML--;
//     }
//     totalSum();
//   });
// });

// var count=0
// function changecolor(x) {
//   var x;
//   if (x==1){
//     count=count+1;
//   }
//   if (count==1){
//     document.getElementsByClassName('i').style.background="red";

//   }
//   else if(count==2){
//     document.getElementsByClassName('i').style.background="green";
//     count=0;
//   }
// }


