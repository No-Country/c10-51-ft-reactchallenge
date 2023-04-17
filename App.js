
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

//access
import Login from './src/pages/access/Login';
import Register from './src/pages/access/Register';
//fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//app
import NavBarBottom from './src/components/navigation/NavBarBottom';
import NavBar from './src/components/navigation/NavBar';
import HomeScreen from './src/pages/app/index';
import Pay from './src/pages/app/pay';
import Profile from './src/pages/app/profile';
import { useEffect, useCallback, useState } from 'react';
import Search from './src/pages/app/search';
import Cart from './src/pages/app/cart';
import { StatusBar } from 'expo-status-bar';
import RestaurantContainer from './src/pages/app/restaurantContainer';
import Ordenar from './src/pages/app/order';
import Splash from './src/pages/SplashScreen';

/* SplashScreen.preventAutoHideAsync();
 */
//navigate para el inicio
const StackIni = createStackNavigator();
function StackNavIni() {
  return (
    <StackIni.Navigator initialRouteName="Splash">
      <StackIni.Screen name='Splash' component={Splash}
        options={{
          headerShown: false
        }}/>
        <StackIni.Screen name='Register' component={Register}
        options={{headerShown:false
      }}/><StackIni.Screen name='Login' component={Login}
        options={{
          headerShown: false
        }}/>
        

    </StackIni.Navigator>
  )
};

// navigation app
const Stack = createStackNavigator();
function StackNavApp() {
  return (
    <>
     <StatusBar/>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ 
        headerShown: true,
        header: () => <NavBar />
      }}
    />
    <Stack.Screen
      name="Order"
      component={RestaurantContainer}
      options={{ 
        headerShown: false,
        header: () => <NavBar />
      }}
    />
    <Stack.Screen
      name="Pay"
      component={Pay}
      options={{ 
        headerShown: true,
        header: () => <NavBar />
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ 
        headerShown: false,
        header: () => <NavBar />
      }}
    />
    <Stack.Screen
      name="Search"
      component={Search}
    />
    <Stack.Screen
      name="Cart"
      component={Cart}
      options={{ 
        headerShown: true,
        header: () => <NavBar />
      }}
    />
  </Stack.Navigator>
  <NavBarBottom />
    </>
  );
}


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function inicia() {
      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        });
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(false);// <====== false muestra inicio de sesion, true muestra la app
      }
    }
    inicia();
  }, []);
  //importacion de fuentes, video explicativo: https://www.youtube.com/watch?v=2noGlR1DXsM&t=38s&ab_channel=BetoMoedano
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
  });  
  /* if (!fontsLoaded) {
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

    return console.log('error fuentes');
  } */

 

  return (
        <NavigationContainer  /* onLayout={onLayoutRootView} */ >
      {appIsReady ? <StackNavApp /> : <StackNavIni />}
    </NavigationContainer>
  );
}
