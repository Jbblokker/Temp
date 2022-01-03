window.addEventListener("load", listen, false);

function listen() {
  document.getElementById("Convert").onclick = ftoC;
}

function ftoC() {
  let temp = Number(document.getElementById("number").value);
  const result =(temp-32)/1.8;
  console.log(Math.round(result) + "°");
  return document.getElementById("celsius").innerHTML = (Math.round(result) + "°");
}

// This is the original function I started with to get an idea how I wanted it to perform on the webpage
// function ftoCE(val) {
//   const result =(val-32)/1.8;
//   return ( Math.round(result));
// }

// this console.log tested my function ftoCE. it works properly.
// console.log(ftoCE(99));

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function getVal() {
  const val = document.querySelector('input').value;
  console.log(val);
}

