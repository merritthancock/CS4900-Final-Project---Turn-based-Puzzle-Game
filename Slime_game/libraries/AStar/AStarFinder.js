import {checkNeighbor, neighborConfirm} from "../../classes/Pathing.js";
import {Heap} from '../heap.js';
import { backtrace } from './Util.js';
import {Vertex} from './Vertex.js';

/**
 * Acquired from Pathfinding.js https://github.com/qiao/PathFinding.js/
 * A* path-finder. Based upon https://github.com/bgrins/javascript-astar
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching 
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 */
function AStarFinder() {
    this.heuristic = function(dx, dy) {
        return dx + dy;
    };
    this.weight = 1;
    this.nodeBoard = [];
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
AStarFinder.prototype.findPath = function(startX, startY, endX, endY, board, entity) {
    //MODIFICATION: Check if final tile is occupied
    var isOccupied = false;
    if(board.tileArray[endX][endY].occupant != null) {
        isOccupied = true;
    }
    //MODIFICATION: Build board of nodes to avoid using
    //Grid.js
    this.nodeBoard = []
    for(var i = 0; i < board.tileArray.length; i++){
        this.nodeBoard[i] = [];
        for(var j = 0; j < board.tileArray[0].length; j++){
            this.nodeBoard[i][j] = new Vertex(board.tileArray[i][j]);
        }
    }
    
    var openList = new Heap(function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        }),
        startNode = this.nodeBoard[startX][startY],
        endNode = this.nodeBoard[endX][endY],
        heuristic = this.heuristic,
        weight = this.weight,
        abs = Math.abs, SQRT2 = Math.SQRT2,
        node, neighbors, neighbor, i, l, x, y, ng;

    // set the `g` and `f` value of the start node to be 0
    startNode.g = 0;
    startNode.f = 0;

    // push the start node into the open list
    openList.push(startNode);
    startNode.opened = true;

    // while the open list is not empty
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;

        // if reached the end position, construct the path and return it
        //MODIFICATION: If isOccupied is true, remove the next to last node instead.
        if (node === endNode) {
            let path = backtrace(endNode);
            if(isOccupied) {
                path.pop();
            }
            return path;
        }

        // get neigbours of the current node
        //MODIFICATION: getNeighbors moved to this file at the bottom,
        //rewritten to work with checkNeighbor in our pathing.js file
        neighbors = getNeighbors(entity, board, this.nodeBoard, node, isOccupied, endX, endY);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    openList.push(neighbor);
                    neighbor.opened = true;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    openList.updateItem(neighbor);
                }
            }
        } // end for each neighbor
    } // end while not open list empty

    // fail to find the path
    return [];
};

function getNeighbors(entity, board, nodeBoard, pathNode, isOccupied, endX, endY){
    var sourceX = pathNode.x;
    var sourceY = pathNode.y;
    var neighbors = []
    if(neighborConfirm(entity, board, pathNode.x, pathNode.y, sourceX, sourceY - 1, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX][sourceY - 1]);
    }
    if(neighborConfirm(entity, board, pathNode.x, pathNode.y, sourceX + 1, sourceY, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX + 1][sourceY]);
    }
    if(neighborConfirm(entity, board, pathNode.x, pathNode.y, sourceX, sourceY + 1, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX][sourceY + 1]);
    }
    if(neighborConfirm(entity, board, pathNode.x, pathNode.y, sourceX - 1, sourceY, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX - 1][sourceY]);
    }

    /*
    if(checkNeighbor(entity, pathNode.tile, nodeBoard[sourceX][sourceY - 1].tile, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX][sourceY - 1]);
    }
    if(checkNeighbor(entity, pathNode.tile, nodeBoard[sourceX + 1][sourceY].tile, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX + 1][sourceY]);
    }
    if(checkNeighbor(entity, pathNode.tile, nodeBoard[sourceX][sourceY + 1].tile, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX][sourceY + 1]);
    }
    if(checkNeighbor(entity, pathNode.tile, nodeBoard[sourceX - 1][sourceY].tile, isOccupied, endX, endY)){
        neighbors.push(nodeBoard[sourceX - 1][sourceY]);
    }
    */

    return neighbors;
}

export {AStarFinder};