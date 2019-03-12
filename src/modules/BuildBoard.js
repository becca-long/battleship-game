function buildBoard(initialState, height, width) {

    for (let i = 0; i < height; i++) {
    initialState.push([]);
    for (let j = 0; j < width; j++) {
        initialState[i][j] = {
            row: i,
            column: j,
            isClicked: false,
            isEmpty: true,
        }
    }}

}

export default buildBoard