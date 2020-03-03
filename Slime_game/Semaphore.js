var lockOwner = null;
var unlocked = true;

function getLock(requester) {
    if(unlocked){
        unlocked = false;
        lockOwner = requester;
    }
}

function releaseLock(requester) {
    //Check if the lockowner is the one asking to release the lock
    if(requester == lockOwner){
        unlocked = true;
        lockOwner = null;
    }
}

export {getLock, releaseLock, unlocked};