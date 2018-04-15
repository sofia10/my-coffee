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


// filters navigation

$('.filter-btn').click(function(){
   $('.filter-section').addClass('active');
   $('.burger-bg').addClass('active');
});
$('.close-btn').click(function(){
    $('.filter-section').removeClass('active');
});
$('.burger-bg').click(function(){
    $('.filter-section').removeClass('active');
})

$('.toggle-btn').click(function(){
    $(event.target).closest('.filter').toggleClass('active', 300);
    return false;
})

//line-limit

function rowLimiter(selector, lineLimit) {
    $(selector).each(function(){
        var height = $(this).height();
        var line_height = $(this).css('line-height');
        line_height = parseFloat(line_height);
        var rows = height / line_height;
        rows = Math.round(rows);
        var length = $(this).text().length;
        var newLength = Math.floor(length / rows * lineLimit + 5);
        if(rows > lineLimit)
            $(this).text($(this).text().substr(0,newLength)+'...');
    })
}

rowLimiter('.line-limit', 2);

// add cart effect

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

//price range


var prev_min_price = $("#min_value").val();
var prev_max_price = $("#max_value").val();
var min_price = $("#min_value").val();;
var max_price = $("#max_value").val();




$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ prev_min_price, prev_max_price ],
    slide: function( event, ui ) {
      $( "#min_value" ).val( ui.values[ 0 ]);
      $( "#max_value" ).val( ui.values[ 1 ]);
      min_price = $("#min_value").val();
      max_price = $("#max_value").val();
    }
  });
  var maxValues = $('#slider-range').slider("option", "max");
  var minValues = $('#slider-range').slider("option", "min");

  $( "#min_value" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#max_value" ).val( $( "#slider-range" ).slider( "values", 1 ) );

  $( "#min_value" ).change(function() {
    if ( $(this).val() < minValues ){
      $(this).val(minValues);
    }
    $( "#slider-range" ).slider( "values", 0, $(this).val() );
  });
  $( "#max_value" ).change(function() {
    if ( $(this).val() > maxValues ){
      $(this).val(maxValues);
    }
    $( "#slider-range" ).slider( "values", 1, $(this).val() );
  });






  

