function gameLogic() {

    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    //taking inputs of players' names from user
    let nameOne = prompt("Enter name of first player: ");
    let nameTwo = prompt("Enter name of second player: ");

    let namePTag = document.getElementsByClassName("playerInfo")[0]; // navigating the div

    // creating p tags for player 1 & 2 in the div
    let name1 = document.createElement("p");
    let name2 = document.createElement("p");

    // storing the names in the p tag
    let textNode1 = document.createTextNode("player one is: " + nameOne);
    let textNode2 = document.createTextNode("Player two is: " + nameTwo);

    name1.appendChild(textNode1);
    name2.appendChild(textNode2);

    namePTag.appendChild(name1);
    namePTag.appendChild(name2);

    // Creating symbols
    let symbol1 = "X";
    let symbol2 = "O";

    // Creating p tags to display the symbols
    let symbolOne = document.createElement("p");
    let symbolTwo = document.createElement("p");

    // Displaying the symbols
    let symbolNode1 = document.createTextNode(nameOne + "'s symbol is: " + symbol1);
    let symbolNode2 = document.createTextNode(nameTwo + "'s symbol is: " + symbol2);

    // Storing the symbols in p tags
    symbolOne.appendChild(symbolNode1);
    symbolTwo.appendChild(symbolNode2);

    namePTag.appendChild(symbolOne);
    namePTag.appendChild(symbolTwo);

    for (let i = 0; i < 10; i++) {
        if (gameBoard[i] !== "X" && gameBoard[i] !== "O") {
            let choice1 = prompt(nameOne + " enter the number where you want to place your symbol: ");

            // update the game board array
            if (gameBoard[choice1 - 1] !== "X" && gameBoard[choice1 - 1] !== "O") {
                gameBoard[choice1 - 1] = "X";
                // update the cell in the HTML
                document.getElementById(choice1).innerText = "X";
            }
            else {
                alert("the cell you chose is already filled. Choose another cell");
            }

            // check if player one has won
            if (checkWinner(gameBoard, "X")) {
                alert(nameOne + " has won!");
                break;
            }
            let choice2 = prompt(nameTwo + " enter the number where you want to place your symbol: ");
            if (gameBoard[choice2 - 1] !== "X" && gameBoard[choice2 - 1] !== "O") {
                gameBoard[choice2 - 1] = "O";
                document.getElementById(choice2).innerText = "O";
            }


            // check if player two has won
            if (checkWinner(gameBoard, "O")) {
                alert(nameTwo + " has won!");
                break;
            }
        }
    }

    function checkWinner(board, symbol) {
        // check rows
        if (board[0] === symbol && board[1] === symbol && board[2] === symbol ||
            board[3] === symbol && board[4] === symbol && board[5] === symbol ||
            board[6] === symbol && board[7] === symbol && board[8] === symbol) {
            return true;
        }
        // check columns
        if (board[0] === symbol && board[3] === symbol && board[6] === symbol ||
            board[1] === symbol && board[4] === symbol && board[7] === symbol ||
            board[2] === symbol && board[5] === symbol && board[8] === symbol) {
            return true;
        }
        // check diagonals
        if (board[0] === symbol && board[4] === symbol && board[8] === symbol ||
            board[2] === symbol && board[4] === symbol && board[6] === symbol) {
            return true;
        }
        return false;
    }
}