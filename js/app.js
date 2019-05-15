const myBody = document.getElementById('body');
const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput');
const myResetButton = document.getElementById('myResetButton');

myButton.addEventListener('click', () => {
  myBody.style.backgroundColor = myInput.value;
});

myResetButton.addEventListener('click', () => {
  myBody.style.backgroundColor = 'white';
  myInput.value = '';
})
