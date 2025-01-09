import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, StatusBar, DeviceEventEmitter } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { syncData } from '../../utils/syncData';
import NetInfo from '@react-native-community/netinfo';
import * as Progress from 'react-native-progress';
import NavigationProps from '../../types/NavigationProps';
import FormData from '../../types/FormData';
import styles from './styles';

const ListScreen = ({ navigation }: NavigationProps) => {
  const [forms, setForms] = useState([]);
  const [syncing, setSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);

  // Fetch data from AsyncStorage
  const loadForms = async () => {
    const data = await AsyncStorage.getItem('forms');
    if (data) setForms(JSON.parse(data));
  };

  // Monitor network status and trigger sync
  useEffect(() => {
    // Monitor connectivity and trigger sync if connected
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      if (state.isConnected) {
        syncData(setSyncing, setSyncProgress); // Sync data when network is available
      }
    });

    loadForms();

    // Clean up when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('refreshForms', () => {
      loadForms(); // Reload data when the event is received
    });

    return () => {
      subscription.remove(); // Clean up the listener
    };
  }, []);

  const renderItem = ({ item }: { item: FormData }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('Form', { form: item })}
    >
      <Text style={styles.listText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {syncing && (
        <View style={styles.progressContainer}>
          <Progress.Bar
            progress={syncProgress}
            width={null}
            height={3}
            color="#2196F3"
            borderWidth={0}
          />
        </View>
      )}
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />
      <FlatList
        data={forms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={loadForms}
        onEndReachedThreshold={0.5}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Form', { mode: 'new' })}
      >
        <Text style={styles.buttonText}>Go to Form</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListScreen;
