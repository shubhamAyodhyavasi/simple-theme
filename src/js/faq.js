// faq
import $ from 'jquery';
export default ()=> {
    const item          = ".c-faq__item";
    const content       = ".c-faq__content-wrapper";
    const activeClass   = "c-faq__item--active";
    
    $(document).on("click", item, function(){
        $(this).toggleClass(activeClass);
        $(this).find(content).slideToggle();
    })
}