import BackgroundFetch from 'react-native-background-fetch';
import NetInfo from '@react-native-community/netinfo';
import { syncData } from '../utils/syncData';  // Importing the syncData function

class MyBackgroundService {
  private static instance: MyBackgroundService;
  private isConnected: boolean = false;

  private constructor() {}

  // Singleton pattern to ensure only one instance of the service
  public static getInstance(): MyBackgroundService {
    if (!MyBackgroundService.instance) {
      MyBackgroundService.instance = new MyBackgroundService();
    }
    return MyBackgroundService.instance;
  }

  // Start the background service
  public async startService() {
    // Configure BackgroundFetch
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // Fetch interval in minutes
        stopOnTerminate: false, // Keep running even if app is terminated
        startOnBoot: true, // Start on device boot
        enableHeadless: true, // Allow headless mode for background tasks
      },
      async (taskId) => {
        console.log('[BackgroundFetch] taskId:', taskId);

        // Check internet connection
        const connection = await NetInfo.fetch();
        this.isConnected = connection.isConnected || false; // Update the connection status
        console.log('Internet connection status:', this.isConnected ? 'Connected' : 'Disconnected');

        // Sync data if connected
        if (this.isConnected) {
          syncData(() => {}, () => {}); // Sync data without affecting UI state
        }

        // Mark the task as complete
        BackgroundFetch.finish(taskId);
      },
      (error) => {
        console.error('[BackgroundFetch] failed to configure:', error);
      }
    );

    // Start BackgroundFetch
    BackgroundFetch.start();
    console.log('[BackgroundFetch] service started');
  }

  // Stop the background service
  public stopService() {
    BackgroundFetch.stop();
    console.log('[BackgroundFetch] service stopped');
  }

  // Getter for internet connectivity status
  public getConnectivityStatus(): boolean {
    return this.isConnected;
  }
}

export default MyBackgroundService;
