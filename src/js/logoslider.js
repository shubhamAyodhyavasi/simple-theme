// Logo Slider
import $ from 'jquery';
import Swiper from "swiper"

export default ()=> {
    var swiper = new Swiper('.logo_slider_inner .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            // when window width is >= 640px
            991: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }
      });
}