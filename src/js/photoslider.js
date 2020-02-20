// Photo Slider
import $ from 'jquery';
import Swiper from "swiper"

export default ()=> {
    var galleryThumbs = new Swiper('.photoslider_wrapper .gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,breakpoints: {
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
      var galleryTop = new Swiper('.photoslider_wrapper .gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs
        }
    });
}