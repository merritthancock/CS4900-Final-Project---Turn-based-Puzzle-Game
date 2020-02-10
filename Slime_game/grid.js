var grid = []; //this is the current level grid

function createTestLevel1(){ //object function to create the grid for level 1
    //Grid represents the world. A 1 means untraversable, 0 means traversable, -1 means empty space(hole)
    grid = [ 
        [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.1 ],
        [1.1, 0, 0, 0, 0, 0, 0, 0, 0, 1.1 ],
        [1.1, 0, 0, 2, 2, 2, 2, 0, 0, 1.1 ],
        [1.1, 0, 2, 2, 0.1, 0.1, 2, 2, 0, 1.1 ],
        [1.1, 0, 2, 0.1, 3.1, 3.1, 0.1, 2, 0, 1.1 ],
        [1.1, 0, 2, 0.1, 3.1, 3.1, 0.1, 2, 0, 1.1 ],
        [1.1, 0, 2, 2, 0.1, 0.1, 2, 2, 0, 1.1 ],
        [1.1, -1, -1, 2, 2, 2, 2, 0, 0, 1.1 ],
        [1.1, -1, -1, 0, 0, 0, 0, 0, 0, 1.1 ],
        [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1 ]
    ];
    spawnElements(grid);
}

function createLevel1(){
    //this is where our working level 1 will go
}

function createLevel2(){
    //this is where our working level 2 will go
}

function spawnElements(gridM){
    //populates the grid with each terrain type
    for(r = 0; r< grid.length; r++){
        for(c = 0; c< grid[r].length; c++){
            var height = (grid[r][c] % 1);
            var id = (height == 0 ? grid[r][c] : (grid[r][c] - height));
            height *= 10;
            if(id != -1){
                makeTerrain(r, height, c, id);//from terrain
                setGridOverlay(r, height, c);
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
       traversable = true;
    }
    else{

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
