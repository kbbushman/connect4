
// wait for the document to load before doing anything!
window.onload = function() {

	console.log('Game loaded... ready!');

	//Set global variables
	var currentPlayer = 0;

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
	    		$("#gameboard").append('<td class="cell" point="0"></td>');
	    	}
		}
		return listenForClick();
	};

	buildGameBoard();


	function listenForClick() {
		$('#gameboard').children().click(this, function() {
			if (currentPlayer % 2 == 0){
				changeGridRed(this);
			} else {
				changeGridBlack(this);
			}
		})
	};

	//Add point attribute to cell. Change background to red. Increment and console log currentPlayer.
	//Maybe a run the for loop to update the cells array, or create a new array for checking win status.
	//Maybe an if statement to clean up currentPlayer update and remove repetative code.
	function changeGridRed(element) {
		var clickedCell = element;
		$(clickedCell).attr('point', '1').html("1");
		$(clickedCell).attr('style', 'background: red');
		currentPlayer = currentPlayer + 1;
		console.log(currentPlayer);
		console.log(cells);
	};

	//Add point attribute to cell. Change background to red. Increment and console log currentPlayer.
	function changeGridBlack(element) {
		var clickedCell = element;
		$(clickedCell).attr('point', '2');
		$(clickedCell).attr('style', 'background: black');
		currentPlayer = currentPlayer + 1;
		console.log(currentPlayer);
	};


	
}; //end document onload
