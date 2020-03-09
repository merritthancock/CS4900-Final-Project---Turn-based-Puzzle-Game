import {board} from "../../Controller.js";
import {Entity} from "../Entity.js";
import {Path, PursuitBehavior, StateMachine, RectangularTriggerRegion, Trigger} from "../../../libraries/yuka-master/src/yuka.js";
import {aStar} from "../../Pathing.js";
import { Enemy } from "../Enemy.js";
import { PatrolState, PursueState } from "./MilcapStates.js";
import {scene} from "../../Controller.js";

//The Enemy is an object that will contain unique methods allowing player interaction
class Milcap extends Enemy {
    constructor(position, model, texture, id, startingMass, startPriority){
        //Call entity constructor
        super(position, model, texture, id, startingMass, startPriority);

        //Default trigger radius in all directions
        this.radius = (4,4,4);

        this.stateMachine = new StateMachine(this);

        this.stateMachine.add('PATROL', new PatrolState());
        this.stateMachine.add('PURSUE', new PursueState());
        console.log(this.stateMachine.get('PATROL'));
        this.stateMachine.changeTo('PATROL');
        
        let triggerRadius = new RectangularTriggerRegion(this.radius);
        let triggerAggro = new Trigger(triggerRadius);
        triggerAggro.position.set(position);

        const boxGeometry = new THREE.BoxBufferGeometry( this.radius.x, this.radius.y, this.radius.z );
		const boxMaterial = new THREE.MeshBasicMaterial( { color: 0x6083c2, wireframe: true } );
        const triggerMesh = new THREE.Mesh( boxGeometry, boxMaterial );
        triggerMesh.position.set(position);
		triggerMesh.matrixAutoUpdate = false;
		triggerAggro.setRenderComponent(triggerMesh);

    }

    update(){//calls a single step in the state
        this.stateMachine.update();
    }

}
export {Milcap};