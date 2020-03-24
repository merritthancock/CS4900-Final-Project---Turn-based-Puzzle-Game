import {GameEntity} from "../../libraries/yuka-master/src/yuka.js";

class Entity extends GameEntity {
    constructor(position, name){
        super();
        //Set position of entity
        this.position = position;
        //TODO: Enforce uniqueness of entity ID
        this.name = name;
        //Represents Action points (AP)
        this.ap = 2;
        //AP remaining for turn.
        this.remainingAP = 0;
        //Build mesh from provided geometry and material, can add to scene in rest of code
        //this.mesh = THREE.Mesh(model, texture);
        /*
        this.mesh = new THREE.Mesh(model,
                    new THREE.MeshBasicMaterial({ map: texture }));
        */
    }

    //Function moves player to a given position. Only call after validation.
    //TODO: Play animations to move along path rather than jumping to set location.
    moveEntity(x, y, z) {
        this.position[0] = x;
        this.position[1] = y;
        this.position[2] = z;
        this.model.position.set(x,y,z);
    }

    //A method to check an entity's AP and decrement it with each move or action the entity takes
    decrementAP() {
        if(this.remainingAP > 0) {
            this.remainingAP--;
            return this.remainingAP;
        }
        else {
            return null;
        }
    }

    //Resets entity's AP to default at start of turn
    resetAP() {
        this.remainingAP = this.ap;
    }
}

export {Entity};