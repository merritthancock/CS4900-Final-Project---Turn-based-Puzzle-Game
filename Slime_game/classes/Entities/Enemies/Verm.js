import { StateMachine, RectangularTriggerRegion, Trigger } from "../../../libraries/yuka-master/src/yuka.js";
import {aStar} from "../../Pathing.js";
import { Enemy } from "../Enemy.js";
import { PatrolState, FleeState, HideState} from "./VermStates.js";
import { currentLevel } from "../../Global.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Verm extends Enemy {
    constructor(position, id, startingMass, startPriority){
        //Call entity constructor
        super(position, id, startingMass, startPriority, 5);
        
        //Verm URL
        this.url = "Verm.glb";
        this.modelMultiplier = 0.5;

        //Default trigger radius in all directions
        this.radius = [7,3,7];

        this.stateMachine = new StateMachine(this);
        this.stateMachine.add('PATROL', new PatrolState());
        this.stateMachine.add('FLEE', new FleeState());
        this.stateMachine.add('HIDE', new HideState());
        this.stateMachine.changeTo('PATROL');
        //updates default attack power with new attack power
        this.setAttackPower(0.5);
        //Verms have 2 AP per turn
        this.ap = 2;
        //Location of the Verm's nest
        this.nestLocation = [];
        //Number of turns the Verm hides for
        this.hideCount = 3;
        this.type = 'VERM';
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

export {Verm};