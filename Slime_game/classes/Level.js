//heightMap:int Array
//terrainMap:int Array
//Enemies: Enemy Array
//Player: Player
//startPos: Vec1

class Level {
    constructor(heightMap, terrainMap, enemies, player, startPos){
        //Set heightMap
        this.heightMap = heightMap;
        //Set terrainMap
        this.terrainMap = terrainMap;
        //Sets enemies
        this.enemies = enemies;
        //Sets player
        this.player = player;
        //Sets start position
        this.startPos = startPos;
    }   
}

export {Level};