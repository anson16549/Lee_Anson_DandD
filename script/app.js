(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
		puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
		gameBoard = document.querySelector('.puzzle-board');

		const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	function changeImageSet() {
	// change all the image elements on the page -> draglbabe image sources
	// and set the drop zone background
	
	// change the image element on the left to match the selected puzzleß

	pieceNames.forEach((piece, index) => puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`); 
	//and set the drop zone background image base on the puzzle//

	gameBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleref}.jpg)`;
	//debugger;
	}



//
// add event handling here

// 
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

// Research call, apply and bind look at MDN
	changeImageSet.call(puzzleButtons[0]);
})();
