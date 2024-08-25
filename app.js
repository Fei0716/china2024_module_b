document.addEventListener('DOMContentLoaded', function(){
    //dom element
    const heroWrapperDom = document.querySelector('#hero-wrapper');
    const bannersDom = document.querySelector('.banners');
    const bannerImagesDom = document.querySelectorAll('.banner-img');
    const slideLeftBtnDom = document.querySelector('#btn-slide-left');
    const slideRightBtnDom = document.querySelector('#btn-slide-right');

    //states
    let currentSlide = 0;
    let maxSlide = 4;
    let heroWrapperWidth = getComputedStyle(heroWrapperDom).width;
    let bannerImageWidth = getComputedStyle(bannerImagesDom[0]).width;
    let slideDistance;
    let slideInterval = setInterval(()=>{
        slideLeft();
    } , 5000);
    //add event listeners
    slideLeftBtnDom.addEventListener('click', slideLeft);

    slideRightBtnDom.addEventListener('click', slideRight);

    //functions
    function slideLeft(){
        if(currentSlide < 3){
            //calculate the slide left distance
            bannersDom.style.transform = `translateX(calc(-${bannerImageWidth} * ${++currentSlide})`;
        }else{
            //move to back to the original position
            currentSlide = 0;
            bannersDom.style.transform = `translateX(calc(-${bannerImageWidth} * ${currentSlide})`;
        }
    }
    function slideRight(){
        if(currentSlide > 0){
            //calculate the slide left distance
            bannersDom.style.transform = `translateX(calc(-${bannerImageWidth} * ${--currentSlide})`;
        }else{
            //move to back to the most right position
            currentSlide = 3;
            bannersDom.style.transform = `translateX(calc(-${maxSlide - 1} * ${bannerImageWidth})`;
        }
    }
});