//board: the array Board that holds Tile objects
//start: a list holding the [x,y] coordinates of the start position
//destination: a list holding the [x,y] coordinates of the end position
function aStar(board, start, destination) {
    //list to hold route
    route = [start];

    //Array for neighboring nodes
    open = [start];
    //Array to hold exhausted nodes
    closed = [];

    
}

//Utility function for pythagorean theorem
function pythagorean(a, b) {
    distance1 = Math.abs(a[0] - b[0]);
    distance2 = Math.abs(a[1] - b[1]);
    return Math.sqrt((distance1 * distance1) + (distance2 * distance2));
}