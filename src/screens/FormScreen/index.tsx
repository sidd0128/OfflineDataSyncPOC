import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomMap from '../../components/CustomMap';
import CustomChips from '../../components/CustomChips';
import CustomRadioButton from '../../components/CustomRadioButton';
import CustomCheckbox from '../../components/CustomCheckbox';
import CustomButton from '../../components/CustomButton';
import { saveForm, updateForm } from '../../utils/storage';
import NavigationProps from '../../types/NavigationProps';
import FormData from '../../types/FormData';
import styles from './styles';


const FormScreen = ({ route,navigation }: NavigationProps) => {
  const { mode,form } = route.params;
  const [updatedForm, setUpdatedForm] = useState(form);
  const [formData, setFormData] = useState<FormData>({
    profession: '',
    name: '',
    lastName: '',
    location: null,
    about: '',
    gender: '',
    interests: [],
    favoriteColors: [],
    place: '',
    latitude: '',
    longitude: '',
  });

  const handleTextInputChange = (field: keyof FormData, value: any) => {
    mode === 'new' ? setFormData({ ...formData, [field]: value }) : setUpdatedForm({ ...updatedForm, [field]: value  });
  };


const renderTextInput = (
    label: string,
    placeholder: string,
    key: keyof FormData,
    multiline?: boolean
) => {
    return (
        <CustomInput
        label={label ?? ''}
        placeholder={placeholder ?? ''}
        value={mode === 'new' ? formData[key] : updatedForm[key]}
        onChangeText={(text) => handleTextInputChange(key, text)}
        multiline={multiline ?? false}
        disabled={mode !== 'new'}
        />
    );
  };

  const handleSelect = (
    option: string,
  ) => {
    if (mode === 'new') {
      const updatedInterests = formData.interests.includes(option)
        ? formData.interests.filter((i) => i !== option)
        : [...formData.interests, option];
      setFormData({ ...formData, interests: updatedInterests });
    } else {
      const updatedInterests = updatedForm.interests.includes(option)
        ? updatedForm.interests.filter((i: any) => i !== option)
        : [...updatedForm.interests, option];
      setUpdatedForm({ ...updatedForm, interests: updatedInterests });
    }
  };

  const handleSubmit = async () => {
    const action = mode === 'new' ? saveForm : updateForm;
    const data = mode === 'new' ? formData : updatedForm;
    try {
      await action(data);
      mode === 'new' ? navigation.navigate('List') : navigation.goBack();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleLocationChange = (place: string, latitude: string, longitude: string) => {
    if (mode === 'new') {
      setFormData({ ...formData, place, latitude, longitude });
    } else {
      setUpdatedForm({ ...updatedForm, place, latitude, longitude });
    }
  };
  return (
    <ScrollView style={styles.container}>
       {renderTextInput(
                'Profession',
                'Select Profession',
                'profession',
            )}
       {renderTextInput(
                'Name',
                'Enter Name',
                'name',
            )}
      {renderTextInput(
                'Last Name',
                'Enter Last Name',
                'lastName',
            )}
  <View style={styles.mapContainer}>
    <CustomMap onLocationChange={handleLocationChange}
    initialPlace={mode !== 'new' ? updatedForm.place : ''}
    initialLatitude={mode !== 'new' ? updatedForm.latitude : ''}
    initialLongitude={mode !== 'new' ? updatedForm.longitude : ''} />
  </View>
    <CustomRadioButton
      options={['Male', 'Female', 'Other']}
      selectedOption={mode === 'new' ? formData.gender : updatedForm.gender}
      onSelect={(value: string) => handleTextInputChange('gender', value)}
    />
     <CustomChips
       options={['Music', 'Trekking', 'Reading', 'Cooking']}
       selectedOptions={mode === 'new' ? formData.interests : updatedForm.interests}
       onSelect={(option) =>
       handleSelect(option)
  }
/>
      <CustomCheckbox
        options={['Red', 'Blue', 'Green', 'Yellow']}
        selectedOptions={mode === 'new' ? formData.favoriteColors : updatedForm.favoriteColors}
        onChange={(selected: string) => handleTextInputChange('favoriteColors', selected)}
      />
      <CustomButton title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};


export default FormScreen;
