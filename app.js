
// wait for the document to load before doing anything!
window.onload = function() {

	console.log('Game loaded... ready!');

	//Set global variables for now. Need to create constructor for player and cells, or for buildGameBoard
	 var currentPlayer = 0;
	// console.log(currentPlayer);

	//NewGame Object
	function Connect4Game(options) {
		this.player = options.player;
		this.currentPlayer = options.currentPlayer;
		this.winner = options.winner;
		gameBoardCells = [
							["","","","","","",""],
							["","","","","","",""],
							["","","","","","",""],
							["","","","","","",""],
							["","","","","","",""],
							["","","","","","",""]
						];
	};


	//Connect4Game method builds dynamic gameboard cells
	Connect4Game.prototype.buildGameBoard = function() {
		for(var i = 0; i < gameBoardCells.length; i++){
	    	for(var j = 0; j < gameBoardCells[i].length; j++){
	    		$("#gameboard").append('<td class="cell" point="0"></td>');
	    	}
		}
		return listenForClick();
	};


	var options = {player: [0,1], currentPlayer: 0, winner: null};
	var newGame = new Connect4Game(options);
	newGame.buildGameBoard();


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
		currentPlayer = 1;
		console.log(currentPlayer);
	};

	//Add point attribute to cell. Change background to red. Increment and console log currentPlayer.
	function changeGridBlack(element) {
		var clickedCell = element;
		$(clickedCell).attr('point', '2').html("2");
		$(clickedCell).attr('style', 'background: black');
		currentPlayer = 0;
		console.log(currentPlayer);
	};


	// //Use cells array to create a grid of empty cells, then run listen function
	// function buildGameBoard() {
	// 	for(var i = 0; i < gameBoardCells.length; i++){
	//     	for(var j = 0; j < gameBoardCells[i].length; j++){
	//     		$("#gameboard").append('<td class="cell" point="0"></td>');
	//     	}
	// 	}
	// 	return listenForClick();
	// };

	// buildGameBoard();





	
}; //end document onload
