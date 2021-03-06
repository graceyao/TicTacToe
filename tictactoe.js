var msgId = "message";
var board = [0,0,0,0,0,0,0,0,0];
var turn = 1;
var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var spaces = ["rowOneColOne", "rowOneColTwo", "rowOneColThree", 
                    "rowTwoColOne", "rowTwoColTwo", "rowTwoColThree",
                    "rowThreeColOne", "rowThreeColTwo", "rowThreeColThree"];
var done = 1;

function tryMove(elem) {
    var move = elem.id;
    var space = elemToMove(move);
    if (done != 1) {
        if (isValidMove(space)) {
            log("");
            board[space] = turn;
            elem = moveToElem(space);
            if (turn == 1) {
                drawX(elem);
            }
            else {
                drawO(elem);
            }
            switchTurns();
        }
        else {
            log("stahp");
        }

        if (isWinner() == 1) {
            log("X wins yayyayayyy") ;
            done = 1;
        }
        else if (isWinner() == 2) {
            log("O wins yayyayayayyayy");
            done = 1;
        }
        else if (isDraw()) {
            log("lulz draw");
            done = 1;
        }
    }
}

function elemToMove(elem) {
    for (var i = 0; i < spaces.length; i++) {
        if (elem == spaces[i]) {
            return i;
        }
    }
}

function moveToElem(move) {
    return spaces[move];
}

function isValidMove(move) {
    if (board[move] == 0) {
        return true;
    }
    return false;
}

function switchTurns() {
    if (turn == 1) {
        turn = 2;
    }
    else {
        turn = 1;
    }
}

function isWinner() {
    for (var i = 0; i < win.length; i++) {
        if (board[win[i][0]] == board[win[i][1]] && 
            board[win[i][1]] == board[win[i][2]]) {
            return board[win[i][0]];
        }
    }
    return -1;
}

function isDraw() {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == 0) {
            return false;
        }
    }
    return true;
}

function drawX(id) {
    var box = document.getElementById(id);
    box.innerHTML = "X";
}

function drawO(id) {
    var box = document.getElementById(id);
    box.innerHTML = "O";
}

function start() {
	clearBoard();
    done = 0;
	log("hello");
}

function log(msg) {
	document.getElementById(msgId).innerHTML = msg;
}

function clearBoard() {
    for (var i = 0; i < board.length; i++) {
        board[i] = 0;
        document.getElementById(spaces[i]).innerHTML = "";
    }
}
