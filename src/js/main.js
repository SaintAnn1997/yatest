import sliderParticipants from "./modules/sliderParticipants";
import sliderStages from "./modules/sliderStages";

window.addEventListener('DOMContentLoaded', () => {

    sliderParticipants('.participants-slider__wrapper', '.participants-slider__inner', '.participants-slider__slide', '.participants-slider__control-prev', '.participants-slider__control-next');
    sliderStages('.stages__wrapper', '.stages__items', '.stages__item', '.stages__control-prev', '.stages__control-next', '.stages__control-dot');

});