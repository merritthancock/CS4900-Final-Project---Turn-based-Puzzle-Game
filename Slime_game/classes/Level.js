import{Board} from"./Board.js";

class Level{
    constructor(heightMap, terrainMap, enemies, player, startPos){

        //Set 2d heightMap
        this.heightMap = heightMap;
        //Set 2d terrainMap
        this.terrainMap = terrainMap;
        //Set enemies array
        this.enemies = enemies;
        //Set player
        this.player = player;
        //Set startPos
        this.startPos = startPos;
        
    }
}

export{Level};
