import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 },
  chip: {
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 5,
  },
  selectedChip: { backgroundColor: '#007BFF' },
  chipText: { fontSize: 14, color: '#007BFF' },
  selectedChipText: { color: '#FFF' },
});
