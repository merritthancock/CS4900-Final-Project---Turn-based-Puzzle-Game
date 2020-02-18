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