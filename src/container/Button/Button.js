import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import Styles from './ButtonStyles';

const Button = (props)=>{
    const {ButtonText, ButtonPress} = props;
    return (
<TouchableOpacity style={Styles.button} onPress={ButtonPress}>
    <Text style={Styles.text}>{ButtonText}</Text>
</TouchableOpacity>
    )
}
export default Button;