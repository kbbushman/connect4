
// wait for the document to load before doing anything!
window.onload = function() {

	console.log('Game loaded... ready!');

	//Set global variable for current player... get rid of this later.
	 // var currentPlayer = 0;
	// console.log(currentPlayer);

	//NewGame Object
	function Connect4Game(gameOptions) {
		this.winner = gameOptions.winner;
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
		return Connect4Game.prototype.listenForClick();
	};

	Connect4Game.prototype.listenForClick = function() {
		$('#gameboard').children().click(this, function() {
			if (Connect4Player.prototype.currentPlayer % 2 == 0){
				changeGridRed(this);
			} else {
				changeGridBlack(this);
			}
		})
	};

	var gameOptions = {winner: null};
	var newGame = new Connect4Game(gameOptions);
	newGame.buildGameBoard();

	//Player constructor starts with PlayerOptions, updated by Connect4Player click method
	function Connect4Player(playerOptions) {
		this.player = playerOptions.player;
		this.currentPlayer = playerOptions.player
	};

	var playerOptions = {player: [0,1], currentPlayer: 0};
	var player = new Connect4Player(playerOptions);


	// Connect4Player.prototype.listenForClick = function() {
	// 	$('#gameboard').children().click(this, function() {
	// 		if (Connect4Player.prototype.currentPlayer % 2 == 0){
	// 			changeGridRed(this);
	// 		} else {
	// 			changeGridBlack(this);
	// 		}
	// 	})
	// };



	// function listenForClick() {
	// 	$('#gameboard').children().click(this, function() {
	// 		if (Connect4Player.prototype.currentPlayer % 2 == 0){
	// 			changeGridRed(this);
	// 		} else {
	// 			changeGridBlack(this);
	// 		}
	// 	})
	// };


	//Add point attribute to cell. Change background to red. Increment and console log currentPlayer.
	//Maybe a run the for loop to update the cells array, or create a new array for checking win status.
	//Maybe an if statement to clean up currentPlayer update and remove repetative code.
	function changeGridRed(element) {
		var clickedCell = element;
		$(clickedCell).attr('point', '1').html("1");
		$(clickedCell).attr('style', 'background: red');
		Connect4Player.prototype.currentPlayer = 1;
		console.log(Connect4Player.prototype.currentPlayer);
	};

	//Add point attribute to cell. Change background to red. Increment and console log currentPlayer.
	function changeGridBlack(element) {
		var clickedCell = element;
		$(clickedCell).attr('point', '2').html("2");
		$(clickedCell).attr('style', 'background: black');
		Connect4Player.prototype.currentPlayer = 0;
		console.log(Connect4Player.prototype.currentPlayer);
	};






	
}; //end document onload
