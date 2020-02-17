//The Cursor is an object that will contain unique methods allowing player interaction
class Cursor extends Entity {
    constructor(position, model, texture, id){
        //Call entity constructor
        super(position, model, texture, id);
    }
    moveCursor(cursor, direction){
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

        
        cursor.mesh.position.set(this.position[0], this.position[1], this.position[2]);
        //Set height equal to the height of the tile that the cursor was moved over.
        //this.position[1] = level.board[this.position[0]][this.position[2]].height;
    }
    cursorHeight(height){
        this.position[1] = height;
    }
    /* deprecated method (for reference)
        function cursorMove(direction){
            //Check if movement of the cursor is locked
            if(movementUnlocked){
                //If movement is unlocked, lock the movement so that the cursor is not useable while movement takes place
                movementUnlocked = false;
                
                switch(direction){
                    case "forward":
                        cursor_currentPos[2] += 1
                        break;
                    case "backward":
                        cursor_currentPos[2] -= 1;
                        break;
                    case "left":
                        cursor_currentPos[0] += 1;
                        break;
                    case "right":
                        cursor_currentPos[0] -= 1;
                        break;
                }
                cursor_currentPos[1] = cursor_startPos[1] + heightMap[cursor_currentPos[0]][cursor_currentPos[2]];
                cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
            }
        }
        */
}