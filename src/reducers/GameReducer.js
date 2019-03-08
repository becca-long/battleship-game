const initialState = {
    board: [],
}


const gameReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INIT_BOARD':
            const initialBoard = state.board.slice()
            for (let i = 0; i < action.height; i++) {
                initialBoard.push([]);
                for (let j = 0; j < action.width; j++) {
                    initialBoard[i][j] = {
                        row: i,
                        column: j,
                        isClicked: false,
                        isEmpty: true,
                    }
                }
            };
            return {
                board: initialBoard
            };

        case 'CELL_IS_CLICKED':
            const newBoard = state.board.slice()
            newBoard[action.rowIndex][action.cellIndex].isClicked = newBoard[action.rowIndex][action.cellIndex].isClicked === false ? true : false
            return {
                board: newBoard
        }



        default: 
            return state;
    }
    
}

export default gameReducer;