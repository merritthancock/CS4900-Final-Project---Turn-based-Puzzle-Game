//Define a lock mechanism to hold the input state until processing finishes
var unlocked = true;

//Define a dictionary to store status of each bound key
var keyStatus = {
    "leftArrow" : false,
    "rightArrow" : false,
    "upArrow" : false,
    "downArrow" : false,

    "qKey" : false,
    "eKey" : false,

    "wKey" : false,
    "aKey" : false,
    "sKey" : false,
    "dKey" : false
}

function doKeyDown(event) {
    var code = event.keyCode;

    switch(code) {
        //Cases for the arrow keys, currently bound to camera controls
        case 37: // <
            keyStatus["leftArrow"] = true;
            rotateCamera();
            break;
        case 39: // >
            keyStatus["rightArrow"] = true;
            rotateCamera();
            break;
        case 38: // ^
            keyStatus["upArrow"] = true;
            rotateCamera();
            break;
        case 40: // v
            keyStatus["downArrow"] = true;
            rotateCamera();
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
                moveForward();
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
            
        //Cases for the q and e keys
        case 81: //q
            keyStatus["qKey"] = false;
            break;
        case 69: //e
            keyStatus["eKey"] = false;
            break;

        //Cases for WASD keys
        case 87: //w
            keyStatus["wKey"] = false;
            break;
        case 65: //a
            keyStatus["aKey"] = false;
            break;
        case 83: //s
            keyStatus["sKey"] = false;
            break;
        case 68: //d
            keyStatus["dKey"] = false;
            break;
	}
}