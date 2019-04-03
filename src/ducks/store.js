import {createStore, combineReducers} from 'redux'
import player_reducer from './player_reducer'
import rows_reducer from './rows_reducer'

const rootReducer = combineReducers({player_reducer, rows_reducer})

export default createStore(rootReducer)