function voidTerrain(){ //Zero terrain
    //id = -1;
    var traversable = false;
}
//Void Terrain: id = -1

function grassTerrain(x, height, z){
    //id = 0; 
    var traversable = true;
    grassT = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as grass
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/grass.jpg') })
    );
    grassT.rotation.x -= Math.PI / 2;
    grassT.position.set(x, height, z);
    scene.add(grassT);
}

function rockyTerrain(x, height, z){
    //id = 1;
    var traversable = false;
    rocksT = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1), //a tile of normal that appears as rocky mountains
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/mountain.jpg')})
    );
    //rocksT.rotation.y -= Math.PI / 2;
    rocksT.position.set(x, height/2, z);//height/2 because y position refers to the center of the box
    scene.add(rocksT);
}

function waterTerrain(x, height, z){
    //id = 2;
    var traversable = false;
    waterU = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as water
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/water.jpg')})
    );
    waterU.rotation.x -= Math.PI / 2;
    waterU.position.set(x, height, z);
    scene.add(waterU);
}

function gapTerrain(x, height, z){ //Gap space that makes player fall (different from void space)
    //id = 3;
    var traversable = true;
    gapT = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as a black space ( generates a few tiles down)
             new THREE.MeshBasicMaterial({ color: 0x000000})
    );
    gapT.rotation.x -= Math.PI / 2;
    gapT.position.set(x, height, z);
    scene.add(gapT);
}

function makeTerrain(x, height, z, id){//add new terrains here as needed
    //var traversable = false;
    var terrain;
    switch(id){
        case 0://grass
            terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                      new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/grass.jpg')}));
            break;
        case 1://rocky
            terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                      new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/mountain.jpg')}));            
            break;
        case 2://water
            terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                      new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/water.jpg')}));;
            break;
        case 3://gap
            terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                      new THREE.MeshBasicMaterial({ color: 0x000000}));
            break;
    }
    if(height == 0){
        height -= 1;
    }
    terrain.position.set(x, height/2, z);//height/2 because y position refers to the center of the box
    scene.add(terrain);    

}
