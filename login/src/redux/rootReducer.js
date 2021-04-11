import { combineReducers } from 'redux'


//Import all the reducers
import userReducer from '../redux/reducer/userReducer'



export default combineReducers({
    userRegister : userReducer
})



