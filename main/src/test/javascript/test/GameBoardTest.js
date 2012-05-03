describe( "Game Board", function () {
    describe("should create a game board", function(){
        it("where the top left square has a value of A0", function(){
            expect(board[0][0]).toEqual("A0");
        });
        it("and the bottom right square has a value of T19", function(){
            expect(board[19][19].toEqual("T19"));
        });
    });
});