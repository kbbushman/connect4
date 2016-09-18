
// wait for the document to load before doing anything! Couldn't get $(document) jQuery to work.
window.onload = function() {

	console.log('Game loaded... ready!');

	//Connetct4Game constructor
	function Connect4Game(gameOptions) {
		this.winner = gameOptions.winner;
		gameBoardCells = [
							[0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0],
							[0,0,0,0,0,0,0]
						];
	};

	//Connect4Game method builds dynamic gameboard cells in #gameboard element, returns Connect4Player listenForClick method.
	Connect4Game.prototype.buildGameBoard = function() {
		for(var i = 0; i < gameBoardCells.length; i++){
	    	for(var j = 0; j < gameBoardCells[i].length; j++){
	    		$("#gameboard").append('<td class="cell" point="0"></td>');
	    	}
		}
		console.log(gameBoardCells)
		return Connect4Game.prototype.listenForClick();
	};

	//Connect4Game method adds click event listener to #gameboard element, initializes ChangeGrid method
	Connect4Game.prototype.listenForClick = function() {
		$('#gameboard').children().click(this, function() {
				Connect4Player.prototype.dropPlayerPiece(this);
		})
	};

	//Initialize buildGameBoard method for Connect4Game
	var gameOptions = {winner: null};
	var newGame = new Connect4Game(gameOptions);
	newGame.buildGameBoard();

	//Player constructor starts with PlayerOptions, updated by Connect4Player dropPlayerPiece method
	function Connect4Player(playerOptions) {
		this.player = playerOptions.player;
		this.currentPlayer = playerOptions.player
	};

	var playerOptions = {player: [0,1], currentPlayer: 0};
	var player = new Connect4Player(playerOptions);

	//Connect4Player method assigns player point and "drops player piece"
	Connect4Player.prototype.dropPlayerPiece = function(thisElement) {
		if (Connect4Player.prototype.currentPlayer % 2 == 0) {
			var clickedCell = thisElement;
			$(clickedCell).attr('point', '2').html('2');
			$(clickedCell).attr('style', 'background: black');
			Connect4Player.prototype.currentPlayer = 1;
			gameBoardCells.push(Connect4Player.prototype.currentPlayer);
			console.log(Connect4Player.prototype.currentPlayer);
		} else {
			var clickedCell = thisElement;
			$(clickedCell).attr('point', '1').html('1');
			$(clickedCell).attr('style', 'background: red');
			Connect4Player.prototype.currentPlayer = 0;
//		    gameBoardCells.push(Connect4Player.prototype.currentPlayer);		
			console.log(Connect4Player.prototype.currentPlayer);
		}
	};
	
}; //end window onload
