import{Level} from "./Level.js";

//Create New Levels
//Load Level

Level testLevel = new Level(null, null, null, null, null);


function loadLevel(scene, level){


}

function loadBoad(scene, level) {
    for(let i = 0; i < board.tileArray.length; i++){
        for(let j = 0; j < board.tileArray[0].length; j++){
            if(board.tileArray[i][j].terrain != null){
                scene.add(board.tileArray[i][j].terrain);
                scene.add(board.overlayMap[i][j].overlay);
            }
        }
    }

    // create lighting and add to scene 
    let light = new THREE.AmbientLight( 0xe0e0e0 ); // soft white light
    scene.add(light);


    //Set up the skybox
    let sky = new THREE.TextureLoader().load( './assets/Slimegamesky.jpg' );
    let skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
    let skyboxMaterial = new THREE.MeshBasicMaterial({  map: sky, side: THREE.BackSide });
    let skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    scene.add(skybox);

    //add player to the scene
    scene.add(board.player.mesh);
    //add cursor to the scene
    scene.add(board.cursor.mesh);
    //add enemy to the scene //TODO: Add array compatibility for board
    scene.add(board.enemies.mesh);

}



