var sum = 0;
$('.plus').click(function(){
    var qty = $(this).prev().find('input').val();
    qty++;
    $(this).prev().find('input').val(qty);
    $(this).closest('.bottom-qty').find('.cart-animation span').html(qty);
});
$('.min').click(function(){
    var qty = $(this).next().find('input').val();
    if(qty==1)
        return;
    qty--;
    $(this).next().find('input').val(qty);
    $(this).closest('.bottom-qty').find('.cart-animation span').html(qty);
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