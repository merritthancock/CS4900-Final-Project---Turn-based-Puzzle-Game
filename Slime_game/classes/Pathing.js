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

//Utility function to get list of neighboring nodes
function getNeighbors(board, currentNode, currentHeight, maxHeight) {
    //Check up neighbor
    if(closed[0].x != 0) {
        if(Math.abs(currentHeight - board[closed[0].x - 1][closed[1]].height) <= maxHeight) {
            //get hCost
            h = pythagorean([open[0].position[0] - 1, open[0].position[2]], destination);
            //get gCost
            g = closed.gCost + 1;
        }
    }
}

//FLOOD FILL IMPLEMENTATION
function hover(board){//initiates methods when cursor hovers over entities/tiles
    var cPos = board.cursor.position;
    var type = board.tileMap[cPos[0]][cPos[2]];
    var height = board.heightMap[cPos[0]][cPos[2]];
    var pPos = board.player.position;
    //board.cursor.cursorHeight(height + 0.5);
    console.log("Type: ", typeList(type));
    console.log("Height: ", height);
    console.log("Occupied by: ", occupied(board.player, pPos, cPos));
    //board.cursor.position = (cPos[0], height + 0.5, cPos[2]);
    //return type;
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

function occupied(player, pPos, cPos){
    //var occupied = false;
    if(pPos[0] == cPos[0] && pPos[2] == cPos[2]){
        //occupied == true;
        var overlayList = player.movementOverlayHelper(pPos[0], pPos[2], player.movementRange, 1);//will need to read player height in future
        for(var i = 0; i < overlayList.length; i++){
            scene.add(overlayList[i]);
        }
        return "Player";
    }
    else{
        return "None";
    }
}

export {hover};