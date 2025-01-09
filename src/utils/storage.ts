import AsyncStorage from '@react-native-async-storage/async-storage';
import FormData from '../types/FormData';
import { DeviceEventEmitter } from 'react-native';

export const saveForm = async (form: FormData) => {
  const data = await AsyncStorage.getItem('forms');
  const forms = data ? JSON.parse(data) : [];
  forms.push(form);
  await AsyncStorage.setItem('forms', JSON.stringify(forms));
};

export const updateForm = async (form: FormData) => {
  const data = await AsyncStorage.getItem('forms');
  const forms = data ? JSON.parse(data) : [];
  const updatedForms = forms.map((f: FormData) =>
    f.name === form.name ? form : f
  );
  await AsyncStorage.setItem('forms', JSON.stringify(updatedForms));
  DeviceEventEmitter.emit('refreshForms');
};
