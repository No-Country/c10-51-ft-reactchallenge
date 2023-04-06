
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
//navigate
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from './src/pages/SplashScreen';

//access
import Login from './src/pages/access/Login';
import Register from './src/pages/access/Register';
//app
import NavBarBottom from './src/components/Navigation/NavBarBottom';
import NavBar from './src/components/Navigation/NavBar';
import HomeScreen from './src/pages/app/index';
import Order from './src/pages/app/order';
import Pay from './src/pages/app/pay';
import Profile from './src/pages/app/profile';

//navigate para el inicio
const StackIni = createStackNavigator();
function StackNavIni() {
  return (
    <StackIni.Navigator initialRouteName="Splash">
      <StackIni.Screen name='Splash' component={SplashScreen}
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
      <NavBar />
      <Stack.Navigator screenOptions={{
        headerShown: false,
        
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <NavBarBottom />
    </>
  );
}

export default function App() {
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

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function inicia() {
      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 7000);
        });
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(false);// <====== false muestra inicio de sesion, true muestra la app
      }
    }
    inicia();
  }, []);

  return (
    <NavigationContainer>
      {appIsReady ? <StackNavApp /> : <StackNavIni />}
    </NavigationContainer>
  );
}
