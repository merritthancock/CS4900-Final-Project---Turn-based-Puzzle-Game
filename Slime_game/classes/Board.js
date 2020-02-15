class Board {
    constructor(tileMap, heightMap, player, enemies){
        this.tileMap = tileMap;
        this.heightMap = heightMap;
        this.player = player;
        this.enemies = enemies;

        this.board = [];
        for(var i = 0; i < tileMap.length; i++){
            this.board[i] = []
            for(var j = 0; j < tileMap[0].length; j++){
                this.board[i][j] = new Tile([i, heightMap[i][j] / 2, j], heightMap[i][j], tileMap[i][j]);
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
                          new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/grass.jpg')}));
                break;
            case 1://rocky
                this.terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                          new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/mountain.jpg')}));         
                break;
            /*case 2://water
                this.terrain = new THREE.Mesh(new THREE.BoxGeometry(1, height, 1),
                          new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('./assets/water.jpg')}));;
                break;*/
            case 3://gap
                this.terrain = new THREE.Mesh(new THREE.BoxGeometry(1, .1, 1),
                          new THREE.MeshBasicMaterial({ color: 0x000000}));
                break;
            default:
                this.terrain = null;
                break;
        }
        if(this.terrain != null){
            this.terrain.position.x = this.position[0];
            this.terrain.position.y = this.position[1];
            this.terrain.position.z = this.position[2];
        }
    }   
}