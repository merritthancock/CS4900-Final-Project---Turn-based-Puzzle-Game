var unlocked = true;

function getLock() {
    unlocked = false;
}

function releaseLock() {
    unlocked = true;
}

export {getLock, releaseLock, unlocked};