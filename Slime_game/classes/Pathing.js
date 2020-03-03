import {AStarFinder} from "../libraries/AStar/AStarFinder.js";
import {Enemy} from "./Entities/Enemy.js";

function aStar(startX, startY, endX, endY, board, entity) {
    let finder = new AStarFinder();
    //Get path
    let foundPath = finder.findPath(startX, startY, endX, endY, board, entity);
    if(foundPath.length == 0){
        console.log("No path exists!");
    }
    else {
        let movesRemaining = entity.movementRange;
        for(var i = 0; i < foundPath.length; i++){
            board.tileArray[entity.position[0]][entity.position[2]].occupant = null;
            entity.moveEntity(
                foundPath[i].tile.position[0],
                foundPath[i].tile.height + 1,
                foundPath[i].tile.position[2]
            );
            board.tileArray[entity.position[0]][entity.position[2]].occupant = entity;

            //ensure that movement range is not exceeded
            movesRemaining--;
            if(movesRemaining < 0){
                break;
            }
        }
    }
}

//Checks neighboring tiles. To be used by both Flood Fill and A*
function checkNeighbor(entity, sourceTile, destinationTile){
    var maxHeight = entity.jumpHeight;
    var heightDifference = Math.abs(sourceTile.height - destinationTile.height);
    //This variable needs to be gotten from the entity later, but for now we can just
    //use the basic traversability (No water/void/gap spaces)
    var traversableTerrain = [0, 1, 4, 8];
    
    //Make sure destinationTile exists
    if(destinationTile == null){
        return false;
    }
    //Make sure the destination tile is within the movement range
    //(this is taken care of in flood fill, but not in A*)
    //Enemy doesn't do this, because enemy needs to have a destination beyond movement range in mind
    if(!(entity instanceof Enemy)){
        let xDistance = Math.abs(destinationTile.position[0] - entity.position[0]);
        let zDistance = Math.abs(destinationTile.position[2] - entity.position[2]);
        if(xDistance + zDistance > entity.movementRange){
            return false;
        }
    }
    //Make sure maxHeight exceeds the height difference between the tiles
    if(maxHeight < heightDifference){
        return false;
    }
    //Make sure the destination tile is on the list of traversable terrains
    if(!traversableTerrain.includes(destinationTile.type)){
        return false;
    }
    //Make sure the destination tile isn't occupied
    if(destinationTile.occupant != null){
        return false;
    }
    return true;
}

//FLOOD FILL IMPLEMENTATION
function hover(board){//initiates methods when cursor hovers over entities/tiles
    var cPos = board.cursor.position;
    var type = board.tileMap[cPos[0]][cPos[2]];
    var height = board.heightMap[cPos[0]][cPos[2]];
    var pPos = board.player.position;

    console.log(cPos);
    console.log(pPos);

    console.log("Type: ", typeList(type));
    console.log("Height: ", height);
    console.log("Occupied by: ", occupied(board));
}

function movementOverlay(x, z, range, board, entity){//uses the flood fill algorithm to create overlay of all possible spaces to move
    if(range>=0 && x >= 0 && x < board.overlayMap.length && z >=0 && z < board.overlayMap[x].length){
        //Do not render an overlay tile that has an entity in it
        if(board.tileArray[x][z].occupant == null){
            board.overlayMap[x][z].overlay.material.visible = true;
        }
        //recursive call for surrounding spaces
        if(checkNeighbor(entity, board.tileArray[x][z], board.tileArray[x+1][z])){
            movementOverlay(x+1, z, range-1, board, entity);
        }
        if(checkNeighbor(entity, board.tileArray[x][z], board.tileArray[x][z+1])){
            movementOverlay(x, z+1, range-1, board, entity);
        }
        if(checkNeighbor(entity, board.tileArray[x][z], board.tileArray[x-1][z])){
            movementOverlay(x-1, z, range-1, board, entity);
        }
        if(checkNeighbor(entity, board.tileArray[x][z], board.tileArray[x][z-1])){
            movementOverlay(x, z-1, range-1, board, entity);
        }           
    }
}

function movementOverlayHelper(board, entity){
    var entityPos = entity.position;//for player only
    var range = entity.movementRange;
    movementOverlay(entityPos[0], entityPos[2], range, board, entity);
    //return overlayList;
}

function typeList(type){//Returns the terrain name for logging to console
    switch(type){
        
        case 0:
            return "Grass";
        case 1:
            return "Rocky";
        case 2:
            return "Water";
        case 3:
            return "Gap";
        case 4:
            return "Cave";
        case 8:
            return "Exit";
        case 9://may change as board gen changes
            return "Void";
    }
}

function occupied(board){//returns what occupies the tile and calls on flood fill overlay
    var occupant = board.tileArray[board.cursor.position[0]][board.cursor.position[2]].occupant;
    if(occupant != null){
        //moving functionality to board
        //wipeOverlay(board);
        //var overlayList = movementOverlayHelper(board, occupant);
        return occupant.id;
    }
    else {//if(board.overlayMap[board.cursor.position[0]][board.cursor.position[2]].overlay.material.visible){
        return "None";
    }
    //else{
    //    wipeOverlay(board);
    //    return "None";
    //}
}

function wipeOverlay(board){//this will return overlay visibility to false when player not occupying space
    for(var r = 0; r < board.overlayMap.length; r++){
        for(var c = 0; c < board.overlayMap[r].length; c++){
            board.overlayMap[r][c].overlay.material.visible = false;
        }
    }
}

export {hover, checkNeighbor, aStar, wipeOverlay, movementOverlayHelper};