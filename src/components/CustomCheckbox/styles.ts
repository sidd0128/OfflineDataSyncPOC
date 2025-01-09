import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: { flexDirection: 'column', marginVertical: 10 },
  optionContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
  },
  checkedCheckbox: { backgroundColor: '#007BFF' },
  label: { fontSize: 16 },
});
