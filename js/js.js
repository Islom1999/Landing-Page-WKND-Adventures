


const track = document.querySelector('.carousel-track'),
    slides = Array.from(track.children),
    nextButton =  document.querySelector('.carousel-btn-right'),
    prevButton = document.querySelector('.carousel-btn-left'),
    dotsNav = document.querySelector('.carousel-nav'),
    dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect(),
    slideWidth = slideSize.width;


// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index +'px';
// })

const slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index +'px';
}
slides.forEach(slidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')'
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShovArrovs = (slides, prevButton, nextButton, targetIndex) =>{
    if (targetIndex == 0){
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
    else if (targetIndex == slides.length - 1){
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    }
    else{
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
}

// when click left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide );

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

// when click right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide );
    // const amountToMove = nextSlide.style.left;
    // track.style.transform = 'translateX(-'+ amountToMove +')'
    // currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-slide');
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})

// when  click nav inticators

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return; 

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

    // currentDot.classList.remove('current-slide');
    // targetDot.classList.add('current-slide');

    // if (targetIndex == 0){
    //     prevButton.classList.add('is-hidden')
    //     nextButton.classList.remove('is-hidden')
    // }
    // else if (targetIndex == slides.length - 1){
    //     prevButton.classList.remove('is-hidden')
    //     nextButton.classList.add('is-hidden')
    // }
    // else{
    //     prevButton.classList.remove('is-hidden')
    //     nextButton.classList.remove('is-hidden')
    // }



});





