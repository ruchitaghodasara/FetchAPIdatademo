import './style.css';

// function findOccur(arr) {
//   const count = {};

//   for (let i of arr) {
//     if (count[i]) {
//       count[i] += 1;
//     } else {
//       count[i] = 1;
//     }
//   }

//   console.log(count);
// }

// findOccur([1, 1, 2, 3, 4, 2, 3]);

// function removeDuplicate(arr) {
//   const b = [];

//   // for (let i = 0; i < arr.length; i++) {
//   //   if (b.indexOf(arr[i]) == -1) {
//   //     b.push(arr[i]);
//   //   }
//   // }

//   arr.filter((i) => {
//     if (b.indexOf(arr[i]) == -1) {
//       b.push(arr[i]);
//     }
//   });

//   console.log(b);
// }

// removeDuplicate([1, 1, 2, 3, 4, 2, 3]);

// let myName = 'Ruchita';
// const fName = fun();
// function fun() {
//   return `My name is ${myName}`;
// }

// console.log(fName);

// function mul(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
// console.log('output with normal function', mul(2)(4)(6));

// const call = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };
// console.log('output with arrow function', mul(2)(4)(6));

// function funPromise(a) {
//   let myPromise = new Promise((resolve, reject) => {
//     // let x = 0;
//     if (a < 6) {
//       resolve(`Given number is ${a}`);
//     } else {
//       reject('You entered invalid number');
//     }
//   });

//   myPromise.then((result) => console.log(result));
// }

// funPromise(5);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// const fetchPromise = fetch(
//   'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
// );

// console.log(fetchPromise);

// fetchPromise
//   .then((response) => {
//     if (!response) {
//       throw new Error(`HTTP Error:  ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   })
//   .catch((error) => {
//     console.log(`Could not get product: ${error}`);
//   });

// console.log('Started request...');

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// fetchProducts();

fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
)
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    console.log(completeData);
    let data1 = '';
    completeData.map((value) => {
      data1 += `<div class="card">
      <h3 class="title">${value.name}</h3>
      <div class="btm-tag">
      <p class="info">${value.price}</p>
      <p class="type">${value.type}</p>
    </div>
  </div>`;
    });

    document.getElementById('cards').innerHTML = data1;
  })
  .catch((error) => {
    console.log(`${error} product is not found`);
  });

var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log('num', num);
  }
  inner();
}
outer();

function sayHi() {
  return (() => 0)();
}

console.log(sayHi());
