function zTerrain(id){ //Zero terrain (death pitfall)
    var id = -1;
    //to be implemented
}

function nTerrain(x, z){ //Normal terrain (no restrictions)
    var id = 0;
    grassN = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as grass
             new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/grass.jpg') })
    );
    grassN.rotation.x -= Math.PI / 2;
    grassN.position.set(x, 0, z);
    scene.add(grassN);
}

function uTerrain(x, z){ //Untraversable terrain
    var id = 1;
    rocksN = new THREE.Mesh(new THREE.PlaneGeometry(1,1), //a tile of normal that appears as grass
             new THREE.MeshBasicMaterial({ color: 0xDEB887, wireframe: false})
    );
    rocksN.rotation.x -= Math.PI / 2;
    rocksN.position.set(x, 0, z);
    scene.add(rocksN);
}
