import { StateMachine, RectangularTriggerRegion, Trigger } from "../../../libraries/yuka-master/src/yuka.js";
import {aStar} from "../../Pathing.js";
import { Enemy } from "../Enemy.js";
import { ExtendState, RetractState} from "./PinpodStates.js";
import { currentLevel } from "../../Controller.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Pinpod extends Enemy {
    constructor(position, model, texture, id, startingMass, startPriority){
        //Call entity constructor
        super(position, model, texture, id, startingMass, startPriority, 1);
        
        //the Pinpod's ability which will be passed to the player upon absorption
        this.ability = 'SPIKE';
        //Default trigger radius in all directions
        this.radius = [7,3,7];

        this.stateMachine = new StateMachine(this);
        this.stateMachine.add('EXTEND', new ExtendState());
        this.stateMachine.add('RETRACT', new RetractState());
        this.stateMachine.changeTo('RETRACT');

        //attack power dealt by spikes
        this.setAttackPower(0.5);
        //Pinpod AP per turn
        this.ap = 1;
        //Number of turns the Verm hides for
        this.turnCount = 0;
    }

    update(){//calls a single step in the state
        this.stateMachine.update();
    }

    //Moves the Verm in the direction of its nest
    fleeToNest(moves){
        let route = aStar(this.position[0], this.position[2], this.nestLocation[0], this.nestLocation[2], currentLevel.board, this);
        this.moveEnemy(route, moves);
    }

    //Sets the nest position relative to the level
    setNest(waypoint){
        this.nestLocation = waypoint;
    }
}
export {Pinpod};