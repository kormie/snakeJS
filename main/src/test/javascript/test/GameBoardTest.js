describe( "Game Board", function () {
    describe("should create a game board", function(){
        initializeBoard();
        it("which has 20 rows and columns", function(){
            var table = document.getElementById("gameBoard");
            var rows = table.rows.length;
            expect(rows).toEqual(20);
        });
        it("which contains a snake", function(){
            initializeItem()

        });
    });
});