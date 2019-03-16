import buildBoard from '../modules/BuildBoard'
import plantShips from '../modules/PlantShips'
import checkForHit from '../modules/CheckForHit'

const initialState = {
    board: [],
    ships: null,
    hits: 0,
    clicks: 0,
    whereHit: {}
}

const gameReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INIT_BOARD':
            const initialBoard = state.board.slice()
            buildBoard(initialBoard, action.height, action.width)
            let ships = plantShips(initialBoard, action.width)
            return {
                ...state,
                board: initialBoard,
                ships: ships,
            };

        case 'CELL_IS_CLICKED':
            if (state.whereHit[action.rowIndex + "," + action.cellIndex]) {
                return {
                    ...state,
                }
            } else {
                state.whereHit[action.rowIndex + "," + action.cellIndex] = true
            }

            const newBoard = state.board.slice()
            newBoard[action.rowIndex][action.cellIndex].isClicked = newBoard[action.rowIndex][action.cellIndex].isClicked === false ? true : true
            let totalClicks = state.clicks + 1
            let hit = checkForHit(newBoard, action.rowIndex, action.cellIndex, action.isEmpty, action.isClicked) ? state.hits + 1 : state.hits
            
            return {
                ...state,
                board: newBoard,
                clicks: totalClicks, 
                hits: hit
        }

        case 'REFRESH_BOARD':
            const refreshedBoard = initialState.board.slice()
            buildBoard(refreshedBoard, action.height, action.width)
            let newShips = plantShips(refreshedBoard, action.width)
            return {
                board: refreshedBoard,
                ships: newShips,
                hits: 0,
                clicks: 0,
                whereHit: {}
            };


        default: 
            return state;
    }
    
}

export default gameReducer;