/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliderParticipants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderParticipants */ "./src/js/modules/sliderParticipants.js");
/* harmony import */ var _modules_sliderStages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliderStages */ "./src/js/modules/sliderStages.js");


window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_sliderParticipants__WEBPACK_IMPORTED_MODULE_0__["default"])('.participants-slider__wrapper', '.participants-slider__inner', '.participants-slider__slide', '.participants-slider__control-prev', '.participants-slider__control-next');
  Object(_modules_sliderStages__WEBPACK_IMPORTED_MODULE_1__["default"])('.stages__wrapper', '.stages__items', '.stages__item', '.stages__control-prev', '.stages__control-next', '.stages__control-dot');
});

/***/ }),

/***/ "./src/js/modules/sliderParticipants.js":
/*!**********************************************!*\
  !*** ./src/js/modules/sliderParticipants.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    large: window.matchMedia('(min-width: 769px) and (max-width: 1920px)')
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
  }
  ;
  mqHandler();
  let slideIndex = slidesPerView;
  slidesField.style.width = 100 * slides.length / slidesPerView + '%';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  function updateSlideNumber() {
    currentSlideNumber.textContent = slideIndex;
  }
  ;
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
  }
  function prevSlide() {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - slidesPerView);
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
  }
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
/* harmony default export */ __webpack_exports__["default"] = (sliderParticipants);

/***/ }),

/***/ "./src/js/modules/sliderStages.js":
/*!****************************************!*\
  !*** ./src/js/modules/sliderStages.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      }
      ;
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
      }
      ;
      function nextSlide() {
        if (offset < +width.slice(0, width.length - 2) * (slides.length - 3)) {
          offset += +width.slice(0, width.length - 2);
          slidesField.style.transform = `translateX(-${offset}px)`;
          slideIndex++;
        }
        updateArrows();
        changeClassDot();
      }
      ;
      function prevSlide() {
        if (offset > 0) {
          offset -= +width.slice(0, width.length - 2);
          slidesField.style.transform = `translateX(-${offset}px)`;
          slideIndex--;
        }
        updateArrows();
        changeClassDot();
      }
      next.addEventListener('click', nextSlide);
      prev.addEventListener('click', prevSlide);
      updateArrows();
      changeClassDot();
      sliderInitialized = true;
    } else if (width !== 520 && sliderInitialized) {
      sliderInitialized = false;
    }
  }
  window.addEventListener('resize', initSlider);
  initSlider();
};
/* harmony default export */ __webpack_exports__["default"] = (sliderStages);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map