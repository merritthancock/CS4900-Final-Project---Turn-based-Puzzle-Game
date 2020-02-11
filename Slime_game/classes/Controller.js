function loadLevel(scene, board) {
    for(var i = 0; i < board.board.length; i++){
        for(var j = 0; j < board.board[0].length; j++){
            if(board.board[i][j].terrain != null){
                scene.add(board.board[i][j].terrain);
            }
        }
    }
}