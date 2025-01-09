import React, { FC } from 'react';
import styles from './styles';

import { View, Text, TouchableOpacity } from 'react-native';
import CustomChipsProps from '../../types/CustomChipsProps';



const CustomChips: FC<CustomChipsProps> = ({
  options,
  selectedOptions,
  onSelect,
}) => (
  <View style={styles.container}>
    {options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.chip,
          selectedOptions.includes(option) && styles.selectedChip,
        ]}
        onPress={() => onSelect(option)}
      >
        <Text
          style={[
            styles.chipText,
            selectedOptions.includes(option) && styles.selectedChipText,
          ]}
        >
          {option}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CustomChips;
