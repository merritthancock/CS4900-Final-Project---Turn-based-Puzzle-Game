//Define variables to store status of each used key
var leftArrow = false;
var upArrow = false;
var rightArrow = false;
var downArrow = false;

var qKey = false;
var eKey = false;

var wKey = false;
var aKey = false;
var sKey = false;
var dKey = false;

function doKeyDown(event) {
	var code = event.keyCode;

	switch(code) {
        //Cases for the arrow keys, currently bound to camera controls
        case 37: // <
			leftArrow = true;
			break;
		case 39: // >
			rightArrow = true;
			break;
		case 38: // ^
			upArrow = true;
			break;
		case 40: // v
			downArrow = true;
            break;
            
        //Cases for the q and e keys
        case 81: //q
            qKey = true;
            break;
        case 69: //e
            eKey = true;
            break;

        //Cases for WASD keys
        case 87: //w
            wKey = true;
            break;
        case 65: //a
            aKey = true;
            break;
        case 83: //s
            sKey = true;
            break;
        case 68: //d
            dKey = true;
            break;
	}
}

function doKeyUp(event) {
	var code = event.keyCode;

	switch(code) {
        //Cases for the arrow keys, currently bound to camera controls
        case 37: // <
			leftArrow = false;
			break;
		case 39: // >
			rightArrow = false;
			break;
		case 38: // ^
			upArrow = false;
			break;
		case 40: // v
			downArrow = false;
            break;
            
        //Cases for the q and e keys
        case 81: //q
            qKey = false;
            break;
        case 69: //e
            eKey = false;
            break;

        //Cases for WASD keys
        case 87: //w
            wKey = false;
            break;
        case 65: //a
            aKey = false;
            break;
        case 83: //s
            sKey = false;
            break;
        case 68: //d
            dKey = false;
            break;
	}
}