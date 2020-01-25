//Define variables to store status of each used key
var leftArrow = false
var upArrow = false
var rightArrow = false
var downArrow = false

var qKey = false
var eKey = false

var wKey = false
var aKey = false
var sKey = false
var dKey = false

function doKeyDown(event) {
	var code = event.keyCode;

	switch(code) {
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
	}
}

function doKeyUp(event) {
	var code = event.keyCode;

	switch(code) {
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
	}	
}