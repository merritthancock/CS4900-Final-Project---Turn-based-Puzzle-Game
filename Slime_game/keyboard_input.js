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
    "dKey" : false
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
	}
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
/*
function doKeyPress(event){
    var code = event.keyCode;

    switch(code){

        //Cases for WASD keys
        case 87: //w
            moveForward();
            
        case 65: //a
            moveLeft();
        
        case 83: //s
            moveBackward();
        
        case 68: //d

            moveRight();
        
    }
    
}
*/

