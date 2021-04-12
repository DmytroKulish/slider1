const images = document.querySelectorAll('img');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
let presentImg = 0;
rightButton.addEventListener('click',function(){
    for(let i = 0;i < images.length;i++){
        images[i].hidden=true;
    }
    if(presentImg>=images.length){
        presentImg=0;
        images[presentImg].hidden=false;
        presentImg++
    }else{
        images[presentImg].hidden=false;
        presentImg++
    }
})
leftButton.addEventListener('click',function(){
    for(let i = 0;i < images.length;i++){
        images[i].hidden=true;
    }
    if(presentImg <= 0){
        presentImg = images.length-1;
        images[presentImg].hidden=false;
        presentImg--
    }else{
        images[presentImg].hidden=false;
        presentImg--
    }
})