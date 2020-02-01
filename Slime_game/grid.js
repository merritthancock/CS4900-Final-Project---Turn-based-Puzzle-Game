var grid = []; //this is the current level grid

function createGrid1(){ //object function to create the grid for level 1
    //Grid represents the world. A 1 means untraversable, 0 means traversable, -1 means empty space(hole)
    grid = [ 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 2, 2, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 2, 2, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ];

    var start_pos = grid[1][1];

    //populates the grid with each terrain type
    for(r = 0; r< grid.length; r++){
        for(c = 0; c< grid[r].length; c++){
            if (grid[r][c] == 0){
                nTerrain(r,c); //calls from tnorm.js
            }
            if (grid[r][c] == 1){
                uTerrain(r,c);
            }
            if (grid[r][c] == 2){
                wTerrain(r,c);
            }
        }

    }
}

function createGrid2(){ //object function to create the grid for level 2
    //Grid represents the world. A 1 means untraversable, 0 means traversable, -1 means empty space(hole)
    grid = [ 
        [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [-1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1 ],
        [1, 0, 0, 1, 2, 2, 1, 0, 0, 1, -2, -2, 1, 0, 0, 0, 1 ],
        [1, 0, 0, 1, 2, 2, 1, 0, 0, 1, -2, -2, 1, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1 ],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [-1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ];

    var start_pos = grid[1][1];

    //populates the grid with each terrain type
    for(r = 0; r< grid.length; r++){
        for(c = 0; c< grid[r].length; c++){
            if (grid[r][c] == 0){
                nTerrain(r,c); //calls from terrain.js
                setGridOverlay(r,c);
            }
            if (grid[r][c] == 1){
                uTerrain(r,c);
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

function checkGrid(posX, posZ){ //checks current position on grid to determine if spot is traversable or not
    var rLen = grid[posX].length;
    //alert(rLen);
    var traversable = true;
    if(posZ == rLen - 1 || grid[posX][posZ] == 1 || grid[posX][posZ] == -1 || posZ > rLen || posZ < 0){
        traversable = false;
    }
    else if(grid[posX][posZ] == 2){
       //some ability check method will be called here to tell if player has aquatic ability equipped before deciding traversability
        traversable = false;
    }
    else{
        traversable = true;
    }
    return traversable;

}

function setGridOverlay(x, z){
    size = 0.5;
    divisions = 1;
    //startPos = (x, 1, z);
    var gridHelper = new THREE.GridHelper(size, divisions, '0x000000', '0x000000');
	scene.add( gridHelper );
	gridHelper.position.set(x, 0.2, z);
    gridHelper.setColors(0x000000, 0x003366);
    
}

