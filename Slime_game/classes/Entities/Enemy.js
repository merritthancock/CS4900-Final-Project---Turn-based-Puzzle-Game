import {currentLevel} from "../Controller.js";
import {Entity} from "./Entity.js";
import {Path} from "../../libraries/yuka-master/src/yuka.js";
import {aStar} from "../Pathing.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Enemy extends Entity {
    constructor(position, id, startingMass, startPriority, visionRange){
        //Call entity constructor
        super(position, id);
        //Set starting mass
        this.mass = startingMass;
        //Set abilities to an empty set for starters
        this.abilities = {};
        //Set the priority of the enemy
        this.priority = startPriority;
        //Set the enemy's range of vision for seeing the player
        this.visionRange = visionRange;
        //Set default attack stats
        this.attackPower = 0.5;
        this.attackRange = 1;
        //Set default jump height to 1
        this.jumpHeight = 1;
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

    moveEnemy(route, moves) {
        //Move along the route for the number of moves allowed
        for(let i = 1; i < route.length && moves > 0; i++) {
            currentLevel.board.tileArray[this.position[0]][this.position[2]].occupant = null;
            this.moveEntity(route[i].tile.position[0], route[i].tile.height + 1, route[i].tile.position[2]);
            currentLevel.board.tileArray[this.position[0]][this.position[2]].occupant = this;
            moves--;
        }
    }

    //moves the enemy along a predetermined patrol path
    moveEPath(moves){
        let pos = this.path.current();
        let route = aStar(this.position[0], this.position[2], pos[0], pos[2], currentLevel.board, this);

        //Move along the route for the number of moves allowed
        this.moveEnemy(route, moves);

        //if made it to node, advance the node
        if(this.position[0] == pos[0] && this.position[2] == pos[2]){
            this.path.advance();
        }
    }

    //Moves the enemy in the direction of the player
    moveToPlayer(moves){
        let pos = currentLevel.player.position;
        let route = aStar(this.position[0], this.position[2], pos[0], pos[2], currentLevel.board, this);

        this.moveEnemy(route, moves);
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
    setAttackRange(newAR){
        this.attackRange = newAR;
    }

    //enemy takes damage and loses mass
    takeDamage(damage){
        this.mass -= damage;
        console.log("Damage Dealt: ", damage, "Enemy Health: ", this.mass);
        if(this.mass <= 0){
            return 'DEAD'; //to determine removal
        }
        else{
            return 'ALIVE';
        }
    }
}
export {Enemy};