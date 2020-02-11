class Board {
    constructor(tileMap, heightMap, player, enemies){
        this.tileMap = tileMap;
        this.heightMap = heightMap;
        this.player = player;
        this.enemies = enemies;

        this.board = [];
        for(i = 0; i < tileMap; i++){
            this.board[i] = []
            for(j = 0; j < tileMap[0]; j++){
                this.board[i][j] = new Tile([i, j, 1], heightMap[i][j], tileMap[i][j]);
            }
        }
    }

    loadLevel(scene) {
        for(i = 0; i < this.tiles.length; i++){
            for(j = 0; j < this.tiles[0].length; j++){
                scene.add(tiles[i][j].terrain;
            }
        }
    }
}

class Tile {
    constructor(position, height, type){

        this.position = position;
        this.height = height;
        
        switch(type){
            case 0://grass
                this.terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                          new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../assets/grass.jpg')}));
                break;
            case 1://rocky
                this.terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                          new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../assets/mountain.jpg')}));            
                break;
            /*case 2://water
                this.terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                          new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../assets/water.jpg')}));;
                break;*/
            case 3://gap
                this.terrain = new THREE.Mesh(new THREE.BoxGeometry(1, .1, 1),
                          new THREE.MeshBasicMaterial({ color: 0x000000}));
                break;
            default:
                this.terrain = null;
                break;
        }
    }   
}