//initializeItem = function(item, board, row, col) {
//    var location = board.rows[row].col[col];
//    location.appendData(item.charAt(0));
//    if(item.length > 1){
//        for(var i = 1; i < item.length; i++){
//            var newLocation = board.rows[row - i].cols[col];
//            newLocation.appendData(item.charAt(i));
//        }
//    }
//
//}

window.onload = gameBoard(20);