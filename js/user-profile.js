$('.dropdown-open').click(function(){
    $('.profile-menu').toggleClass('active');
})

$( ".disabled" ).prop({
  disabled: true
});


$('.change-btn').click(function(){
	$('.profile-right').addClass('edited-form');
	$( '.disabled').prop({
	  disabled: false
	});
})
$('.save-btn').click(function(){
	$('.profile-right').removeClass('edited-form');
	$( ".disabled" ).prop({
	  disabled: true
	});
})