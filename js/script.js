//this is to prevent the page from reloading when we press the convert button. 
window.addEventListener("load", listen, false);

//this is our function for converting F° to C°
//I added Math.round to give us a whole number for the program
function ftoC() {
  let temp = Number(document.getElementById("number").value);
  const result =(temp-32)/1.8;
  //console.log(Math.round(result) + "°");
  return document.getElementById("celsius").innerHTML = (Math.round(result) + "°" + " " + "on" + " " + date);
}

//onclick listening to the button with the id of convert
function listen() {
  document.getElementById("Convert").onclick = ftoC;
}

const storageInput = document.getElementById("celsius");
const button = document.getElementById("save");
const buttonView = document.getElementById("viewPrevious")
const storedInput = localStorage.getItem("tempInput");
const celsius = document.getElementById("celsius");
//const tempOutput = document.getElementById("tempOutput");

function viewOld() {
if (celsius.textContent = storedInput)
   { result = document.getElementById("tempOutput").innerHTML= storedInput; }
    return result;
}

storageInput.addEventListener("input", tempResult  => {
  celsius.textContent = tempResult.target.value
})

function saveToStorage() {
  localStorage.setItem("tempInput", celsius.textContent)
}

button.addEventListener("click", saveToStorage)
buttonView.addEventListener("click", viewOld)
// this is for getting the time and date so user can see when they looked up their last temp reading
// we are currently displaying the year, month, and date all numerically. 
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


// This is the original function I started with to get an idea how I wanted it to perform on the webpage
// function ftoCE(val) {
//   const result =(val-32)/1.8;
//   return ( Math.round(result));
// }

// this console.log tested my function ftoCE. it works properly.
// console.log(ftoCE(99));