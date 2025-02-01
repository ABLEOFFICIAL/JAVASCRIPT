let ac = document.querySelector('.ac');
let ansDisplay = document.querySelector('.ans-display');
let seven = document.querySelector('.seven');
let digits = document.getElementsByClassName('num');
arrDigit = Array.from(digits);

console.log(arrDigit);
clearItem = () => {
    ansDisplay.textContent = '0';
}

reset = () => { ansDisplay.textContent = '';}

show = (e) => {
    reset();
    let num = e.target.textContent;
    ansDisplay.textContent += num;

    console.log('hello');
}

for(i = 0; i < arrDigit.length; i++) {
    arrDigit[i].addEventListener('click', show);
}



ac.addEventListener('click', clearItem);
// seven.addEventListener('click', show);