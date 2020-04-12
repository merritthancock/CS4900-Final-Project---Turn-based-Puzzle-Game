import{Board} from"./Board.js";

class Level{
    constructor(resourceTracker, heightMap, terrainMap, enemies, player, cursor){

        //Call a Board constructor using heightMap, terrainMap, enemies, and player
        this.board = new Board(resourceTracker, terrainMap, heightMap, player, enemies, cursor);
        //Set enemies array
        this.enemies = enemies;
        //Set player
        this.player = player;
        //Sets cursor
        this.cursor = cursor;
        
    }
}

export{Level};
