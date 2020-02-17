//Define a lock mechanism to hold the input state until processing finishes
var unlocked = true;

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
    }

    //If unlocked, lock the boolean and then process input.
    //The lock will be released in inputHandling()
    if(unlocked) {
        unlocked = false;

        //Seperate switch statement for blocking inputs
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
    //Call updateRender to process current input
    updateRender();
    //Lastly, release the lock to allow other blocking calls to activate
    unlocked = true;
}

function doKeyUp(event) {
	var code = event.keyCode;

	switch(code) {
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

