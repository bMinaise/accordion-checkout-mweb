/**********************************

	Custom functions for checkout
	
 ********************************/

//onLoad fire function == put misc. stuff here
+function ($) {
	//console.log('init');
}(jQuery);

//window session storage and localStorage 
//session will expire on page close, localStorage should not
window.onload  = function(){	
	
	// this invokes a callback once the div of a specific id 
	$('button').click(function(evt){  
    if(evt.target.id == 'checkoutContinue')
        //console.log("a clicked");
				//MAKE THIS OPEN THE PANEL AND HIDE THE OUTPUT DATA

		console.log('btn clicked');
		 	$('#collapseOne').collapse({
		 		toggle: true
			})
		$("#collapseTwo").collapse();				
	})
};


$(document).ready(function() {
    
    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');
        
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });
    
    $('ul.setup-panel li.active a').trigger('click');
    

    $('#activate-step-2').on('click', function(e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $(this).remove();
    }) 
    
    $('#activate-step-3').on('click', function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).remove();
    })      
});


