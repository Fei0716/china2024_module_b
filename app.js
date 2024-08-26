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


    //setup intersection observer
    const slideRightObserver = new IntersectionObserver((entries)=>{
        if(entries[0].intersectionRatio > 0){
            //apply slide from right animation for the entry element children
            let children =entries[0].target.querySelectorAll(':scope > *');
            let delay = 0;
            children.forEach((el)=>{
                el.style.animationDelay = `${delay}s`;
                el.classList.add('slideFromRight');
                delay += 0.2;

            });
        }

    });

// Select all elements with the class .observe-slide-from-right
    const slideRightElements = document.querySelectorAll('.observe-slide-from-right');

// Iterate over the NodeList and observe each element
    slideRightElements.forEach((element) => {
        slideRightObserver.observe(element);
    });



    //setup intersection observer
    const slideLeftObserver = new IntersectionObserver((entries)=>{
        if(entries[0].intersectionRatio > 0){
            //apply slide from right animation for the entry element children
            let children =entries[0].target.querySelectorAll(':scope > *');
            let delay = 0;
            children.forEach((el)=>{
                el.style.animationDelay = `${delay}s`;
                el.classList.add('slideFromLeft');
                delay += 0.2;

            });
        }

    });
    // Select all elements with the class .observe-slide-from-right
    const slideLeftElements = document.querySelectorAll('.observe-slide-from-left');

// Iterate over the NodeList and observe each element
    slideLeftElements.forEach((element) => {
        slideLeftObserver.observe(element);
    });

});