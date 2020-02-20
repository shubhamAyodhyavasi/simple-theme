// Slider
import $ from 'jquery';
import Swiper from "swiper"

export default ()=> {
    var swiper = new Swiper('.testimonial_slider_wrapper .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          // when window width is >= 991px
          991: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
    });
}