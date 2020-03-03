import {Entity} from "./Entity.js";
//import {FollowPathBehavior} from "../libraries/yuka-master/src/yuka.js";
import {Path} from "../../libraries/yuka-master/src/yuka.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Enemy extends Entity {
    constructor(position, model, texture, id, startingMass, startPriority){
        //Call entity constructor
        super(position, model, texture, id);

        //Set starting mass
        this.mass = startingMass;
        //Set abilities to an empty set for starters
        this.abilities = {};
        //Set default movement range to 1
        this.movementRange = 1;
        //Set jump height to 1
        this.jumpHeight = 1;
        //Set the priority of the enemy
        this.priority = startPriority;
        //Give the enemy a path to patrol (loop must be set to true if path is cyclical)
        this.path = new Path();
        this.path.add(position);
        console.log(this.path);

    }

    moveEnemy(direction){
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
        /*this.position[1] = level.board[this.position[0]][this.position[2]].height;
        this.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);*/
    }

    useAbility(){
        
    }

    moveEPath(move){//moves the enemy along a predetermined patrol path
        switch(move){
            case "mKey":
                this.path.advance();
                var pos = this.path.current();
                this.moveEntity(pos[0],pos[1],pos[2]);
                console.log(this.path);
                console.log(this.mesh.position);
        }
    }
}
export {Enemy};