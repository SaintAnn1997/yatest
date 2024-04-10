const sliderParticipants = (sliderWrapperSelector, slidesFieldSelector, slidesSelector, prevArrow, nextArrow) => {
    const sliderWrapper = document.querySelector(sliderWrapperSelector);
    const slidesField = document.querySelector(slidesFieldSelector);
    const slides = document.querySelectorAll(slidesSelector);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const currentSlideNumber = document.querySelector('.participants-slider__control-current');

    const width = window.getComputedStyle(sliderWrapper).width;

    let offset = 0;
    let slidesPerView;

    const screen = {
        small: window.matchMedia('(max-width: 520px)'),
        medium: window.matchMedia('(min-width: 521px) and (max-width: 768px)'),
        large: window.matchMedia('(min-width: 769px) and (max-width: 1920px)'),
    };
    
    for (let [scr, mq] of Object.entries(screen)) {
        if (mq) mq.addEventListener('change', mqHandler);
    }
    
    function mqHandler() {
        let size;
    
        for (let [scr, mq] of Object.entries(screen)) {
            if (!mq || mq.matches) size = scr;
        }
        
        switch (size) {
            case 'large':
                slidesField.style.width = 100 * slides.length / 3 + '%';
                slidesPerView = 3;
                break;
            case 'medium':
                slidesField.style.width = 100 * slides.length / 2 + '%';
                slidesPerView = 2;
                break;
            case 'small':
                slidesField.style.width = 100 * slides.length / 1 + '%';
                slidesPerView = 1;
                break;
        }
    
    };
    
    mqHandler();

    let slideIndex = slidesPerView;

    slidesField.style.width = 100 * slides.length / slidesPerView + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function updateSlideNumber() {
        currentSlideNumber.textContent = slideIndex;
    };

    updateSlideNumber();

    function nextSlide() {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - slidesPerView)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset / slidesPerView}px)`;

        if (slideIndex == slides.length) {
            slideIndex = slidesPerView;
        } else {
            slideIndex++;
        }

        updateSlideNumber();
    };

    function prevSlide() {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - slidesPerView)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset / slidesPerView}px)`;

        if (slideIndex == slidesPerView) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        updateSlideNumber();
    };

    next.addEventListener('click', () => {
        nextSlide();
    });

    prev.addEventListener('click', () => {
        prevSlide();
    });

    setInterval(() => {
        nextSlide();
    }, 4000);

};

export default sliderParticipants;

