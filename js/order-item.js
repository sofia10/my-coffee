var sum = 0;
$('.plus').click(function(){
    var qty = $(this).prev().find('input').val();
    qty++;
    $(this).prev().find('input').val(qty);
});
$('.min').click(function(){
    var qty = $(this).next().find('input').val();
    if(qty==1)
        return;
    qty--;
    $(this).next().find('input').val(qty);
});
