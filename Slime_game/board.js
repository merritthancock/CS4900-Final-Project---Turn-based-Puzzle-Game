class Board {
    constructor(tiles, player, enemies){
        this.tiles = tiles;
        this.player = player;
        this.enemies = enemies;
    }


}

function createBoard(levelNum){//modify this to make a Board object once enemies are implemented
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