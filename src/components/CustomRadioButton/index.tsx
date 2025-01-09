import React, { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import CustomRadioButtonProps from '../../types/CustomRadioButtonProps';


const CustomRadioButton: FC<CustomRadioButtonProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => onSelect(option)}
        >
          <View style={[styles.circle, selectedOption === option && styles.selectedCircle]} />
          <Text style={styles.label}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default CustomRadioButton;
