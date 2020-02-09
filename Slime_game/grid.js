var grid = []; //this is the current level grid

function createLevel(){ //object function to create the grid for level 1
    //Grid represents the world. A 1 means untraversable, 0 means traversable, -1 means empty space(hole)
    grid = [ 
        [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4 ],
        [1.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 1.4 ],
        [1.4, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 1.4 ],
        [1.4, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 1.4 ],
        [1.4, 0.1, 0, 0, 3, 3, 0, 0, 0.1, 1.4 ],
        [1.4, 0.1, 0, 0, 3, 3, 0, 0, 0.1, 1.4 ],
        [1.4, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 1.4 ],
        [1.4, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 1.4 ],
        [1.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 1.4 ],
        [1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4 ]
    ];

    //populates the grid with each terrain type
    for(r = 0; r< grid.length; r++){
        for(c = 0; c< grid[r].length; c++){
            var height = (grid[r][c] % 1);
            var id = (height == 0 ? grid[r][c] : (grid[r][c] - height));
            switch(id){
                case 0:
                    grassTerrain(r, height, c);
                    setGridOverlay(r, height, c);
                    break;
                case 1:
                    rockyTerrain(r, height, c);
                    setGridOverlay(r, height, c);
                    break;
                case 2:
                    waterTerrain(r, height, c);
                    setGridOverlay(r, height, c);
                    break;
                case 3:
                    gapTerrain(r, height, c);
                    setGridOverlay(r, height, c);
                    break;
            }
            
        }
    }
}

//import { loader, loadLevel2 } from './imports.js';
function createGrid2(){ //object function to create the grid for level 2
    //Grid represents the world. A 1 means untraversable, 0 means traversable, -1 means empty space(hole)
    grid = [ 
        [-1, -1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, -1, -1, -1],
        [-1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1, -1],
        [ 1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1, -1],
        [ 1,  0,  0,  0,  1,  1,  0,  0,  0,  1,  1,  1,  1,  0,  0,  1, -1],
        [ 1,  0,  0,  1,  2,  2,  1,  0,  0,  0, -2, -2,  1,  0,  0,  0,  1],
        [ 1,  0,  0,  1,  2,  2,  1,  0,  0,  0, -2, -2,  1,  0,  0,  0,  1],
        [ 1,  0,  0,  0,  1,  1,  0,  0,  0,  1,  1,  1,  1,  0,  0,  1, -1],
        [ 1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1, -1],
        [-1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1, -1],
        [-1, -1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, -1, -1, -1]
    ];

    //Temporary heightmap until tile object implemented
    heightMap = [
        [-1, -1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, -1, -1, -1],
        [-1,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2, -1, -1],
        [ 2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2, -1, -1],
        [ 2,  0,  0,  0,  2,  2,  0,  0,  0,  2,  2,  2,  2,  0,  0,  2, -1],
        [ 2,  0,  0,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  0,  0,  0,  2],
        [ 2,  0,  0,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  0,  0,  0,  2],
        [ 2,  0,  0,  0,  2,  2,  0,  0,  0,  2,  2,  2,  2,  0,  0,  2, -1],
        [ 2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2, -1, -1],
        [-1,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2, -1, -1],
        [-1, -1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, -1, -1, -1]
    ]

    var start_pos = grid[2][2];

    //populates the grid with each terrain type
    for(r = 0; r< grid.length; r++){
        for(c = 0; c< grid[r].length; c++){
            if (grid[r][c] == 0){
                //nTerrain(r,c); //calls from terrain.js
                setGridOverlay(r,c);
            }
            if (grid[r][c] == 1){
                //uTerrain(r,c);
                setGridOverlay(r,c);
            }
            if (grid[r][c] ==2){
                wTerrain(r,c);
                setGridOverlay(r,c);
            }
            if (grid[r][c] == -2){
                gTerrain(r,c);
                setGridOverlay(r,c);
            }
        }
    }
}


function checkGrid(cPosition, pPosition, distance){ //checks current position on grid to determine if spot is traversable or not
    //var rLen = grid[posX].length;
    var traversable = false;
    
    if(cPosition[0] <= pPosition[0] + distance && cPosition[0] >= pPosition[0] - distance && 
       cPosition[2] <= pPosition[2] + distance && cPosition[2] >= pPosition[2] - distance &&
       grid[cPosition[0]][cPosition[2]] != 1 && grid[cPosition[0]][cPosition[2]] != -1 &&
       grid[cPosition[0]][cPosition[2]] != 2){
        //cursor.material.color.setHex(0x00ff00);
        traversable = true;
    }
    else{
        //cursor.material.color.setHex(0xffff00);
    }
    
    return traversable;

}

function readGrid(cPosition, pPosition, distance){ //changes cursor color based on traversability and range
    if(cPosition[0] <= pPosition[0] + distance && cPosition[0] >= pPosition[0] - distance && 
       cPosition[2] <= pPosition[2] + distance && cPosition[2] >= pPosition[2] - distance &&
       grid[cPosition[0]][cPosition[2]] != 1 && grid[cPosition[0]][cPosition[2]] != -1 &&
       grid[cPosition[0]][cPosition[2]] != 2){
        cursor.material.color.setHex(0x00ff00);
    }
    else{
        cursor.material.color.setHex(0xffff00);
    }
}


function setGridOverlay(x, height, z){
    size = 0.5;
    divisions = 1;
    var gridHelper = new THREE.GridHelper(size, divisions, 0xffffff, 0xffffff);
	scene.add( gridHelper );
	gridHelper.position.set(x, 0.2 + height, z);    
}

function idCheck(x, z){//checks id
    return grid[x][z];    
}
