const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("playText");
const restartBtn= document.getElementById("restart");
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = "";
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;

        box.addEventListener("click", boxClicked);
    });
};
const boxClicked = (e) => {
    const id = e.target.id;
    if (spaces[id] == null) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (currentPlayerHasWon()) {
            playText.innerText = `${currentPlayer} has won!!`;
        }
        if(drawGame()){
            playText.innerText = `It's a draw!!`;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
};
const currentPlayerHasWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins on the left`);
            return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} wins on the diagonal`);
            return true;
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins on the left`);
            return true;
        }
        
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins on the left`);
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins on the left`);
            return true;
        }
        
    }
};
const drawGame= () => {
    let flag=true;
    for(let i=0; i<spaces.length; i++){
        if(spaces[i]===null){
            flag=false;
            break;
        }
    }
    return flag;
};

restartBtn.addEventListener("click", () => {
    spaces.forEach((space, index) => {
      spaces[index] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    playText.innerHTML = `Let's Play Again!!`;
  
    currentPlayer = O_TEXT;
  });


// restart();
drawBoard();