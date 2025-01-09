import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  mapContainer: {
    height: 200,
    width: '100%',
  },
  map: {
    height: 200,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
});

export const autoCompleteStyles = {
  textInputContainer: {
    backgroundColor: 'grey',
  },
  textInput: {
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
};

export default styles;
