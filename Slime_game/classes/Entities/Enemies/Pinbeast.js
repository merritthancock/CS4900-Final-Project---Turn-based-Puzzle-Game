import { StateMachine } from "../../../libraries/yuka-master/src/yuka.js";
import { Enemy } from "../Enemy.js";
import { SpawnState, ActionState, AOEState, ChargeState} from "./PinbeastStates.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Pinbeast extends Enemy {
    constructor(position, id, startingMass, startPriority){
        //Call entity constructor
        super(position, id, startingMass, startPriority, 1);

        //Set URL (PLACEHOLDER UNTIL PINBEAST MODEL DONE)
        this.url = "MilcapSoldier.glb";
        
        this.ability = 'NONE';
        //Default trigger radius in all directions
        this.radius = [7,3,7];

        this.stateMachine = new StateMachine(this);
        this.stateMachine.add('SPAWN', new SpawnState());
        this.stateMachine.add('ACTION', new ActionState());
        this.stateMachine.add('AOE', new AOEState());
        this.stateMachine.add('CHARGE', new ChargeState());
        this.stateMachine.changeTo('ACTION');

        //attack power dealt by AOE
        this.setAttackPower(5);
        //Pinbeast AP per turn
        this.ap = 1;
        this.movementRange = 6;

        //number of currently living pinpod children in the level (decrements and increments accordingly)
        this.babies = 4;
        //incremented value which becomes the ID of each spawned pinpod
        this.childID = 1;
        

        this.type = 'PINBEAST';
    }

    update(){//calls a single step in the state
        this.stateMachine.update();
    }
}
export {Pinbeast};