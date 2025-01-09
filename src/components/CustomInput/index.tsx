import React, { FC } from 'react';
import styles from './styles';
import { View, Text, TextInput } from 'react-native';
import CustomInputProps from '../../types/CustomInputProps';

const CustomInput: FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  disabled,
  multiline = false,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, multiline && styles.textarea]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      editable={disabled}
    />
  </View>
);

export default CustomInput;
