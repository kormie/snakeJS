var head = '◘';
var body = '■';
var snake;

buildSnake = function(food){
    snake = head + body;
    for(var i = 0; i <= food; i++){
        snake = snake + body;
    }
    console.log(snake);
    return snake;
}

initializeSnake = function(gb, row, col){
    var GB = document.getElementById(gb);
    GB.rows[row].cols[col].appendChild(document.createTextNode(head));
//    buildSnake(2);
//    for(var i = 0; i <= snake.length; i++){
//        var value = document.createTextNode(snake.charAt(i));
//        GB.rows[row - i].cols[col].appendChild(value);
//    }
    return snake;
}