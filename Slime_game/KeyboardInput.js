import {unlocked, releaseLock} from "./Semaphore.js";

//Define a dictionary to store status of each bound key
var keyStatus = {
    "wKey" : false,
    "aKey" : false,
    "sKey" : false,
    "dKey" : false,
    "space" : false,
    "enter" : false
}

function doKeyDown(event) {
    var code = event.keyCode;
    switch(code) {
        //Cases for WASD keys
        case 87: //w
            keyStatus["wKey"] = true;
            break;
        case 65: //a
            keyStatus["aKey"] = true;
            break;
        case 83: //s
            keyStatus["sKey"] = true;
            break;
        case 68: //d
            keyStatus["dKey"] = true;
            break;
        //Case for Spacebar and enter
        case 32: //space
            keyStatus["space"] = true;
            break;
        case 13: //enter
            keyStatus["enter"] = true;
            break;

        case 77: //m key (For testing enemy pathing)
            keyStatus["mKey"] = true;
            break;
        
        /*case 71: //g key for testing win screen
            keyStatus["gKey"] = true;
            break;*/
    }
}

function doKeyUp(event) {
	var code = event.keyCode;
	switch(code) {
        //Cases for WASD keys
        case 87: //w
            keyStatus["wKey"] = false;
            releaseLock("inputHandler");
            break;
        case 65: //a
            keyStatus["aKey"] = false;
            releaseLock("inputHandler");
            break;
        case 83: //s
            keyStatus["sKey"] = false;
            releaseLock("inputHandler");
            break;
        case 68: //d
            keyStatus["dKey"] = false;
            releaseLock("inputHandler");
            break;
        //Case for Spacebar and enter
        case 32: //space
            keyStatus["space"] = false;
            releaseLock("inputHandler");
            break;
        case 13: //enter
            keyStatus["enter"] = false;
            releaseLock("inputHandler");
            break;
        case 77: //m key for testing enemy pathing
            keyStatus["mKey"] = false;
            releaseLock("inputHandler");
            break;
        /*case 71: //g key for testing win screen
            keyStatus["gKey"] = false;
            releaseLock("inputHandler");
            break;*/
    }
}

export {doKeyDown, doKeyUp, keyStatus, unlocked};