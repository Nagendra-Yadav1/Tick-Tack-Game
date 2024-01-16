var Win_game = document.querySelector(".new-Game")
var main_data = document.querySelector(".game-winner")
var boxes = document.querySelectorAll(".Box")
var reset_button = document.querySelector(".reset-button")
var turnO = true
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    main_data.style.opacity = 0
    Win_game.style.opacity = 0

}
const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = ""
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turnO) {
            box.innerHTML = "0"
            turnO = false
        }
        else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true;
        checkwinner()
    })
})

var checkwinner = () => {
    for (let pattern of winPatterns) {
        var boxes_value1 = boxes[pattern[0]].innerText;
        var boxes_value2 = boxes[pattern[1]].innerText;
        var boxes_value3 = boxes[pattern[2]].innerText;
        if (boxes_value1 != "" && boxes_value2 != "" && boxes_value3 != "") {
            if ((boxes_value1 == boxes_value2) && (boxes_value2 == boxes_value3)) {
                console.log("Yes")
                Winner();
            }
        }

    }
}

var Win_game = document.querySelector(".new-Game")
var main_data = document.querySelector(".game-winner")
var Winner = () => {
    disable()
    main_data.style.opacity = 1
    Win_game.style.opacity = 1

}

Win_game.addEventListener("click", resetGame)
reset_button.addEventListener("click", resetGame)