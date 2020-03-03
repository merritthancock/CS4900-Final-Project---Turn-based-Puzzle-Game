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
    }
}

function doKeyUp(event) {
	var code = event.keyCode;

	switch(code) {
        //Cases for WASD keys
        case 87: //w
            keyStatus["wKey"] = false;
            releaseLock();
            break;
        case 65: //a
            keyStatus["aKey"] = false;
            releaseLock();
            break;
        case 83: //s
            keyStatus["sKey"] = false;
            releaseLock();
            break;
        case 68: //d
            keyStatus["dKey"] = false;
            releaseLock();
            break;

        //Case for Spacebar and enter
        case 32: //space
            keyStatus["space"] = false;
            releaseLock();
            break;

        case 13: //enter
            keyStatus["enter"] = false;
            releaseLock();
            break;
        
        case 77: //m key for testing enemy pathing
            keyStatus["mKey"] = false;
            releaseLock();
            break;
    }
}

export {doKeyDown, doKeyUp, keyStatus, unlocked};