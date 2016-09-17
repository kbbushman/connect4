
// wait for the document to load before doing anything!
window.onload = function() {

	console.log('Document loaded... ready!');


	//Array for bulding a 7x6 grid of cells
	var cells = [
		["","","","","","",""],
		["","","","","","",""],
		["","","","","","",""],
		["","","","","","",""],
		["","","","","","",""],
		["","","","","","",""]
	];

	//Use cells array to create a grid of empty cells, then run listen function
	function buildGameBoard() {
		for(var i = 0; i < cells.length; i++){
	    	for(var j = 0; j < cells[i].length; j++){
	    		$("#gameboard").append('<td class="cell"></td>');
	    	}
		}
		return listen();
	};

	buildGameBoard();


		function listen() {
			$('#gameboard').children().click(this, function() {
				console.log(this);
				changeColor(this);
			});
		}

	// //Add a listener to the Gameboard div. Console log the child. Pass child to changeColor function.
	// function listen(){
	// 	$('#gameboard').on('click', this, function() {
	// 		console.log(this); //trying to get this to return the child div of #gameboard
	// 		changeColor(this);//then run the changeColor function.
	// 	});
		
	// }

	//Add inline background style to change color. Console log my failure...
	function changeColor(element) {
		var clickedCell = element;
		$(clickedCell).attr('style', 'background: black');
		console.log(this)
	}

	
}; //end document onload
