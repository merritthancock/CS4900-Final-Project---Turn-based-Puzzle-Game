import {board} from "../../Controller.js";
import {Entity} from "../Entity.js";
import {Path, PursuitBehavior, StateMachine} from "../../../libraries/yuka-master/src/yuka.js";
import {aStar} from "../../Pathing.js";
import { Enemy } from "../Enemy.js";
import { PatrolState, PursueState } from "./MilcapStates.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Milcap extends Enemy {
    constructor(position, model, texture, id, startingMass, startPriority){
        //Call entity constructor
        super(position, model, texture, id, startingMass, startPriority);

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
        console.log(this.path);
        
        this.stateMachine = new StateMachine(this);

        this.stateMachine.add('PATROL', new PatrolState());
        this.stateMachine.add('PURSUE', new PursueState());

        this.stateMachine.changeTo('PATROL');

    }
    /*
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

    //useAbility(){
        
   // }

    //moves the enemy along a predetermined patrol path
    //TODO: add compatibility with enemy array for multiple enemies
    moveEPath(){
        var pos = this.path.current();
        aStar(this.position[0], this.position[2], pos[0], pos[2], board, this);
        //this.moveEntity(pos[0], board.tileArray[pos[0]][pos[2]].height + 1, pos[2]);

        //if made it to node, advance the node
        if(this.position[0] == pos[0] && this.position[2] == pos[2]){
            this.path.advance();
        }

        console.log(this.path);
        console.log(this.mesh.position);
    }*/
}
export {Milcap};