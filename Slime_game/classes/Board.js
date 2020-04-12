import {movementOverlayHelper, wipeOverlay} from "./Pathing.js";

class Board {
    constructor(resourceTracker, tileMap, heightMap, player, enemies, cursor){
        this.cursor = cursor;
        this.selected = null;

        //Added these for LevelManager
        this.tileMap = tileMap;
        this.heightMap = heightMap;
        this.textures = []
        
        this.textures.push(new THREE.TextureLoader().load( './assets/grass64.jpg' ));
        this.textures.push(new THREE.TextureLoader().load( './assets/water.jpg' ));
        this.textures.push(new THREE.TextureLoader().load( './assets/mountain.jpg' ));
        this.textures.push(new THREE.TextureLoader().load( './assets/cave64.jpg' ));

        this.tileArray = [];
        this.overlayMap = [];
        for(let i = 0; i < tileMap.length; i++){
            this.tileArray[i] = [];
            this.overlayMap[i] = [];
            for(let j = 0; j < tileMap[0].length; j++){
                this.tileArray[i][j] = new Tile(resourceTracker, [i, heightMap[i][j] / 2 + 0.5, j], heightMap[i][j], tileMap[i][j], this.textures);
                this.overlayMap[i][j] = new Overlay(resourceTracker, [i, heightMap[i][j] + 1.1, j]);
            }
        }
        //Loop through enemies list, get each enemy's position, and place them in the corresponding
        //tileArray coordinates' occupant field.
        for(let i = 0; i < enemies.length; i++) {
            let x = enemies[i].position[0];
            let y = enemies[i].position[2];
            this.tileArray[x][y].occupant = enemies[i];
        }
        //Set player's position on the board
        this.tileArray[player.position[0]][player.position[2]].occupant = player;
    }

    select(entity){
        //if nothing is selected, go ahead and select, then expand overlay
        if(this.selected == null){
            this.selected = entity;
            console.log(this.selected.id);
            movementOverlayHelper(this, entity);
        }
        //if selecting the same entity a second time, deselect and wipe overlay
        else if(entity.id == this.selected.id){
            this.selected = null;
            wipeOverlay(this);
        }
    }
}

class Tile {
    constructor(resourceTracker, position, height, type, textures){

        this.position = position;
        this.height = height;
        this.type = type;
        /*
        let grass = new THREE.TextureLoader().load( './assets/grass64.jpg' );
        let water = new THREE.TextureLoader().load( './assets/water.jpg' );
        let rocks = new THREE.TextureLoader().load( './assets/mountain.jpg' );
        let cave = new THREE.TextureLoader().load( './assets/cave64.jpg' );
        */
        switch(type){
            case 0://grass
                this.terrain = resourceTracker.track(new THREE.Mesh(
                    new THREE.CylinderBufferGeometry(.71, .71, height+1, 4, (height+1), false, (Math.PI/4)),
                    new THREE.MeshBasicMaterial({ map: textures[0]}))
                );
                break;
            case 1://rock
                this.terrain = resourceTracker.track(new THREE.Mesh(
                    new THREE.CylinderBufferGeometry(.71, .71, height+1, 4, (height+1), false, (Math.PI/4))),
                    new THREE.MeshBasicMaterial({ map: textures[2]})
                );
                break;
            /*case 2://water
                this.terrain = new THREE.Mesh(new THREE.CylinderBufferGeometry(1, 1, height, 4, height),
                               new THREE.MeshBasicMaterial({ map: water }));;
                break;*/
            case 3://gap
                this.terrain = resourceTracker.track(new THREE.Mesh(
                    new THREE.BoxBufferGeometry(1, .1, 1)),
                    new THREE.MeshBasicMaterial({ color: 0x000000})
                );
                break;
            case 4://cave
                this.terrain = resourceTracker.track(new THREE.Mesh(
                    new THREE.CylinderBufferGeometry(.71, .71, height+1, 4, (height+1), false, (Math.PI/4))),
                    new THREE.MeshBasicMaterial({ map: textures[3]})
                );
                break;
            case 8://exit
                this.terrain = resourceTracker.track(new THREE.Mesh(
                    new THREE.BoxBufferGeometry(1, 1, 1)),
                    new THREE.MeshLambertMaterial({ color: 0xFADADD, emissive: 0XFF69B4})
                );
                break;
            default:
                this.terrain = null;
                break;
        }
        if(this.terrain != null){
            //Set position
            this.terrain.position.x = this.position[0];
            this.terrain.position.y = this.position[1];
            this.terrain.position.z = this.position[2];
        }
    }   
}

class Overlay {
    constructor(resourceTracker, pos){
        this.pos = pos;
        this.overlay = resourceTracker.track(new THREE.Mesh(
            new THREE.PlaneBufferGeometry(0.9,0.9)),
            new THREE.MeshBasicMaterial( {color: 0x0047AB, transparent: true, opacity: 0.5, visible: false})
        );
        this.overlay.rotateX(-Math.PI / 2);      
        this.overlay.position.x = this.pos[0];
        this.overlay.position.y = this.pos[1];
        this.overlay.position.z = this.pos[2];
    }
}

export {Board, Tile};