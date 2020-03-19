import {currentLevel} from "../LevelManager.js";
import {Entity} from "./Entity.js";
//import {FollowPathBehavior} from "../libraries/yuka-master/src/yuka.js";
import {Path, PursuitBehavior} from "../../libraries/yuka-master/src/yuka.js";
import {aStar, checkNeighbor} from "../Pathing.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Enemy extends Entity {
    constructor(position, model, texture, id, startingMass, startPriority, visionRange){
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
        //Set the enemy's range of vision for seeing the player
        this.visionRange = visionRange;
        //the damage the enemy deals on an attack
        this.attackPower = 0.5;
        this.attackRange = 1;

        //Give the enemy a path to patrol (loop must be set to true if path is cyclical)
        this.path = new Path();
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
    }

    useAbility(){
        
    }

    //Checks if the player is within sight range
    seesPlayer() {
        let xDistance = Math.abs(currentLevel.player.position[0] - this.position[0]);
        let yDistance = Math.abs(currentLevel.player.position[2] - this.position[2]);
        if(xDistance + yDistance <= this.visionRange) {
            return true;
        }
        else {
            return false;
        }
    }
    //Checks if the player is within this enemy's attack range
    withinARange() {
        let xDistance = Math.abs(currentLevel.player.position[0] - this.position[0]);
        let yDistance = Math.abs(currentLevel.player.position[2] - this.position[2]);
        if((xDistance <= this.attackRange &&  yDistance == 0) || (yDistance <= this.attackRange && xDistance == 0)){
            return true;
        }
        else{
            return false;
        }
    }

    //moves the enemy along a predetermined patrol path
    moveEPath(){
        var pos = this.path.current();
        aStar(this.position[0], this.position[2], pos[0], pos[2], currentLevel.board, this);
        //this.moveEntity(pos[0], board.tileArray[pos[0]][pos[2]].height + 1, pos[2]);

        //if made it to node, advance the node
        if(this.position[0] == pos[0] && this.position[2] == pos[2]){
            this.path.advance();
        }

        //console.log(this.path);
        //console.log(this.mesh.position);
    }

    //Moves the enemy in the direction of the player
    moveToPlayer(){
        let pos = currentLevel.player.position;

        aStar(this.position[0], this.position[2], pos[0], pos[2], currentLevel.board, this);

        //console.log(this.path);
        //console.log(this.mesh.position);
    }

    loop(){//changes whether path can loop
        if(this.path.loop == true){
            this.path.loop = false;
        }
        else{
            this.path.loop = true;
        }
    }

    pathAdd(waypoint){//add new waypoint to enemy patrol path
        this.path.add(waypoint);
    }

    //damage the player
    attack(damage){
        //Play attack animation
        currentLevel.player.takeDamage(damage);

    }
    
    //set custom attack power for enemy type
    setAttackPower(atPow){
        this.attackPower = atPow;
    }

    //set custom enemy mass for enemy type
    setMass(newMass){
        this.mass = newMass;
    }

    //set custom attack range
    setARange(newAR){
        this.attackRange = newAR;
    }
}
export {Enemy};