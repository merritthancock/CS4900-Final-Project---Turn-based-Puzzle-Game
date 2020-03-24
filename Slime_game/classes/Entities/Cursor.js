import {Entity} from "./Entity.js";
import {currentLevel} from "../Controller.js";

//The Cursor is an object that will contain unique methods allowing player interaction
class Cursor extends Entity {
    constructor(position, id){
        //Call entity constructor
        super(position, id);

        //Set url for cursor:
        this.url = "SlimeMain.glb";
    }

    moveCursor(direction){
        switch(direction){
            case "forward":
                this.position[2] += 1;
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

        this.model.position.set(this.position[0], this.position[1], this.position[2]);
    }

    cursorHeight(height){
        this.model.position.set(this.position[0], height + 1, this.position[2]);
    }

    //This method will perform actions based on what the cursor is currently hovering over
    click() {
        let cursorX = this.position[0];
        let cursorY = this.position[2];
        //Check if player is selected
        if(currentLevel.board.selected != null && currentLevel.player.id == currentLevel.board.selected.id){
            let playerX = currentLevel.player.position[0];
            let playerY = currentLevel.player.position[2];
            //if cursor is on player, deselect. Else, try to move player and then deselect.
            if(playerX == cursorX && playerY == cursorY){
                currentLevel.board.select(currentLevel.player);
            }
            else{
                let xDistance = Math.abs(cursorX - playerX);
                let yDistance = Math.abs(cursorY - playerY);
                //if cursor is within movementRange of player, move player and pass turn. Else, deselect.
                if(xDistance + yDistance <= currentLevel.player.movementRange){
                    currentLevel.board.select(currentLevel.player);
                    currentLevel.player.movePlayer(this.position);
                }
                else{
                    currentLevel.board.select(currentLevel.player);
                }
            }
        }
        //if something other than player is selected, deselect
        else if(currentLevel.board.selected != null){
            currentLevel.board.select(currentLevel.board.selected);
        }
        //if nothing is selected, select whatever's currently occupying
        else if(currentLevel.board.tileArray[cursorX][cursorY].occupant != null){
            currentLevel.board.select(currentLevel.board.tileArray[cursorX][cursorY].occupant);
        }
    }
}

export {Cursor};