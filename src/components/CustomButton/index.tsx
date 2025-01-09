import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import CustomButtonProps from '../../types/CustomButtonProps';


const CustomButton: FC<CustomButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);


export default CustomButton;
