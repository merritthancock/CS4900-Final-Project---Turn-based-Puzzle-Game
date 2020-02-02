var pStatus; //the current ability status of the player

function setStatus(status){//sets player status (status must be a string)
    pStatus = status;
}

function getStatus(){
    return pStatus;
}

function decStatus(){//decrements current status counter based on turns


}

function checkWings(){//checks for wing ability
    if(pStatus == 'fly'){
        return true;
    }
    else{ 
        return false;
    }
}

function checkSwim(){//checks for aquatic ability
    if(pStatus == 'swim'){
        return true;
    }
    else{
        return false;
    }
}