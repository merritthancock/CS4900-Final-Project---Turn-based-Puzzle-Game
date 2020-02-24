import {Entity} from "./Entity.js";

//Players inherit from Entity
class Player extends Entity {
    constructor(position, model, texture, id, startingMass){
        //Set up entity object part
        super(position, model, texture, id);

        //Set starting mass and size values
        this.mass = startingMass;
        //Set abilities to an empty set for starters
        this.abilities = {};
        //Set default movement range to 2
        this.movementRange = 2;
    }

    //Function absorbs enemy, increases mass
    absorb(enemy){
        this.mass += enemy.mass;
    };

    //Function moves player
    /*movePlayer(direction, board){
        switch(direction){
            case "forward":
                this.position[2] += 1
                break;
            case "backward":
                this.position[2] -= 1;
                break;
            case "left":
                this.position[0] += 1;
                break;
            case "right":
                this.position[0] -= 1;
                break;
        }   
        player.position.set(player.position[0], player.position[1], player.position[2]);//removed .mesh
    };*/

    //Function follows cursor
    followCursor(board){
        board.player.position[0] = board.cursor.position[0];
        board.player.position[1] = board.cursor.position[1]; 
        board.player.position[2] = board.cursor.position[2];
        board.player.mesh.position.set(board.cursor.position[0], board.cursor.position[1], board.cursor.position[2]);

        //console.log(board.player.position);
    };
}

export {Player};