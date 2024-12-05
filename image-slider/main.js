let sliderImage = document.querySelectorAll('.slide');
let slider = document.querySelectorAll('slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let current = 0;

function reset(){
    for(let i = 0; i < sliderImage.length; i++){
        sliderImage[i].style.display = 'none';
    }
}

function displayImage(){
    reset();
    sliderImage[current].style.display = 'block';
}

function moveLeft(){
    reset();
    sliderImage[current - 1].style.display = 'block';
    current--;
}

arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImage.length;
    }
    moveLeft();
})

function moveRight(){
    reset();
    sliderImage[current + 1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function(){
    if(current === sliderImage.length -1){
        current = -1;
    }
    moveRight();
})
displayImage();