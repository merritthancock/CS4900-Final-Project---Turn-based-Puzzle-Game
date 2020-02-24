import {scene} from "./Controller.js";
//board: the array Board that holds Tile objects
//start: a list holding the [x,y] coordinates of the start position
//destination: a list holding the [x,y] coordinates of the end position
function aStar(board, start, destination, maxHeight) {
    //Get tiles for start and end
    startNode = board[start[0]][start[1]]
    startNode.hCost = pythagorean(start, destination);
    startNode.gCost = 0;
    //list to hold route
    route = [];
    //Array for neighboring nodes
    open = [startNode];
    //Array to hold exhausted nodes
    closed = [];

    //The meat of the algorithm
    while(open.length > 0) {
        //Move first element from open to closed
        closed.unshift(open[0]);
        open[0].pop();

        currentHeight = closed[0].height;
        //Get neighbors
        getNeighbors(board, closed[0], )
    }
}

//Utility function to pass to javascript's sort function to ensure the smallest fCost is at the front of the "open" list
function sortCriterion(a, b) {
    return a.getFCost() - b.getFCost();
}

//Utility function for pythagorean theorem
function pythagorean(a, b) {
    distance1 = Math.abs(a[0] - b[0]);
    distance2 = Math.abs(a[1] - b[1]);
    return Math.sqrt((distance1 * distance1) + (distance2 * distance2));
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
    //console.log(board.overlayMap[x][z].overlay);
    if(range>=0 && x >= 0 && x < board.overlayMap.length && z >=0 && z < board.overlayMap[x].length){
        //Don't bother rendering an overlay tile that has an entity in it
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

function occupied(board){
    var occupant = board.tileArray[board.cursor.position[0]][board.cursor.position[2]].occupant;
    if(occupant != null){
        var overlayList = movementOverlayHelper(board, occupant);
        return occupant.id;
    }
    else{
        wipeOverlay(board);
        return "None";
    }
}

function wipeOverlay(board){//this will return overlay visibility to false when player not occupying space
    for(var r = 0; r < board.overlayMap.length; r++){
        for(var c = 0; c < board.overlayMap[r].length; c++){
            board.overlayMap[r][c].overlay.material.visible = false;
        }
    }
}

export {hover};