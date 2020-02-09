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
    rocksT = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as rocky mountains
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/mountain.jpg')})
    );
    rocksT.rotation.x -= Math.PI / 2;
    rocksT.position.set(x, height, z);
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
