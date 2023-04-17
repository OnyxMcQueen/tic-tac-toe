const squares = document.querySelectorAll(".square");
const currentPlayerDisplay = document.querySelector(".current_player");
const gameOverBanner = document.querySelector(".game_over_banner");
const gameOverMessage = document.querySelector(".game_over_message");
const newGameButton = document.querySelector(".new_game");

const player1 = "X";
const player2 = "O";

let currentPlayer = player1;
let game = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// Loop through each square element
squares.forEach((square, index) => {
    // Give each square a click action
    square.addEventListener("click", (event) => {
        if(event.target.textContent === ""){
            event.target.textContent = currentPlayer;
            game[index] = currentPlayer;
        }

        // Check if there is a winner
        const winner = winningCombinations.some((combination) => {
            return combination.every((index) => {
                return game[index] === currentPlayer;
            })
        })

        // If there is a winner
        if(winner){
            gameOverMessage.textContent = `Congratulations Player ${currentPlayer}! You're the winner!`
            gameOverBanner.classList.remove("hidden");
            squares.forEach((square) => square.setAttribute("disabled", true));
            return;
        }

        // Check is there is a tie/draw

        const isDraw = [...squares].every((square) => {
            return square.textContent !== ""
        })

        // If there is a tie/draw

        if(isDraw){
            gameOverMessage.textContent = `It's a draw!`
            gameOverBanner.classList.remove("hidden");
            squares.forEach((square) => square.setAttribute("disabled", true));
            return;
        }


        // Switch between player after every turn
        if(currentPlayer === player1){
            currentPlayer = player2;
        }
        else{
            currentPlayer = player1;
        }

        // Change current player icon

        currentPlayerDisplay.textContent = currentPlayer;
    })
})

newGameButton.addEventListener("click", () => {
    // Reset game state
    game = ["", "", "", "", "", "", "", "", ""];

    //Reset the current player
    currentPlayer = player1;
    //Reset current player display
    currentPlayerDisplay.textContent = currentPlayer;
    // Reset all squares

    squares.forEach((square) => {
        square.textContent = "";
        square.removeAttribute("disabled");
    })

    // Hide game over banner
    gameOverBanner.classList.add("hidden");
})