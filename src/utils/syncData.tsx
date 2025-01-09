import AsyncStorage from '@react-native-async-storage/async-storage';

export const syncData = async (setSyncing: React.Dispatch<React.SetStateAction<boolean>>, setSyncProgress: React.Dispatch<React.SetStateAction<number>>) => {
  const storedData = await AsyncStorage.getItem('forms');
  if (storedData) {
    const formDataArray = JSON.parse(storedData);

    // Simulate API sync progress
    setSyncing(true);
    for (let i = 0; i < formDataArray.length; i++) {
      // Replace this with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating network delay
      setSyncProgress((i + 1) / formDataArray.length);
    }

    // Clear storage after successful sync
    // await AsyncStorage.removeItem('forms');
    setSyncing(false);
    setSyncProgress(0);
  }
};
