$(document).ready(function() {

	var specialElementHandlers = {

    '#submit': function (element, renderer) {
        return true;

    	},

    '#anotherIdToBeIgnored': function (element, renderer) {
        return true;

 		}
    };

        var img = new Image();
		 
    	img.src = "/content/dam/we-retail/en/features/tracking.png";
    	doc = new jsPDF();

	$('#submit').click(function () {   

    	doc.fromHTML($('#content').html(), 15, 15, {
        	'width': 170,
            'elementHandlers': specialElementHandlers

    	});

        doc.addImage(img,'JPEG', 15, 40, 180, 160);
        //doc.src = 'assets/sample.png'
        doc.save('sample-file.pdf');

});

  });





