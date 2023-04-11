
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import NavBar from './src/components/navigation/NavBar';
import NavBarBottom from './src/components/navigation/NavBarBottom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages';
import Order from './src/pages/app/order';
import addCreditCard from './src/pages/app/addCreditCard';
import Profile from './src/pages/app/profile/';
import creditCardData from './src/pages/app/creditCardData';
import { StatusBar } from 'expo-status-bar';




export default function App() {
  //importacion de fuentes, video explicativo: https://www.youtube.com/watch?v=2noGlR1DXsM&t=38s&ab_channel=BetoMoedano

  /*  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),

  });

  
 /* useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);


   const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])


   if (!fontsLoaded) return null;  */




  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar/>
      <NavBar />

      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="addCreditCard" component={addCreditCard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="creditCardData" component={creditCardData} />
        {/* <Stack.Screen name="payActualizado" component={payActualizado} /> */}



      </Stack.Navigator>

      <NavBarBottom />
      
    </NavigationContainer>
  );
};


//se debe colocar un layout para que ambas navbar se meustren en todas las paginas menos las que no corresponde



// blanco = #f1f1f1
// negro = #0a0a0a