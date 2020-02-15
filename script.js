let gridSize = 16;

let grid = document.querySelector(".grid");

let resetButton = document.querySelector("#reset");

let rainbowButton = document.getElementById('rainbow');





let createGrid = () => {

    

    totalNumber = gridSize * gridSize;
    grid.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    for (let i = 0 ; i<totalNumber; i++){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.addEventListener('mouseover',blackFill);
        grid.appendChild(newSquare);

    }
}

function rainbowFill(e){
     e.target.style.backgroundColor=getRandomRGB();
}

function blackFill(e){
    e.target.style.backgroundColor = 'black';
}


function getRandomRGB(){
    return (
      "rgb(" +
      parseInt(Math.floor(Math.random() * 256)) +
      "," +
      parseInt(Math.floor(Math.random() * 256)) +
      "," +
      parseInt(Math.floor(Math.random() * 256)) +
      ")"
    );
}

 

let fillRandomColor = () =>{
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover',rainbowFill));
}

let backToBlack = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover',blackFill));
 }

let reset = () => {
    
    let newSize = prompt("How many squares? (for 16*16 type 16)");
    gridSize = newSize;
    while(grid.firstChild){
        grid.firstChild.remove();
    }
    
    createGrid();
}



resetButton.addEventListener('click',reset);


rainbowButton.addEventListener('click',fillRandomColor);






createGrid();






