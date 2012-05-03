assignBoardIDs = function(boardSize){
    var board = document.getElementById("gameBoard");
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    board.style.border = "1px solid black";
    for(var row = 0; row < 5; row++){
        board.appendChild(tr);
        for(var col = 0; col < 5; col++){
            board.rows[0].appendChild(td);
        };
    };
};