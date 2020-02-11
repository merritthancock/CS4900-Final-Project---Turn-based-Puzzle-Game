class Tile {
    constructor(position, height, id){

        this.position = position;
        this.height = height;
        this.id = id;
    }
    
}

function generateTiles(x, height, z, id){
    let coord = (x, 0, z);
    let tile = new Tile(coord, height, id);
    
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