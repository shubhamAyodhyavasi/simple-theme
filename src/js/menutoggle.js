// Menu Toggle
import $ from 'jquery';

export default ()=> {
    $('.menu_toggle').on('click', function(){
        $('.c-nav-bar__inner').toggleClass('c-nav-bar__inner--active');
    });
}