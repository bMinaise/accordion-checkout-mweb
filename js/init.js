/**********************************

	Custom functions for checkout
	
 ********************************/
	
//declare version of jQuery	
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

//onLoad fire function == put misc. stuff here
+function ($) {

/*
 	$('#collapseOne').collapse({
  	toggle: true
	})
*/

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


