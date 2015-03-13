+function ($) {
		
			$('#MyWizard').on('change', function(e, data) {
			  console.log('change');
			  if(data.step===3 && data.direction==='next') {
			    // return e.preventDefault();
			  }
			});
			$('#MyWizard').on('changed', function(e, data) {
			  console.log('changed');
			});
			$('#MyWizard').on('finished', function(e, data) {
			  console.log('finished');
			});
			$('#btnWizardPrev').on('click', function() {
			  $('#MyWizard').wizard('previous');
			});
			$('#btnWizardNext').on('click', function() {
			  $('#MyWizard').wizard('next','foo');
			});
			$('#btnWizardStep').on('click', function() {
			  var item = $('#MyWizard').wizard('selectedItem');
			  console.log(item.step);
			});
			$('#MyWizard').on('stepclick', function(e, data) {
			  console.log('step' + data.step + ' clicked');
			  if(data.step===1) {
			    // return e.preventDefault();
			  }
			});
			
			// optionally navigate back to 2nd step
			$('#btnStep2').on('click', function(e, data) {
			  $('[data-target=#step2]').trigger("click");
			});
}(jQuery);
