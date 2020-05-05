import {Entity} from "./Entity.js";
import {currentLevel} from "../Global.js";
import { Player } from "./Player.js";
import { passTurn } from "../TurnManager.js";
import { playCursor, playCursorSelect } from "../Sounds.js";

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
                //play select animation
                let selectAnimation = THREE.AnimationClip.findByName( currentLevel.cursor.animations, 'select' );
                let selectAction = currentLevel.cursor.mixer.clipAction( selectAnimation );
                selectAction.setLoop(THREE.LoopOnce);
                currentLevel.cursor.mixer.stopAllAction();
                selectAction.play();
                currentLevel.cursor.mixer.addEventListener( 'finished', function callBack( e ) { 
                    let idle = THREE.AnimationClip.findByName( currentLevel.cursor.animations, 'idle' );
                    let idleAction = currentLevel.cursor.mixer.clipAction( idle );
                    currentLevel.cursor.mixer.stopAllAction();
                    idleAction.play();
                    currentLevel.cursor.mixer.removeEventListener(callBack)
                 });
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
        playCursor();//plays cursor sound
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
        playCursorSelect();
    }
}

export {Cursor};