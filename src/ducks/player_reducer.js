const initialState = {
    cross: false,
    circle: false

}

const UPDATE_CROSS = "UPDATE_CROSS"
const UPDATE_CIRCLE = "UPDATE_CIRCLE"
const CLEAR_PLAYERS = "CLEAR_PLAYERS"



export function updateCross(){
    return {
        type: UPDATE_CROSS,
    }
}
export function updateCircle(){
    return {
        type: UPDATE_CIRCLE,
    }
}
export default function player_reducer(state = initialState, action) {
    const {type} = action
    switch(type) {
        case UPDATE_CROSS:
            return {...state, cross:true, circle:false}
        case UPDATE_CIRCLE:
            return {...state, circle:true, cross:false}
        case CLEAR_PLAYERS:
            return{...state, circle:false, cross:false}
        default:
            return state
    }
}

