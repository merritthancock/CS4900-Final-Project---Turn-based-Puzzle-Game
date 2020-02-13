//Define a lock mechanism to hold the input state until processing finishes
var unlocked = true;

//Define a dictionary to store status of each bound key
var keyStatus = {
    "leftArrow" : false,
    "rightArrow" : false,
    "upArrow" : false,
    "downArrow" : false,

    "qKey" : false,
    "rKey" : false,
    "eKey" : false,

    "PKey" : false,
    "oKey" : false,

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
        //Cases for the arrow keys, currently bound to camera controls
        case 37: // <
            keyStatus["leftArrow"] = true;
            break;
        case 39: // >
            keyStatus["rightArrow"] = true;
            break;
        case 38: // ^
            keyStatus["upArrow"] = true;
            break;
        case 40: // v
            keyStatus["downArrow"] = true;
            break;
            
        //Cases for the q r and e keys
        case 81: //q
            keyStatus["qKey"] = true;
            break;
        case 82: //r
            keyStatus["rKey"] = true;
            break;
        case 69: //e
            keyStatus["eKey"] = true;
            break;

        //Cases for O and P
        case 79: //O
            keyStatus["oKey"] = true;
            break;
        case 80: //p
            keyStatus["pKey"] = true;
            break;

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
    }

    //If unlocked, lock the boolean and then process input.
    //The lock will be released in inputHandling()
    if(unlocked) {
        unlocked = false;

        //Seperate switch statement for blocking inputs
        switch(code) {
            //Cases for the q and e keys
            case 81: //q
                keyStatus["qKey"] = true;
                break;
            case 69: //e
                keyStatus["eKey"] = true;
                break;

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
            case 32: //spacebar
                keyStatus["space"] = true;
                break;
            case 13: //enter
                keyStatus["enter"] = true;
                break;
        }
        
        //Move to input_handler to finish processing
        inputHandling();
    }
}

function inputHandling() {
    //Lastly, release the lock to allow other blocking calls to activate
    unlocked = true;
}

function doKeyUp(event) {
	var code = event.keyCode;

	switch(code) {
        //Cases for the arrow keys, currently bound to camera controls
        case 37: // <
			keyStatus["leftArrow"] = false;
			break;
		case 39: // >
			keyStatus["rightArrow"] = false;
			break;
		case 38: // ^
			keyStatus["upArrow"] = false;
			break;
		case 40: // v
			keyStatus["downArrow"] = false;
            break;
            
        //Cases for the q r and e keys
        case 81: //q
            keyStatus["qKey"] = false;
            break;
        case 82: //r
            keyStatus["rKey"] = false;
            break;
        case 69: //e
            keyStatus["eKey"] = false;
            break;
        
        //Cases for O and P
        case 79: //O
            keyStatus["oKey"] = false;
            break;
        case 80: //p
            keyStatus["pKey"] = false;
            break;
        
        //Cases for WASD keys
        case 87: //w
            keyStatus["wKey"] = false;
            movementUnlocked = true;
            break;
        case 65: //a
            keyStatus["aKey"] = false;
            movementUnlocked = true;
            break;
        case 83: //s
            keyStatus["sKey"] = false;
            movementUnlocked = true;
            break;
        case 68: //d
            keyStatus["dKey"] = false;
            movementUnlocked = true;
            break;

        //Case for Spacebar and enter
        case 32: //space
            keyStatus["space"] = false;
            movementUnlocked = true;
            break;

        case 13: //enter
            keyStatus["enter"] = false;
            movementUnlocked = true;
            break;
    }
}

