const sliderStages = (sliderWrapperSelector, slidesFieldSelector, slidesSelector, prevArrow, nextArrow, dotsSelector) => {
    let sliderInitialized = false;

    function initSlider() {
        const width = window.innerWidth;
        if (width <= 520 && !sliderInitialized) {
            const sliderWrapper = document.querySelector(sliderWrapperSelector);
            const slidesField = document.querySelector(slidesFieldSelector);
            const slides = document.querySelectorAll(slidesSelector);
            const prev = document.querySelector(prevArrow);
            const next = document.querySelector(nextArrow);
            const dots = document.querySelectorAll(dotsSelector);

            const width = window.getComputedStyle(sliderWrapper).width;

            let slideIndex = 1;
            let offset = 0;

            slidesField.style.width = 100 + '%';

            slides.forEach(slide => {
                slide.style.width = width;
            });

            function changeClassDot() {
                dots.forEach(dot => dot.classList.remove('stages__control-dot--active'));
                dots[slideIndex - 1].classList.add('stages__control-dot--active');
            };

            function updateArrows() {
                if (offset === 0) {
                    prev.classList.add('stages__control-prev--inactive');
                    prev.classList.remove('stages__control-prev--active');
                } else {
                    prev.classList.remove('stages__control-prev--inactive');
                    prev.classList.add('stages__control-prev--active');
                }

                if (offset >= +width.slice(0, width.length - 2) * (slides.length - 3)) {
                    next.classList.add('stages__control-next--inactive');
                    next.classList.remove('stages__control-next--active');
                } else {
                    next.classList.remove('stages__control-next--inactive');
                    next.classList.add('stages__control-next--active');
                }
            };


            function nextSlide() {
                if (offset < +width.slice(0, width.length - 2) * (slides.length - 3)) {
                    offset += +width.slice(0, width.length - 2);
                    slidesField.style.transform = `translateX(-${offset}px)`;

                    slideIndex++;
                }
                updateArrows();
                changeClassDot();
            };

            function prevSlide() {
                if (offset > 0) {
                    offset -= +width.slice(0, width.length - 2);
                    slidesField.style.transform = `translateX(-${offset}px)`;

                    slideIndex--;
                }
                updateArrows();
                changeClassDot();
            };

            next.addEventListener('click', nextSlide);
            prev.addEventListener('click', prevSlide);

            updateArrows();
            changeClassDot();

            sliderInitialized = true;
        } else if (width !== 520 && sliderInitialized) {
            sliderInitialized = false;
        }
    };

    window.addEventListener('resize', initSlider);
    initSlider();
};

export default sliderStages;
