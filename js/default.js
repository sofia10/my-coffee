$(document).ready(function () {

    var counter = 0;
    $('.language-bar .active').click(function(){
        if(counter == 0){
            $('.language-bar li:not(.active)').addClass('active');
            counter++
        }else{
            counter = 0;
            $('.language-bar li').not(':first').removeClass('active');

        }
    });


    $('.burger-btn').click(function(){
       $('.burger-nav').addClass('active');
       $('.burger-bg').addClass('active');
    });
    $('.close-btn').click(function(){
        $('.burger-nav').removeClass('active');
        $('.burger-bg').removeClass('active');
        $('.search-nav').fadeOut();
    })
    $('.burger-bg').click(function(){
        $('.burger-nav').removeClass('active');
        $('.burger-bg').removeClass('active');
    })

    // search

    $('.search-bg').click(function(){
       $('.search-nav').fadeIn();
    })


    $(function () {
        $('#btn_search').click(function () {
            $('#search-form').submit();
        })

        $('.search-nav').keypress(function (e) {
            var key = e.which;
            if(key == 13)  // the enter key code
            {
                $('#btn_search').click();
                return false;
            }
        });
    });


    // modal

    var sum = 0;
    $('.plus-modal').click(function(){
        var qty = $(this).prev().find('input').val();
        qty++;
        $(this).prev().find('input').val(qty);
    });
    $('.min-modal').click(function(){
        var qty = $(this).next().find('input').val();
        if(qty==1)
            return;
        qty--;
        $(this).next().find('input').val(qty);
    });


});


