# OfflineDataSyncPOC

## Overview

OfflineDataSyncPOC is a React Native application that demonstrates efficient offline data synchronization. This app allows users to view and create forms, with the ability to work offline and sync data when an internet connection becomes available.

## Project Structure

The project follows a typical React Native structure with a focus on modularity and separation of concerns:

OfflineDataSyncPOC/
├── src/
│   ├── components/
│   ├── screens/
│   │   └── ListScreen/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── types/
│   │   ├── FormData.ts
│   │   └── NavigationProps.ts
│   └── utils/
│       └── syncData.tsx
├── android/
├── ios/
└── package.json
## Key Features

1. **Offline Data Management**: The app uses AsyncStorage to store form data locally, allowing users to view and create forms even without an internet connection.

2. **Real-time Sync**: When an internet connection is available, the app automatically syncs data with the server.

3. **Progress Indication**: During synchronization, a progress bar is displayed to keep users informed about the sync status.

4. **Dynamic List**: The app uses a FlatList to efficiently render a potentially large list of forms.

5. **Navigation**: The app implements navigation between a list view and individual form views.

## Code Efficiency and Functionality

### ListScreen Component

The `ListScreen` component is the main screen of the application. It demonstrates several efficient coding practices:

1. **State Management**: Uses React's `useState` hook for local state management, keeping track of forms, sync status, and progress.

2. **Effect Hooks**: Utilizes `useEffect` for side effects like loading data and setting up event listeners.

3. **Asynchronous Operations**: Implements async/await for smooth handling of asynchronous operations like loading data from AsyncStorage.

4. **Network Monitoring**: Uses the NetInfo library to monitor network status and trigger sync operations when online.

5. **Event Handling**: Implements DeviceEventEmitter to listen for form refresh events, ensuring the list stays up-to-date.

6. **Efficient Rendering**: Uses FlatList for efficient rendering of potentially large lists, with features like endless scrolling.

7. **Navigation**: Implements navigation to individual form screens, both for viewing existing forms and creating new ones.

## Data Synchronization

The core of our offline data synchronization is handled by the `syncData` function in `utils/syncData.tsx`. This function plays a crucial role in ensuring data consistency between the local storage and the server.

### syncData Function

The `syncData` function is an asynchronous function that handles the process of synchronizing locally stored form data with a remote server. Here's a breakdown of its functionality:

1. **Data Retrieval**: 
   - It first retrieves stored form data from AsyncStorage.
   - If data exists, it's parsed from JSON format into a JavaScript array.

2. **Sync Process Simulation**:
   - The function simulates a sync process, likely to be replaced with actual API calls in a production environment.
   - It uses `setSyncing` and `setSyncProgress` to update the UI, providing visual feedback to the user about the sync progress.

3. **Progress Tracking**:
   - The sync progress is calculated and updated for each form in the array.
   - This allows for a granular progress indication in the UI.

4. **Network Delay Simulation**:
   - A setTimeout is used to simulate network delay, which would be replaced by actual API calls in a real-world scenario.

5. **Post-Sync Cleanup**:
   - After successful synchronization, the function is set up to potentially clear the local storage.
   - This step is currently commented out, likely for demonstration purposes.

6. **Error Handling**:
   - While not explicitly shown in the snippet, the function structure allows for easy integration of error handling mechanisms.

### Usage

The `syncData` function is typically called when:
- The app regains internet connectivity (monitored by NetInfo).
- The user manually triggers a sync operation.
- At regular intervals, if implemented, to ensure data freshness.

This function demonstrates an efficient approach to handling offline data synchronization, ensuring that users can work with the app seamlessly regardless of their network status.

## Reusable Components

This project emphasizes the use of reusable, modular components to enhance code maintainability and readability. The components are designed with a plug-and-play approach, making it easy to use them across different parts of the application. Here are some key reusable components:

1. **CustomButton**: A reusable button component that can be easily customized for different use cases throughout the app.

2. **CustomCheckbox**: A flexible checkbox component that can be used for multiple selection scenarios.

3. **CustomChips**: A component for displaying and selecting options in a chip format, useful for tags or categories.

4. **CustomInput**: A reusable text input component with built-in validation and error handling capabilities.

5. **CustomRadio**: A radio button component for single selection from a list of options.

5. **CustomRadio**: A radio button component for single selection from a list of options.

6. **CustomMap**: An interactive map component that integrates Google Maps functionality for location selection and display. Key features include:

   - **Location Search**: Utilizes Google Places Autocomplete for easy location search.
   - **Map Interaction**: Allows users to select locations by tapping on the map.
   - **Marker Placement**: Displays a draggable marker for precise location selection.
   - **Geocoding**: Converts coordinates to human-readable addresses and vice versa.
   - **Initial Location Support**: Can be initialized with a pre-selected location.
   - **Location Information Display**: Shows selected place name, latitude, and longitude.
   - **Customizable**: Can be easily integrated and customized for various use cases in the app.

   This component enhances the app's functionality by providing a user-friendly interface for location-based data input and visualization.

Each of these components is designed to be:

- **Self-contained**: Each component manages its own state and styling.
- **Customizable**: Props allow for easy customization of appearance and behavior.
- **Reusable**: Components can be easily imported and used in various parts of the application.
- **Maintainable**: Separating components this way makes the codebase easier to maintain and update.

This approach of using modular, reusable components not only makes the code cleaner and more organized but also speeds up development by allowing easy reuse of common UI elements across the application.

## Libraries Used

1. **@react-native-async-storage/async-storage**: For local storage of form data, enabling offline functionality.

2. **@react-native-community/netinfo**: To monitor network connectivity status.

3. **react-native-progress**: For displaying a progress bar during sync operations.

4. **@react-navigation/native**: For handling navigation between screens.

5. **react-native**: Core library for building the mobile app interface.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app:
   - For iOS: `npx react-native run-ios`
   - For Android: `npx react-native run-android`

## Contributing

Contributions to improve OfflineDataSyncPOC are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.# OfflineDataSyncPOC
OfflineDataSyncPOC is a React Native application that demonstrates efficient offline data synchronization. This app allows users to view and create forms, with the ability to work offline and sync data when an internet connection becomes available.
