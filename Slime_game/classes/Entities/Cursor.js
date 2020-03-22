import {Entity} from "./Entity.js";

//The Cursor is an object that will contain unique methods allowing player interaction
class Cursor extends Entity {
    constructor(position, model, texture, id){
        //Call entity constructor
        super(position, model, texture, id);
    }
    moveCursor(cursor, direction){
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

        cursor.mesh.position.set(this.position[0], this.position[1], this.position[2]);
    }
    cursorHeight(cursor, height){
        cursor.mesh.position.set(this.position[0], height + 1, this.position[2]);
    }
}

export {Cursor};