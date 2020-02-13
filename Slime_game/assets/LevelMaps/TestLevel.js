

function createTestLevel(){
    var testLevelTileMap = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1]
    ];
    var testLevelHeightMap = [
        [2, 1, 1, 1, 1],
        [1, 1, 2, 2, 2],
        [1, 3, 4, 3, 2],
        [1, 3, 3, 3, 2],
        [1, 1, 1, 1, 3]
    ];
    var testLevelPlayer = [];
    var testLevelEnemies = [];

    testBoard = new Board(testLevelTileMap, testLevelHeightMap, null, null);

    return testBoard;
}