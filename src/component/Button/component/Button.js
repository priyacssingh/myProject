import React from 'react';
import {View} from 'react-native';
import {Label, Button} from '../../../container';
import Styles from './ButtonStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increment, decrement} from '../redux/action';

const ButtonComponent = (props)=>{
    return(
        <View style={Styles.container}>
        <Label labelText={'Number:   ' + props.number}/>
        <View style={Styles.button}>
        <Button ButtonText={'Increment'} ButtonPress={props.increment}/>
        <Button ButtonText={'Decrement'} ButtonPress={props.decrement}/>
        </View>
        </View>
    )
}

const mapStateToProps=(state)=>{
    const {ButtonReducer:{number}} = state;
return{ number}
}
const mapDispatchToProps = (dispatch)=>{
    return{
        increment: bindActionCreators(increment, dispatch),
decrement: bindActionCreators(decrement, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);