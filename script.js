const mines = [];
const mineCount = 10;
const restartBtn = document.getElementById('resetButton');

let score = 0;
const clicked = [];
for (let i = 1; i < 82; i++) {
    clicked[i] = false;
}

window.onload = function () {
    startGame();
}
function startGame() {
    document.getElementById("gameScore").innerText = "Score : " + 0;
    document.getElementById("mines-count").innerText = mineCount;
    setMines();
    gameLogic();
}
function setMines() {
    for (let i = 0; i < mineCount; i++) {
        let random = randomElement(1, 81);
        while (mines.includes(random)) {
            random = randomElement(1, 81);
        }
        mines.push(random);
    }
}
function gameLogic() {
    let click = document.getElementsByClassName("container");
    for (let i = 0; i < 81; i++) {
        if (score < 71) {
            click[i].addEventListener('click', clickedElement, false);
        }
    }

}
function clickedElement() {
    // alert(this.id);
    let id = this.id;
    let IdInNum = parseInt(this.id);
    if (!mines.includes(IdInNum)) {
        if (!clicked[IdInNum]) {
            document.getElementById(id).style.backgroundColor = "green"
            clicked[IdInNum] = true;
            score++;
            document.getElementById("gameScore").innerText = "Score : " + score;
            if (score == 71) {
                document.getElementById('resultDisplay').innerText = "win";
            }
        }
    }
    if (mines.includes(IdInNum)) {
        for (let i = 0; i < mineCount; i++) {
            let mine = mines[i].toString();
            document.getElementById(mine).style.backgroundColor = "red";
            document.getElementById(mine).style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";           
        }
        document.getElementById('resultDisplay').innerText = "game over";
        for(let i=1; i<82; i++){
            let index=i.toString();
            document.getElementById(index).style.pointerEvents="none";
            document.getElementById(index).style.cursor="default";
        }
    }

}

function randomElement(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function setScore() {
    document.getElementById('abc').innerText = 1;
}


restartBtn.addEventListener('click', () => {
    for (let i = 1; i < 82; i++) {
        clicked[i] = false;
    }
    score = 0;
    document.getElementById("gameScore").innerText = "Score : " + 0;
    for (let i = 1; i < 82; i++) {
        let index = i.toString();
        document.getElementById(index).style.backgroundColor = "lightgray"
        document.getElementById(index).style.backgroundImage = "none";
        document.getElementById(index).style.pointerEvents="auto";
        document.getElementById(index).style.cursor="pointer";
    }
    document.getElementById('resultDisplay').innerText = "";
    
})

