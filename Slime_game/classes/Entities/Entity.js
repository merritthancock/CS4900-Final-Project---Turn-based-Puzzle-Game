import {GameEntity} from "../../libraries/yuka-master/src/yuka.js";

class Entity extends GameEntity {
    constructor(position, model, texture, id){
        super();
        //Set position of entity
        this.position.set(position);
        //Set geometry of entity
        this.model = model;
        //Set material
        this.texture = texture;
        //TODO: Enforce uniqueness of entity ID
        this.id = id;
        //Represents Action points (AP)
        this.ap = 2;
        //AP remaining for turn. (Set by TurnManager)
        this.remainingAP = 0;
        //Build mesh from provided geometry and material, can add to scene in rest of code
        //this.mesh = THREE.Mesh(model, texture);
        this.mesh = new THREE.Mesh(model,
                    new THREE.MeshBasicMaterial({ map: texture, visibile: true}));
    }

    //Function moves player to a given position. Only call after validation.
    //TODO: Play animations to move along path rather than jumping to set location.
    moveEntity(x, y, z) {
        this.position[0] = x;
        this.position[1] = y;
        this.position[2] = z;
        this.mesh.position.set(x,y,z);
    }

    /*A method to check an entity's AP and decrement it with each move or action the entity takes
    checkAP(ap){
        if(ap > 0){
            ap--;
            return ap;
        }
        else{
            return null;
        }
    }*/
}

export {Entity};