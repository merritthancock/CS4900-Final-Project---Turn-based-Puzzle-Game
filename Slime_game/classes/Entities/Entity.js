import { board } from "../Controller.js";

class Entity {
    constructor(position, model, texture, id){
        //Set position of entity
        this.position = position;
        //Set geometry of entity
        this.model = model;
        //Set material
        this.texture = texture;
        //TODO: Enforce uniqueness of entity ID
        this.id = id;
        //Build mesh from provided geometry and material, can add to scene in rest of code
        //this.mesh = THREE.Mesh(model, texture);
        this.mesh = new THREE.Mesh(model,
                    new THREE.MeshBasicMaterial({ map: texture}));
    }

    //Function moves player to a given position. Only call after validation.
    //TODO: Play animations to move along path rather than jumping to set location.
    moveEntity(x, y, z) {
        this.position[0] = x;
        this.position[1] = y;
        this.position[2] = z;
        this.mesh.position.set(x,y,z);
    }
}

export {Entity};