class Entity {
    constructor(position, model, texture, id){
        //Set position of entity
        this.entityPosition = position;
        //Set geometry of entity
        this.entityModel = model;
        //Set material
        this.entityTexture = texture;
        //TODO: Enforce uniqueness of entity ID
        this.entityId = id;
        //Build mesh from provided geometry and material, can add to scene in rest of code
        this.mesh = THREE.Mesh(model, texture);
    }

    //Function moves player to a given position. Only call after validation.
    //TODO: Play animations to move along path rather than jumping to set location.
    moveEntity(x, y, z) {
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }
}

//Players inherit from Entity
class Player extends Entity {
    constructor(position, model, texture, id, startingMass){
        //Set up entity object part
        super(position, model, texture, id);

        //Set starting mass and size values
        this.mass = startingMass;
        //Set abilities to an empty set for starters
        this.abilities = {};
        //Set default movement range to 1
        this.movementRange = 1;
    }

    //Function absobs enemy, increases mass
    absorb(enemy){
        this.mass += enemy.mass;
    };
}

//The Cursor is an object that will contain unique methods allowing player interaction
class Cursor extends Entity {
    constructor(position, model, texture, id){
        //Call entity constructor
        super(position, model, texture, id);
    }

    moveCursor(direction){
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
        //Set height equal to the height of the tile that the cursor was moved over.
        this.position[1] = level.board[this.position[0]][this.position[2]].height;
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