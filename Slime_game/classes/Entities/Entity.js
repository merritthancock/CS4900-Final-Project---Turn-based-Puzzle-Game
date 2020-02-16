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
    moveEntity(x, y, z, entity) {
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        entity.mesh.position.set(x,y,z);
    }

    movementOverlay(x, z, range, currentH){//uses the flood fill algorithm to creat overlay of all possible spaces to move
        //tileHeight = 
        if(range>=0){
            overlay = new PlaneGeomery(1,1),
                      new MeshLambertMaterial( {color: 0x0047AB, transparent: true});
            overlay.opacity = 0.6;
            overlay.position.set(x, currentH, z);
            this.movementOverlay(x+1, z, range-1, currentH);//recursive call for surrounding spaces
            this.movementOverlay(x, z+1, range-1, currentH);
            this.movementOverlay(x-1, z, range-1, currentH);
            this.movementOverlay(x, z-1, range-1, currentH);   
                      
        }
    }
}