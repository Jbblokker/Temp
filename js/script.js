function ftoC(valNum) {
  valNum = parseFloat(valNum);
  const result =(valNum-32)/1.8;
  return document.getElementById("celcius").innerHTML = (Math.round(result));
}


// This is the original function I started with to get an idea how I wanted it to perform on the webpage
// function ftoCE(val) {
//   const result =(val-32)/1.8;
//   return ( Math.round(result));
// }

// this console.log tested my function ftoCE. it works properly.
// console.log(ftoCE(99));

function capitalize(a){
  if(a.charAt(0) !== a.charAt(0).toUpperCase()) {
  return console.log(a.charAt(0).toUpperCase() + a.slice(1))
  } else {
  return console.log('this is already capitalized')
  }
};

let a = 'Help';

console.log(capitalize(a));