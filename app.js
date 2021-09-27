function slidesPlugin(activeSlide = 0){
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', ()=>{
            clearActiveSlide()

            slide.classList.add('active')
        })
    }   

    function clearActiveSlide(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(0)