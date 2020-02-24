import { Board } from "../Board.js";

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

    movementOverlay(x, z, range, board){//uses the flood fill algorithm to create overlay of all possible spaces to move
        //console.log(board.overlayMap[x][z].overlay);
        if(range>=0 && x >= 0 && x < board.overlayMap.length && z >=0 && z < board.overlayMap[x].length){
           // Math.abs(board.player.position[2]) - board.heightMap[x][z] <= 1){//This will be modified later on when jump ability introduced
            
            board.overlayMap[x][z].overlay.material.visible = true;
            this.movementOverlay(x+1, z, range-1, board);//recursive call for surrounding spaces
            this.movementOverlay(x, z+1, range-1, board);
            this.movementOverlay(x-1, z, range-1, board);
            this.movementOverlay(x, z-1, range-1, board);             
        }
    }

    movementOverlayHelper(board, entity){
        this.board = board;
        var entityPos = entity.position;//for player only
        var range = entity.movementRange;
        this.movementOverlay(entityPos[0], entityPos[2], range, this.board);
        //return overlayList;
    }
}

export {Entity};