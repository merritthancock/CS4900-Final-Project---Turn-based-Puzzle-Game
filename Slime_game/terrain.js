function zTerrain(id){ //Zero terrain
    var id = -1;
    var traversable = false;
}

function nTerrain(x, z){ //Normal terrain (no restrictions)
    var id = 0;
    var traversable = true;
    grassT = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as grass
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/grass.jpg') })
    );
    grassT.rotation.x -= Math.PI / 2;
    grassT.position.set(x, 0, z);
    scene.add(grassT);
}

function uTerrain(x, z){ //Untraversable rocky terrain
    var id = 1;
    var traversable = false;
    rocksU = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as rocky mountains
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/mountain.jpg')})
    );
    rocksU.rotation.x -= Math.PI / 2;
    rocksU.position.set(x, 0, z);
    scene.add(rocksU);
}

function wTerrain(x, z){ //Untraversable water terrain
    var id = 2;
    var traversable = false;
    waterU = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as water
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/water.jpg')})
    );
    waterU.rotation.x -= Math.PI / 2;
    waterU.position.set(x, heightMap[x][z], z);
    scene.add(waterU);
}

function gTerrain(x, z){ //Gap space that makes player fall (different from void space)
    var id = -2;
    var traversable = true;
    gapT = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as a black space ( generates a few tiles down)
             new THREE.MeshBasicMaterial({ color: 0x000000})
    );
    gapT.rotation.x -= Math.PI / 2;
    gapT.position.set(x, heightMap[x][z], z);
    scene.add(gapT);
}
