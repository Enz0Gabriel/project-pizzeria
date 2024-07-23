
import { View, StatusBar  } from 'react-native';

import SignIn, {} from './src/pages/SignIn'

export default function HomeScreen() {
  return (
    <View>
      <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false}/>
      <SignIn/>
    </View>
  );
}