var sum = 0;
$('.plus').click(function(){
    var qty = $(this).prev().find('input').val();
    qty++;
    $(this).prev().find('input').val(qty);
    $(this).closest('.qty').find('.cart-animation span').html(qty);
});
$('.min').click(function(){
    var qty = $(this).next().find('input').val();
    if(qty==1)
        return;
    qty--;
    $(this).next().find('input').val(qty);
    $(this).closest('.qty').find('.cart-animation span').html(qty);
});


// slider

var swiper = new Swiper('.prod-slider', {
    slidesPerView: 3,
    spaceBetween: 60,
    navigation: {
        nextEl: '.slider-block .swiper-button-next',
        prevEl: '.slider-block .swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});



// fly effect

$('.animate_clicker').click(function(){
    var target = $(this).closest('div').find('.cart-animation').fadeIn();
    target.addClass('cart-animation-class');
    removeAnimate(target);
});

function removeAnimate(target){
    setTimeout(function(){
        target.removeClass('cart-animation-class');
        target.hide();
    },900)
}




