import { StateMachine, RectangularTriggerRegion, Trigger } from "../../../libraries/yuka-master/src/yuka.js";
import {aStar} from "../../Pathing.js";
import { Enemy } from "../Enemy.js";
import { PatrolState, PursueState, AttackState } from "./MilcapStates.js";
import { currentLevel } from "../../LevelManager.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Milcap extends Enemy {
    constructor(position, model, texture, id, startingMass, startPriority){
        //Call entity constructor
        super(position, model, texture, id, startingMass, startPriority, 5);
        
        //Default trigger radius in all directions
        this.radius = [7,3,7];

        this.stateMachine = new StateMachine(this);

        this.stateMachine.add('PATROL', new PatrolState());
        this.stateMachine.add('PURSUE', new PursueState());
        this.stateMachine.add('ATTACK', new AttackState());
        
        console.log(this.stateMachine.get('PATROL'));
        this.stateMachine.changeTo('PATROL');
        //this.stateMachine.changeTo('PURSUE');
        //this.stateMachine.changeTo('ATTACK');
        
        let triggerRadius = new RectangularTriggerRegion(this.radius);
        let triggerAggro = new Trigger(triggerRadius);
        triggerAggro.position.set(position[0], position[1], position[2]);
        console.log('Aggro', triggerAggro.position);
        //updates default attack power with new attack power
        this.setAttackPower(0.5);
        //Milcaps have 1 AP per turn
        this.ap = 1;

    }

    update(){//calls a single step in the state
        this.stateMachine.update();
    }
}
export {Milcap};