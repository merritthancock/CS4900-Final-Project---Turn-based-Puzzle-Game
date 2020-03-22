import {Entity} from "./Entity.js";
import { passTurn } from "../TurnManager.js";
import { currentLevel } from "../LevelManager.js";
import {aStar} from "../Pathing.js";

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
        this.movementRange = 4;
        //Set default jump height to 1
        this.jumpHeight = 1;
        //Set remaining AP initialized to starting AP
        this.remainingAP = this.ap;
        this.canActivateTrigger = true;
    }

    //Function absorbs enemy, increases mass
    absorb(enemy){
        this.mass += enemy.mass;
    };

    movePlayer(destination){
        //Get route from A*
        let route = aStar(this.position[0], this.position[2], 
            destination[0], destination[2], currentLevel.board, currentLevel.player);
        //Move along route given
        for(let i = 1; i < route.length; i++) {
            currentLevel.board.tileArray[this.position[0]][this.position[2]].occupant = null;
            this.moveEntity(route[i].tile.position[0], route[i].tile.height + 1, route[i].tile.position[2]);
            currentLevel.board.tileArray[this.position[0]][this.position[2]].occupant = this;
        }
        passTurn(currentLevel.enemies);
    };

    //Function follows cursor
    followCursor(board){
        board.tileArray[board.player.position[0]][board.player.position[2]].occupant = null;
        board.player.position = [...board.cursor.position]
        board.player.mesh.position.set(board.cursor.position[0], board.cursor.position[1], board.cursor.position[2]);
        board.tileArray[board.player.position[0]][board.player.position[2]].occupant = board.player;
    };
    
    //player takes damage and loses mass
    takeDamage(damage){
        this.mass -= damage;
        console.log("Damage Taken: ", damage, "Player Health: ", this.mass);
        if(this.mass <= 0){
            console.log("PLAYER IS DEAD");
            //death animation
            //death screen
            console.log("You died!");
        }
    }
}

export {Player};