import {Entity} from "./Entity.js";
import {currentLevel} from "../Global.js";
import { Player } from "./Player.js";
import { passTurn } from "../TurnManager.js";

//The Cursor is an object that will contain unique methods allowing player interaction
class Cursor extends Entity {
    constructor(position, id){
        //Call entity constructor
        super(position, id);

        //Set url for cursor:
        this.url = "CursorOption2.glb";

        //Set up functionality for what to do when cursor is "clicked"
        //neutralState is a function that is carried out when nothing is selected
        this.neutralState = function (x, y, tile) {
            //If tile holds nothing, just return
            if(tile.occupant == null) {
                return;
            }
            //If tile does hold an object, select that object and check what it is
            else {
                currentLevel.board.select(tile);
                //If occupant is the player, change active function to playerSelState
                if(tile.occupant.name == "player") {
                    this.activeState = this.playerSelState;
                }
                //If occupant is anything else (can't be null as there's already a check for that earlier)
                //change active function to enemySelState
                else {
                    this.activeState = this.enemySelState;
                }
            }
        }

        //playerSelState is a function that is carried out when the player is the currently selected entity
        /*this.playerSelState = function (x, y, tile) {
            //If tile is player, deselect and switch back to neutral state
            if(tile.occupant != null && tile.occupant.name == "player") {
                currentLevel.board.deselect();
                this.activeState = this.neutralState;
                return;
            }
            //If tile is within range of player's position (or AP, whichever is smaller) move to designated location
            let playerX = currentLevel.player.position[0];
            let playerY = currentLevel.player.position[2];
            let xDistance = Math.abs(x - playerX);
            let yDistance = Math.abs(y - playerY);
            if(xDistance + yDistance <= currentLevel.player.remainingAP) {
                //absorption of enemy (within ap range, enemy occupies a space, enemy has <= mass than player)
                if(xDistance + yDistance <= currentLevel.player.remainingAP &&
                    currentLevel.board.tileArray[x][y].occupant != null &&
                    currentLevel.board.tileArray[x][y].occupant.mass <= currentLevel.player.mass && 
                    currentLevel.board.tileArray[x][y].occupant.absorbable == true) {

                    console.log("ABSORB");
                    //play absorb animation
                    let index = currentLevel.enemies.indexOf(currentLevel.board.tileArray[x][y].occupant);
                    //adds mass to player
                    currentLevel.player.absorb(currentLevel.board.tileArray[x][y].occupant);
                    currentLevel.board.tileArray[x][y].occupant.model.visible = false;
                    currentLevel.enemies.splice(index,1);
                    currentLevel.board.tileArray[x][y].occupant = null;
                }
                currentLevel.player.movePlayer(this.position);
                this.activeState = this.neutralState;
                currentLevel.board.deselect();
                //passTurn(currentLevel);
            }
            //Otherwise, again, deselect and switch back to neutral state
            if(tile.occupant != null && tile.occupant.name == "player") {
                currentLevel.board.deselect();
                this.activeState = this.neutralState;
                return;
            }
        }*/
        this.playerSelState = function(x, y, tile) {
            //If tile is not accessible by player, deselect
            if(!tile.highlighted) {
                currentLevel.board.deselect();
                this.activeState = this.neutralState;
                return;
            }

            //If tile is accessible, move player. (player will absorb enemy through moveplayer)
            currentLevel.player.movePlayer(tile);

            currentLevel.board.deselect();
        }

        //enemySelState is a function that is carried out when any enemy is the currently selected entity
        this.enemySelState = function (x, y, tile) {
            //Deselect and switch back to neutral state
            currentLevel.board.deselect();
            this.activeState = this.neutralState;
            return;
        }
        //Call activeState whenever clicked, starts in neutralState
        this.activeState = this.neutralState;
    }

    moveCursor(direction){
        let z = this.position[2];
        let x = this.position[0];
        
        switch(direction){
            case "forward":
                if(currentLevel.board.tileCheck(x, z + 1)) {
                    this.position[2] += 1;
                }
                break;
            case "backward":
                if(currentLevel.board.tileCheck(x, z - 1)) {
                    this.position[2] -= 1;
                }
                break;
            case "left":
                if(currentLevel.board.tileCheck(x + 1, z)) {
                    this.position[0] += 1;
                }
                break;
            case "right":
                if(currentLevel.board.tileCheck(x - 1, z)) {
                    this.position[0] -= 1;
                }
                break;
        }

        this.model.position.set(this.position[0], this.position[1], this.position[2]);
        console.log(this.position);
    }

    cursorHeight(height){
        this.model.position.set(this.position[0], height + 1, this.position[2]);
    }

    //This method will perform actions based on what the cursor is currently hovering over
    click() {
        //Cursor position on the board is ubiquitous for almost everything associated with its function,
        //so get the tile it's hovering over.
        let cursorX = this.position[0];
        let cursorY = this.position[2];
        let tile = currentLevel.board.tileArray[cursorX][cursorY];
        this.activeState(cursorX, cursorY, tile);
    }

    /*
    //This method will be BANISHED TO THE PITS OF HELL FOR ITS CRIMES AGAINST SOFTWARE ENGINEERS THE WORLD OVER.
    click() {
        let cursorX = this.position[0];
        let cursorY = this.position[2];
        //Check if player is selected
        if(currentLevel.board.selected != null && currentLevel.player.name == currentLevel.board.selected.name){
            let playerX = currentLevel.player.position[0];
            let playerY = currentLevel.player.position[2];
            //if cursor is on player, deselect. Else, try to move player and then deselect.
            if(playerX == cursorX && playerY == cursorY){
                currentLevel.board.select(currentLevel.player);
            }
            else{
                let xDistance = Math.abs(cursorX - playerX);
                let yDistance = Math.abs(cursorY - playerY);
                //absorption of enemy (within ap range, enemy occupies a space, enemy has <= mass than player)
                if(xDistance + yDistance <= Math.min(currentLevel.player.remainingMovement, currentLevel.player.remainingAP) && 
                    currentLevel.board.tileArray[cursorX][cursorY].occupant != currentLevel.player &&
                    currentLevel.board.tileArray[cursorX][cursorY].occupant != null &&
                    currentLevel.board.tileArray[cursorX][cursorY].occupant.mass <= currentLevel.player.mass && 
                    currentLevel.board.tileArray[cursorX][cursorY].occupant.absorbable == true){

                    console.log("ABSORB");
                    //play absorb animation
                    let index = currentLevel.enemies.indexOf(currentLevel.board.tileArray[cursorX][cursorY].occupant);
                    //adds mass to player
                    currentLevel.player.absorb(currentLevel.board.tileArray[cursorX][cursorY].occupant);
                    currentLevel.board.tileArray[cursorX][cursorY].occupant.model.visible = false;
                    currentLevel.enemies.splice(index,1);
                    currentLevel.board.tileArray[cursorX][cursorY].occupant = null;
                    currentLevel.player.movePlayer(this.position);
                    currentLevel.board.select(currentLevel.player);
                }
                //if cursor is within remainingMovement or remainingAP of player, move player and pass turn. Else, deselect.
                else if(xDistance + yDistance <= Math.min(currentLevel.player.remainingMovement, currentLevel.player.remainingAP)) {
                    currentLevel.board.select(currentLevel.player);
                    currentLevel.player.movePlayer(this.position);
                }
               /* else{
                    //currentLevel.board.select(currentLevel.player);
                    currentLevel.board.select(currentLevel.board.tileArray[cursorX][cursorY].occupant);
                }//
            }
        }
        //if something other than player is selected, deselect
        else if(currentLevel.board.selected != null){
            currentLevel.board.select(currentLevel.board.selected);
            
        }
        //if nothing is selected, select whatever's currently occupying
        else {
            currentLevel.board.select(currentLevel.board.tileArray[cursorX][cursorY].occupant);
        }
        //else if(currentLevel.board.tileArray[cursorX][cursorY].occupant != null){
        //    currentLevel.board.select(currentLevel.board.tileArray[cursorX][cursorY].occupant);
        //}
    }
    */
}

export {Cursor};