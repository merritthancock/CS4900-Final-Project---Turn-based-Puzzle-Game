class Board {
    constructor(tiles, player, enemies){
        this.tiles = tiles;
        this.player = player;
        this.enemies = enemies;
    }


}

function createBoard(levelNum){
    switch(levelNum){

        case 100:
            createTestLevel1();
        case 1:
            createLevel1();
            break;
        case 2:
            createLevel2();

    }
}