var boxes = document.querySelectorAll(".box")

var player = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const checkDraw = () => {
    // Check if all boxes are filled
    for (let box of boxes) {
        if (box.innerText === "") {
            // If any box is empty, the game is not drawn yet
            return false;
        }
    }
    // If all boxes are filled and there's no winner, it's a draw
    return true;
}


const resetGame = () => {
    enableBoxes();
    player = true;
    document.querySelector("#msg").innerText = "";
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

document.getElementById('reset').addEventListener("click", resetGame);
document.getElementById('newGame').addEventListener("click", resetGame);

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (player) {
            box.innerHTML = "O"
            player = false;
        }
        else {
            box.innerHTML = "X"
            player = true;
        }
        box.disabled = true;
        if(checkDraw()){
            document.querySelector("#msg").innerHTML = "The game is draw. Press 'New Game' to play more"
        }
        checkWinner();
        
    })
})

const showWinner = (winner) => {
        document.querySelector("#msg").innerHTML = `Congratulaltions, The Winner is ${winner}`
        boxes.forEach(hello => {
            hello.disabled = true;
        });
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val == pos2Val && pos2Val == pos3Val && pos3Val == pos1Val && pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
        
    }

}