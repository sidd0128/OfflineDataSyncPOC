import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './screens/FormScreen';
import ListScreen from './screens/ListScreen';
import MyBackgroundService from './services/backgroundService';
import 'react-native-get-random-values';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    const service = MyBackgroundService.getInstance();
    service.startService();

    return () => {
      service.stopService();
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
