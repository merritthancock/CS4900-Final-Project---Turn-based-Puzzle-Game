import{Level} from "./Level.js";
import {Cursor} from "./Entities/Cursor.js";
import {Milcap} from "./Entities/Enemies/Milcap.js";
import {Verm} from "./Entities/Enemies/Verm.js";
import {Pinpod} from "./Entities/Enemies/Pinpod.js";
import {Player} from "./Entities/Player.js";

//Variables
let scene;
let scene2;
let levelSelector = 1;
let testLevel;
let testLevel2;
let loadingManager;
let loadingScreen = document.getElementById("loading-screen");

//Loading Manager
loadingManager = new THREE.LoadingManager();
loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    console.log("Loading begins....");
    loadingScreen.style.display = "block";

};
loadingManager.onLoad = function ( ) {
    console.log("Loading complete!");
    loadingScreen.style.display = "none";
};

//Level1-------------------------------------------------------------------------------------------
    let testLevelTileMap = [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 8, 8, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 8, 8, 4],
        [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 9, 4, 0, 0, 0, 4, 4, 4, 4, 4],//mid
        [9, 9, 9, 9, 9, 9, 4, 0, 0, 0, 4, 9, 9, 9, 9, 9, 4, 0, 0, 0, 4, 9, 9, 9, 9],//mid
        [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 9, 9, 9],
    ];
    let testLevelHeightMap = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2], 
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 9, 2, 0, 0, 0, 2, 2, 2, 2, 2],//mid
        [9, 9, 9, 9, 9, 9, 2, 0, 0, 0, 2, 9, 9, 9, 9, 9, 2, 0, 0, 0, 2, 0, 0, 0, 0],//mid
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0]
    ];

    //Create Player
    //let slime = new THREE.TextureLoader().load( './assets/slime.jpg' );
    //let playerBox = new THREE.BoxGeometry(1, 1, 1);
    let playerPos = [2, 1, 2];
    let player = new Player(playerPos, "player", 1);
    //player.moveEntity(playerPos[0], playerPos[1], playerPos[2], player);

    //Create Cursor
    //let cu = new THREE.TextureLoader().load( './assets/yellow.jpg' );
    //let cursorMod = new THREE.CircleBufferGeometry( 0.5, 30 );
    //cursorMod.rotateX(-Math.PI/2);
    let cursorPos = [1, 1.6, 2];
    let cursor = new Cursor(cursorPos, "cursor");
    //cursor.moveEntity(cursorPos[0], cursorPos[1], cursorPos[2], cursor);

    //Create Enemy
    //let skull = new THREE.TextureLoader().load( './assets/skull.jpg' );
    //let enemyBox = new THREE.BoxGeometry(1,1,1);
    let enemyPos = [13, 1, 3];
    let enemy = new Milcap(enemyPos, "enemy", 1, 1);
    //enemy.moveEntity(enemyPos[0], enemyPos[1], enemyPos[2], enemy);
    let enemies = [enemy];

    enemy.path.loop = true;
    enemy.path.add([13, 1, 13]);
    enemy.path.add([17, 1, 13]);
    enemy.path.add([15, 1, 4]);
    enemy.path.add([14, 1, 4]);
    enemy.path.add([13, 1, 3]); 

    //Create Enemy2 (same type as original)
    //let skull2 = new THREE.TextureLoader().load( './assets/skull.jpg' );
    //let enemyBox2 = new THREE.BoxGeometry(1,1,1);
    let enemyPos2 = [8, 1, 17];
    let enemy2 = new Milcap(enemyPos2, "enemy2", .9, 2);

    enemies.push(enemy2);
    //enemy2.moveEntity(enemyPos2[0], enemyPos2[1], enemyPos2[2], enemy2);
    enemy2.path.loop = true;
    enemy2.path.add([8, 1, 23]);
    enemy2.path.add([8, 1, 17]);

    //Create a Verm
    let enemyPos3 = [5, 1, 7];
    let enemy3 = new Verm(enemyPos3, "enemy3", 0.5, 3);

    enemies.push(enemy3);
    enemy3.setNest([5,1,7]);
    enemy3.path.loop = true;
    enemy3.path.add([8, 1, 13]);
    enemy3.path.add([5, 1, 10]);
    enemy3.path.add([1, 1, 13]);

    let skull4 = new THREE.TextureLoader().load( './assets/skull.jpg');
    let enemyBox4 = new THREE.BoxGeometry(1,1,1);
    let enemyPos4 = [17, 1, 18];
    let pinpod1 = new Pinpod(enemyPos4, enemyBox4, skull4, "enemy4", 0.5, 4);

    enemies.push(pinpod1);
    //pinpod1.moveEntity(enemyPos4[0], enemyPos4[1], enemyPos4[2], pinpod1);

    //Create Level
    testLevel = new Level(testLevelHeightMap, testLevelTileMap, enemies, player, cursor);


    //Create Scene
    scene = new THREE.Scene;


    function loadModel(entity, loader) {
        loader.load(
            // resource URL
            entity.url,
            // called when the resource is loaded
            
            function ( gltf ) {
                scene.add(gltf.scene);
                //Set positional data
                let xPos = entity.position[0];
                let yPos = entity.position[1];
                let zPos = entity.position[2];
                gltf.scene.scale.set(.5, .5, .5);
                gltf.scene.position.set(xPos, yPos, zPos);
                entity.model = gltf.scene;
            },
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            }
        );
    }

    function loadBoard(scene, level) {
        for(let i = 0; i < level.board.tileMap.length; i++){
            for(let j = 0; j < level.board.tileMap[0].length; j++){
                if(level.board.tileArray[i][j].terrain != null){
                    scene.add(level.board.tileArray[i][j].terrain);
                    scene.add(level.board.overlayMap[i][j].overlay);
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

        /*COMMENTED OUT BECAUSE OF NEW LOADING MECHANICS
        //add player to the scene
        scene.add(level.player.mesh);
        //add cursor to the scene
        scene.add(level.cursor.mesh);
        //add enemy to the scene
        for(let i = 0; i < enemies.length; i++){
            scene.add(level.enemies[i].mesh);
        }*/
    }

    function loadLevel(scene, level){
        let loader = new THREE.GLTFLoader(loadingManager).setPath( './assets/GLTFModels/' );

        //Load enemy models
        for(let i = 0; i < level.enemies.length; i++) {
            loadModel(level.enemies[i], loader);
        }
        //Load player model
        loadModel(level.player, loader);
        //Load cursor model
        loadModel(level.cursor, loader);

        loadBoard(scene, level);
    }

    //loadLevel(scene, testLevel);

    /*
    //Level 2---------------------------------------------------------------------------------------------------
    let testLevelTileMap2 = [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 8, 8, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 8, 8, 4],
        [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 4, 4, 0, 4, 4, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 4, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 9, 4, 0, 0, 0, 4, 4, 4, 4, 4],//mid
        [9, 9, 9, 9, 9, 9, 4, 0, 0, 0, 4, 9, 9, 9, 9, 9, 4, 0, 0, 0, 4, 9, 9, 9, 9],//mid
        [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 9, 9, 9],
    ];
    let testLevelHeightMap2 = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2], 
        [2, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 1, 2, 2, 2, 2, 1, 4, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 1, 2, 3, 3, 3, 1, 4, 4, 0, 4, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 1, 2, 3 , 4, 3, 1, 4, 4, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 1, 2, 2, 2, 2, 1, 4, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 9, 2, 0, 0, 0, 2, 2, 2, 2, 2],//mid
        [9, 9, 9, 9, 9, 9, 2, 0, 0, 0, 2, 9, 9, 9, 9, 9, 2, 0, 0, 0, 2, 0, 0, 0, 0],//mid
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0]
    ];

    //Create Player
    let slime2 = new THREE.TextureLoader().load( './assets/slime.jpg' );
    let playerBox2 = new THREE.BoxGeometry(1, 1, 1);
    let playerPos2 = [2, 1, 2];
    let player2 = new Player(playerPos2, playerBox2, slime2, "player", 1);
    player2.moveEntity(playerPos2[0], playerPos2[1], playerPos2[2], player2);
    
    //Create Cursor
    let cu2 = new THREE.TextureLoader().load( './assets/yellow.jpg' );
    let cursorMod2 = new THREE.CircleBufferGeometry( 0.5, 30 );
    cursorMod2.rotateX(-Math.PI/2);
    let cursorPos2 = [1, 1.6, 2];
    let cursor2 = new Cursor(cursorPos, cursorMod2, cu2, "cursor");
    cursor2.moveEntity(cursorPos2[0], cursorPos2[1], cursorPos2[2], cursor2);

    //Create Enemy
    let skull2a = new THREE.TextureLoader().load( './assets/skull.jpg' );
    let enemyBox2a = new THREE.BoxGeometry(1,1,1);
    let enemyPos2a = [13, 1, 3];
    let enemy2a = new Milcap(enemyPos2a, enemyBox2a, skull2a, "enemy", 1, 1);
    enemy2a.moveEntity(enemyPos2a[0], enemyPos2a[1], enemyPos2a[2], enemy2a);
    let enemies2 = [enemy2a];

    enemy2a.path.loop = true;
    enemy2a.path.add([13, 1, 13]);
    enemy2a.path.add([17, 1, 13]);
    enemy2a.path.add([15, 1, 4]);
    enemy2a.path.add([14, 1, 4]);
    enemy2a.path.add([13, 1, 3]); 

    //Create Enemy2 (same type as original)
    let skull2 = new THREE.TextureLoader().load( './assets/skull.jpg' );
    let enemyBox2 = new THREE.BoxGeometry(1,1,1);
    let enemyPos2 = [8, 1, 17];
    let enemy2 = new Milcap(enemyPos2, enemyBox2, skull2, "enemy2", .9, 2);

    enemies.push(enemy2);
    enemy2.moveEntity(enemyPos2[0], enemyPos2[1], enemyPos2[2], enemy2);
    enemy2.path.loop = true;
    enemy2.path.add([8, 1, 23]);
    enemy2.path.add([8, 1, 17]);

    //Create Level
    let testLevel2 = new Level(testLevelHeightMap2, testLevelTileMap2, enemies2, player2, cursor2);

    //Create Scene
    scene2 = new THREE.Scene;

    function loadLevel2(scene2, testLevel2){

        loadBoard2(scene2, testLevel2);
    }

    function loadBoard2(scene2, testLevel2) {
        for(let i = 0; i < testLevel2.board.tileMap.length; i++){
            for(let j = 0; j < testLevel2.board.tileMap[0].length; j++){
                if(testLevel2.board.tileArray[i][j].terrain != null){
                    scene2.add(testLevel2.board.tileArray[i][j].terrain);
                    scene2.add(testLevel2.board.overlayMap[i][j].overlay);
                }
            }
        }

        // create lighting and add to scene 
        let light = new THREE.AmbientLight( 0xe0e0e0 ); // soft white light
        scene2.add(light);


        //Set up the skybox
        let sky = new THREE.TextureLoader().load( './assets/Slimegamesky.jpg' );
        let skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
        let skyboxMaterial = new THREE.MeshBasicMaterial({  map: sky, side: THREE.BackSide });
        let skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
        scene2.add(skybox);

        //add player to the scene
        scene2.add(testLevel2.player.mesh);
        //add cursor to the scene
        scene2.add(testLevel2.cursor.mesh);
        //add enemy to the scene //TODO: Add array compatibility for board
        for(let i = 0; i < enemies2.length; i++){
            scene2.add(testLevel2.enemies[i].mesh);
        }
    }

    loadLevel2(scene2, testLevel2);
    //currentLevel = testLevel2;
    */
export {scene};
//export {scene2}
export {testLevel};
//export {testLevel2}
export {loadLevel};

