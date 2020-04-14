import{Board} from"./Board.js";

class Level{
    constructor(heightMap, terrainMap, enemies, player, cursor){

        //Call a Board constructor using heightMap, terrainMap, enemies, and player
        this.board = new Board(terrainMap, heightMap, player, enemies, cursor);
        //Set enemies array
        this.enemies = enemies;
        //Set player
        this.player = player;
        //Sets cursor
        this.cursor = cursor;
    }

    //Function to update UI data
    getUIData() {
        let data = {
            cursorTile : this.board.tileArray[cursor.position[0]][cursor.position[2]],
            playerTile : this.board.tileArray[this.player.position[0]][this.player.position[2]],
            selectedTile : this.board.selected
        }

        return data;
    }
}

export{Level};