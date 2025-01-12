# OfflineDataSyncPOC

## Overview
OfflineDataSyncPOC is a React Native application that demonstrates efficient offline data synchronization. This app allows users to view and create forms, work offline seamlessly, and automatically sync data when an internet connection becomes available. It highlights offline-first design principles and ensures a smooth user experience regardless of network conditions.

---

## Project Structure

```
OfflineDataSyncPOC/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # App screens
│   │   └── ListScreen/   # List view screen
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── types/            # TypeScript type definitions
│   │   ├── FormData.ts
│   │   └── NavigationProps.ts
│   └── utils/            # Utility functions
│       └── syncData.tsx
├── android/              # Android-specific files
├── ios/                  # iOS-specific files
└── package.json          # Project configuration
```

---

## Key Features

### Offline Data Management
- Uses `@react-native-async-storage/async-storage` to store form data locally, allowing offline access.
- Local data persists between app sessions, ensuring users can work uninterrupted.

### Real-time Sync
- Automatically synchronizes data with the server whenever an internet connection is detected.
- Sync progress is tracked and displayed to the user via a progress bar.

### Dynamic List Management
- Displays a list of forms using a `FlatList`, optimized for performance with lazy loading and endless scrolling.

### Seamless Navigation
- Implements smooth navigation between the list screen and form views using `@react-navigation/native`.

---

## Code Efficiency and Functionality

### ListScreen Component
The `ListScreen` component serves as the main screen for viewing and managing forms. It incorporates several key React Native features:

1. **State Management**:
   ```tsx
   const [forms, setForms] = useState([]);
   const [syncing, setSyncing] = useState(false);
   const [syncProgress, setSyncProgress] = useState(0);
   ```

2. **Asynchronous Data Handling**:
   ```tsx
   const loadForms = async () => {
     const data = await AsyncStorage.getItem('forms');
     if (data) setForms(JSON.parse(data));
   };
   ```

3. **Network Monitoring**:
   ```tsx
   useEffect(() => {
     const unsubscribe = NetInfo.addEventListener((state) => {
       if (state.isConnected) {
         syncData(setSyncing, setSyncProgress);
       }
     });

     loadForms();
     return () => unsubscribe();
   }, []);
   ```

4. **Dynamic Event Handling**:
   ```tsx
   useEffect(() => {
     const subscription = DeviceEventEmitter.addListener('refreshForms', loadForms);
     return () => subscription.remove();
   }, []);
   ```

---

### Data Synchronization

The `syncData` function ensures consistent and up-to-date information between local storage and the remote server. Below is a breakdown of its workflow:

#### Core Steps

1. **Retrieve Stored Data**:
   ```tsx
   const storedData = await AsyncStorage.getItem('forms');
   const formDataArray = storedData ? JSON.parse(storedData) : [];
   ```

2. **Simulate API Calls**:
   ```tsx
   for (let i = 0; i < formDataArray.length; i++) {
     await new Promise((resolve) => setTimeout(resolve, 1000));
     setSyncProgress((i + 1) / formDataArray.length);
   }
   ```

3. **Reset State After Sync**:
   ```tsx
   setSyncing(false);
   setSyncProgress(0);
   ```

4. **Optional Storage Cleanup**:
   ```tsx
   // Uncomment the following line to clear local data after syncing:
   // await AsyncStorage.removeItem('forms');
   ```

---

### Reusable Components

The app is built with modular, reusable components for better maintainability and faster development. Key components include:

#### CustomInput
A reusable text input component with features like:
- Label and placeholder support
- Multiline capability
- Validation handling

#### CustomMap
An interactive map component with functionality such as:
- Google Places Autocomplete for location searches
- Marker placement for precise location selection
- Draggable markers to refine locations

#### CustomChips
For displaying and selecting options (e.g., hobbies):
```tsx
<CustomChips
  options={['Music', 'Trekking', 'Reading', 'Cooking']}
  selectedOptions={formData.interests}
  onSelect={(option) => handleSelect(option)}
/>
```

#### CustomCheckbox
Allows users to select multiple options with intuitive checkboxes:
```tsx
<CustomCheckbox
  options={['Red', 'Blue', 'Green']}
  selectedOptions={formData.favoriteColors}
  onChange={(selected) => handleTextInputChange('favoriteColors', selected)}
/>
```

---

## Libraries Used

1. **@react-native-async-storage/async-storage**: For offline data persistence.
2. **@react-native-community/netinfo**: To monitor network connectivity.
3. **react-native-progress**: To display sync progress visually.
4. **@react-navigation/native**: To manage navigation between screens.
5. **react-native-background-fetch**: For periodic background data synchronization.

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/OfflineDataSyncPOC.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   - **iOS**: `npx react-native run-ios`
   - **Android**: `npx react-native run-android`

---

## Contributing
We welcome contributions to improve OfflineDataSyncPOC! Please submit a pull request or open an issue to discuss changes or enhancements.

---

## License
This project is licensed under the MIT License.

