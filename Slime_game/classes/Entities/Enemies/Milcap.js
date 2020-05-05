import { StateMachine} from "../../../libraries/yuka-master/src/yuka.js";
import { Enemy } from "../Enemy.js";
import { PatrolState, PursueState, AttackState } from "./MilcapStates.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Milcap extends Enemy {
    constructor(position, id, startingMass, startPriority){
        //Call entity constructor
        super(position, id, startingMass, startPriority, 5);
        
        //Define url for the model
        this.url = "MilcapSoldier.glb";

        //Default trigger radius in all directions
        this.radius = [7,3,7];

        this.stateMachine = new StateMachine(this);
        this.stateMachine.add('PATROL', new PatrolState());
        this.stateMachine.add('PURSUE', new PursueState());
        this.stateMachine.add('ATTACK', new AttackState());
        this.stateMachine.changeTo('PATROL');
        
        //updates default attack power with new attack power
        this.setAttackPower(0.5);
        //Milcaps have 2 AP per turn
        this.ap = 2;
        this.type = 'MILCAP';
    }

    update(){//calls a single step in the state
        this.stateMachine.update();
    }
}
export {Milcap};