const initialState = {
    topRow: [0,0,0],
    middleRow: [0,0,0],
    bottomRow: [0,0,0],

}

const UPDATE_TOP_ROW = 'UPDATE_TOP_ROW'
const UPDATE_MIDDLE_ROW = 'UPDATE_MIDDLE_ROW'
const UPDATE_BOTTOM_ROW = 'UPDATE_BOTTOM_ROW'
const CLEAR_BOARD = "CLEAR_BOARD"

export function updateTopRow(topRow){
    return {
        type: UPDATE_TOP_ROW,
        payload: topRow
    
    }
}
export function updateMiddleRow(middleRow){
    return {
        type: UPDATE_MIDDLE_ROW,
        payload: middleRow
    
    }
}
export function updateBottomRow(bottomRow){
    return {
        type: UPDATE_BOTTOM_ROW,
        payload: bottomRow
    
    }
}
export function clearBoard(){
    return{
        type: CLEAR_BOARD
    }
}

export default function rows_reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_TOP_ROW:
            const{topRow} = payload
            return {...state, topRow}
        case UPDATE_MIDDLE_ROW:
            const{middleRow} = payload
            return {...state, middleRow}
        case UPDATE_BOTTOM_ROW:
            const{bottomRow} = payload
            return {...state, bottomRow}
        case CLEAR_BOARD:
            return {...state, topRow:[0,0,0], middleRow:[0,0,0], bottomRow:[0,0,0]}
        default:
            return state
    }
}

