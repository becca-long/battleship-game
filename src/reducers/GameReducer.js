import buildBoard from '../modules/BuildBoard'
import plantShips from '../modules/PlantShips'

const initialState = {
    board: [],
}

const gameReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INIT_BOARD':
            const initialBoard = state.board.slice()
            buildBoard(initialBoard, action.height, action.width)
            plantShips(initialBoard, action.width)
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