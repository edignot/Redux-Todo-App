// CONVENTION - NEW FILE FOR EACH REDUCER 
// ALL REDUCERS COMBINED MAKE UP THE STORE

// CREATING THE STORE:
import { combineReducers } from 'redux'
import { todos } from './todos'

const rootReducer = combineReducers({
    todos,
})

export default rootReducer