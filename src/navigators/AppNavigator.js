import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Songs from '../screens/songs';
import SongDetail from '../screens/songDetail';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

export default function AppNavigator() {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Song" component={Songs} />
        <Stack.Screen
          name="SongDetail"
          component={SongDetail}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
