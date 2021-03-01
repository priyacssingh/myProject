import {INCREMENT_NUMBER, DECREMENT_NUMBER} from './actionConstant';


export const increment= ()=>{
    return function (dispatch){
dispatch({
    type: INCREMENT_NUMBER,
})
    }
}

export const decrement= ()=>{
    return function (dispatch){
dispatch({
    type: DECREMENT_NUMBER,
})
    }
}