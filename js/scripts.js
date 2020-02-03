 // tabbed content
    $(".tab_content").hide('slow');
    $(".tab_content:first").show('slow');

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide('slow');
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");


var app = angular.module('rzSliderDemo', ['rzModule', 'ui.bootstrap']);
app.controller('MainCtrl', function ($scope, $rootScope, $timeout, $modal) {
    //Loan Amount
    $scope.loanAmount = {
        value: 100000,
		minValue: 5000,
		maxValue: 100000,
		options: {
		floor: 0,
		ceil: 100000,
		step: 5000
		}
    };
	$scope.tenure = {
        value: 3,
		minValue: 0,
		maxValue: 3,
		options: {
		floor: 0,
		ceil: 3
		}
    };

});

//VERIFICATION STEP
var back =jQuery(".prev");
var	next = jQuery(".next");
var	steps = jQuery(".step");

next.bind("click", function() { 
	jQuery.each( steps, function( i ) {
		if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
			jQuery(steps[i]).addClass('current');
			jQuery(steps[i - 1]).removeClass('current').addClass('done');
			return false;
		}
	})		
});
back.bind("click", function() { 
	jQuery.each( steps, function( i ) {
		if (jQuery(steps[i]).hasClass('done') && jQuery(steps[i + 1]).hasClass('current')) {
			jQuery(steps[i + 1]).removeClass('current');
			jQuery(steps[i]).removeClass('done').addClass('current');
			return false;
		}
	})		
});


//Proceed Button

$('.btnNext').click(function(){
$('.tabs > .active').next('li').find('a').trigger('click');
});

$('.bstnPrevious').click(function(){
$('.tabs > .active').prev('li').find('a').trigger('click');
});