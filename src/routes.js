import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import logo from './assets/instagram.png';
import Feed from './pages/Feed';

const { Navigator, Screen } = createStackNavigator();

const options = {
  headerTitle: <Image source={logo} />,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#f5f5f5',
  },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={options}>
        <Screen name="Feed" component={Feed} />
      </Navigator>
    </NavigationContainer>
  );
}
