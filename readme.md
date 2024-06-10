# Setup

- `expo install expo-dev-client` 
- `eas build --platform android --profile development --local` (WSL)
- `npm start` (Win)

# Admob

Demo ad units for Admob can be found [here](https://developers.google.com/admob/android/test-ads#demo_ad_units). Instead of hardcoding use `TestIds` from the package:
```js
import {TestIds} from 'react-native-google-mobile-ads';

const unitId = TestIds.ADAPTIVE_BANNER;
```

- Install package: `npm install react-native-google-mobile-ads`
- [Migrate](https://github.com/expo/fyi/blob/main/root-expo-object.md#migrating-the-config) the root-level `expo` object in `app.json`
- Add `react-native-google-mobile-ads` to `app.json` with **real** id:
  ```json
   {
     // ...
     "react-native-google-mobile-ads": {
       "android_app_id": "ca-app-pub-xxxxxxxx~xxxxxxxx"
     }
   }
  ```
- Rebuild dev-client `eas build --platform android --profile development --local` (WSL)
- Install it on your phone or virtual device
- Run the app `npm start` (Win)
