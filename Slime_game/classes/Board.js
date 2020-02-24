//import { Enemy } from "./Entities/Enemy.js";

class Board {
    constructor(tileMap, heightMap, entitiesMap, player, enemies, cursor){
        this.tileMap = tileMap;
        this.heightMap = heightMap;
        this.player = player;
        this.enemies = enemies;
        this.cursor = cursor;
        this.overlayMap = [];

        this.tileArray = [];
        for(var i = 0; i < tileMap.length; i++){
            this.tileArray[i] = [];
            this.overlayMap[i] = [];
            for(var j = 0; j < tileMap[0].length; j++){
                this.tileArray[i][j] = new Tile([i, heightMap[i][j] / 2, j], heightMap[i][j], tileMap[i][j], entitiesMap[i][j], player, enemies);
                this.overlayMap[i][j] = new Overlay([i, heightMap[i][j] + 0.6, j]); 
            }
        }
    }
}

class Tile {
    constructor(position, height, type, occupant, player, enemy){

        this.position = position;
        this.height = height;

        var grass = new THREE.TextureLoader().load( './assets/grass.jpg' );
        var water = new THREE.TextureLoader().load( './assets/water.jpg' );
        var rocks = new THREE.TextureLoader().load( './assets/mountain.jpg' );
        var cave = new THREE.TextureLoader().load( './assets/cave.jpg' );

        switch(type){
            case 0://grass
                this.terrain = new THREE.Mesh(new THREE.CylinderBufferGeometry(.71, .71, height, 4, (height+1), false, (Math.PI/4)),
                               new THREE.MeshBasicMaterial({ map: grass}));
                break;
            case 1://rocky
                this.terrain = new THREE.Mesh(new THREE.CylinderBufferGeometry(.71, .71, height, 4, (height+1), false, (Math.PI/4)),
                               new THREE.MeshBasicMaterial({ map: rocks}));            
                break;
            /*case 2://water
                this.terrain = new THREE.Mesh(new THREE.CylinderBufferGeometry(1, 1, height, 4, height),
                               new THREE.MeshBasicMaterial({ map: water }));;
                break;*/
            case 3://gap
                this.terrain = new THREE.Mesh(new THREE.BoxBufferGeometry(1, .1, 1),
                               new THREE.MeshBasicMaterial({ color: 0x000000}));
                break;
            case 4://cave
                this.terrain = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.71, 0.71, height, 4, (height+1), false, (Math.PI/4)),
                               new THREE.MeshBasicMaterial({ map: cave}));            
                break;
            case 8://exit
            this.terrain = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1),
                               new THREE.MeshBasicMaterial({ color: 0xFADADD}));
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
        switch(occupant) {
            case 1://Player
                this.occupant = player;
                break;
            case 2://Placeholder enemy
                this.occupant = enemy;
                break;
            default:
                this.occupant = null;
                break;
        }
    }   

    getFCost() {
        return this.hCost + this.gCost;
    }
}

class Overlay {
    constructor(pos){
        this.pos = pos;
        this.overlay = new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1),
                       new THREE.MeshBasicMaterial( {color: 0x0047AB, transparent: true, opacity: 0.5, visible: false}));
        this.overlay.rotateX(-Math.PI / 2);      
        this.overlay.position.x = this.pos[0];
        this.overlay.position.y = this.pos[1];
        this.overlay.position.z = this.pos[2];
        
    }
}

export {Board, Tile};