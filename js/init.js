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

//window session storage and localStorage 
//session will expire on page close, localStorage should not
window.onload  = function(){
	loadvalues();
	
	
	// this invokes a callback once the div of a specific id 
	$('button').click(function(evt){  
    if(evt.target.id == 'checkoutContinue')
        //console.log("a clicked");
				//MAKE THIS OPEN THE PANEL AND HIDE THE OUTPUT DATA

		savethestuffSession();
 	//$('form').submit(false);

		$("#collapseOne").collapse();
		$("#collapseTwo").collapse();				
	})
};

//fire function to start capturing and saving data
function loadvalues(){
	//getthestuffSession(); //get the session storage data
	//getthestuffLocal(); //get the local storage data
	//getCheckoutAddress();
	
	//savethestuffSession();
	
	console.log('inside loadvalues');
}

//save form fields from address form
function savethestuffSession(){
	var firstName = document.getElementById("firstNameCheckout"); //get the elements
	var lastName  = document.getElementById("lastNameCheckout");
	var address1  = document.getElementById("addressLine1");
	var address2  = document.getElementById("addressLine2");
	var zipCode   = document.getElementById("zipCode");
	var stateCart = document.getElementById("stateCart");
	var cityCart  = document.getElementById("cityCart");
	var phoneCart = document.getElementById("phoneCart");
	var saveAddy  = document.getElementById("saveAddy");
	
	console.log('inside savethestuffSession');
	
	var firstNameValue = firstName.value; //get value's
	var lastNameValue  = lastName.value;
	var address1Value  = address1.value;
	var address2Value  = address2.value;
	var zipCodeValue   = zipCode.value;
	var stateCartValue = stateCart.value;
	var cityCartValue  = cityCart.value;
	var phoneCartValue = phoneCart.value;
	var saveAddyValue  = saveAddy.value;
	
	sessionStorage.setItem(1, firstNameValue); //store the value with a key as 1 LONGWAY!
	sessionStorage.setItem(2, lastNameValue);
	sessionStorage.setItem(3, address1Value);
	sessionStorage.setItem(4, address2Value);
	sessionStorage.setItem(5, zipCodeValue);
	sessionStorage.setItem(6, stateCartValue);
	sessionStorage.setItem(7, cityCartValue);
	sessionStorage.setItem(8, phoneCartValue);
	sessionStorage.setItem(9, saveAddyValue);
	
	//getthestuffSession(); //fire get data -- Can be executed multiple times to capture each dataset
	getCheckoutAddress(); //fire get first part of form
	
}
//get data from address form
function getCheckoutAddress(){
	//console.log('getCheckoutAddress');
	var addressData;
	var thediv = document.getElementById("formOneOutput");
		
	firstData = sessionStorage.getItem(1);
	lastData = sessionStorage.getItem(2)
	address1Data = sessionStorage.getItem(3);
	address2Data = sessionStorage.getItem(4);
	zipCodeData = sessionStorage.getItem(5);
	stateData = sessionStorage.getItem(6);
	cityData = sessionStorage.getItem(7);
	phoneData = sessionStorage.getItem(8);
	saveInfoData = sessionStorage.getItem(9);
	
	if (firstData){
		thediv.innerHTML = "<div class='container addressOutputData'><p>"+firstData+" "+lastData+"</p><p>"+address1Data+"</p><p>"+address2Data+"</p><p>"+cityData+" ,"+stateData+" "+zipCodeData+"</p><p>"+phoneData+"</p></div>";
		
		//collapse shipping section - open up payment
		//$("#collapseOne").collapse();
		//$("#collapseTwo").collapse();
		$("#collapseOne").collapse();
		//$('#shippingDetails').hide();
		$("#collapseTwo").collapse();

	}
}

addEventListener('storage', function(e){
	var firstName = document.getElementById('firstNameCheckout');
	if (e.oldValue){
		alert('changed from \''+e.oldValue+'\' to \''+e.newValue+'\'');
	}
}, false);
