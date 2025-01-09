import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: { flexDirection: 'column', marginVertical: 10 },
  optionContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
  },
  selectedCircle: { backgroundColor: '#007BFF' },
  label: { fontSize: 16 },
});
