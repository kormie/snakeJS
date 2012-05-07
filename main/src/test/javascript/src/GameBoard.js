gameBoard = function(){
    var div = document.body.appendChild(document.createElement("div"));
    var table = document.createElement("table");
    table.setAttribute("id", "gameBoard");
    var tblBody = document.createElement("tbody");
    for(var row = 0; row < 20; row++){
        var tr = document.createElement('tr');
        for(var col = 0; col < 20; col++){
            var td = document.createElement('td');
//            var value = document.createTextNode(col + " " + row);
//            td.appendChild(value);
            tr.appendChild(td);
            tblBody.appendChild(tr);
            table.appendChild(tblBody);
            div.appendChild(table);
        };
    };
};

window.onload = gameBoard;