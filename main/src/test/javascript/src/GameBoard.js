gameBoard = function(){
    var div = document.body.appendChild(document.createElement("div"));
    var table = document.createElement("table");
    table.setAttribute("id", "gameBoard");
    for(var row = 0; row < 20; row++){
        var tr = document.createElement('tr');
        for(var col = 0; col < 20; col++){
            var td = document.createElement('td');
            tr.appendChild(td);
            table.appendChild(tr);
            div.appendChild(table);
        };
    };
    return div;
};
