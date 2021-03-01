import React from 'react';
import { Text} from 'react-native';
import Styles from './labelStyles';

const Label = (props)=>{
    const {labelText} = props;
    return (
    <Text style={Styles.label}>{labelText}</Text>
    )
}
export default Label;