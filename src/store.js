import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import habboReducer from './reducers/habboReducer'
import userReducer from './reducers/userReducer'

export default createStore(combineReducers({
    user: userReducer,
    form: formReducer,
    habbo: habboReducer
}))