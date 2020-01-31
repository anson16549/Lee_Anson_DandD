(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
		puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone'),
		gameBoard = document.querySelector('.puzzle-board');

		const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	function changeImageSet() {
	// change all the image elements on the page -> draglbabe image sources
	// and set the drop zone background
	
	// change the image element on the left to match the selected puzzleß

	pieceNames.forEach((piece, index) => {
		puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
		puzzlePieces [index].id = `${piece + this.dataset.puzzleref}`; 
	});
	//and set the drop zone background image base on the puzzle//

	gameBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleref}.jpg)`;
	//debugger;
	}
	function allowDrag(event) {
		console.log('started draggin an image');

		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over a drop zone');
	}

	function allowDrop(event) {
		//event.preventDefult();
		console.log('dragged on a drop zone');
	}
	function allowDrop(event) {
		console.log('dragged on a drop zone');

		let currentImage = event.dataTransfer.getData("text/plain")

		event.target.appendChild(document.querySelector(`#${currentImage}`))
}
//
// add event handling herepuzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
// 
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
	 zone.addEventListener('dragover', allowDragOver);
	 zone.addEventListener('drop', allowDrop);
});
// Research call, apply and bind look at MDN
	changeImageSet.call(puzzleButtons[0]);
})();
