function createGrid1(){ //object function to create the grid for level 1
    //Grid represents the world. A 1 means untraversable, 0 means traversable, -1 means empty space(hole)
    grid = [ 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
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
                nTerrain(r,c);
            }
            if (grid[r][c] == 1){
                uTerrain(r,c);
            }
        }

    }
}