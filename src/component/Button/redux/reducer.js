import {INCREMENT_NUMBER, DECREMENT_NUMBER} from './actionConstant';

const initialState = {
    number: 0
}

const ButtonReducer = (state= initialState, action= {})=>{
switch(action.type){
case INCREMENT_NUMBER:
    return {
number: state.number +1
    }
    case DECREMENT_NUMBER:
        return {
    number: state.number -1
        }
        default:
            return state;
}
}
export default ButtonReducer;