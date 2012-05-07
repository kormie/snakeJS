var head = '◘';
var body = '■';
var snake;

buildSnake = function(food){
    snake = body;
    for(var i = 0; i <= food; i++){
        snake =+ body;
    }
    return snake;
}
