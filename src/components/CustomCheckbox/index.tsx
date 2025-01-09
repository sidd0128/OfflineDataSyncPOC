import React, { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import CustomCheckboxProps from '../../types/CustomCheckboxProps';


const CustomCheckbox: FC<CustomCheckboxProps> = ({ options, selectedOptions, onChange }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => onChange(option)}
        >
          <View style={[styles.checkbox, selectedOptions.includes(option) && styles.checkedCheckbox]} />
          <Text style={styles.label}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default CustomCheckbox;
