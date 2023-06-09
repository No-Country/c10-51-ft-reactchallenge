
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//access
import Login from './src/pages/access/Login';
import Register from './src/pages/access/Register';
import RegisterRestaurant from './src/pages/access/RegisterRestaurant';
//app
import NavBarBottom from './src/components/navigation/NavBarBottom';
import NavBar from './src/components/navigation/NavBar';
import HomeScreen from './src/pages/app/index';
import Pay from './src/pages/app/pay';
import Profile from './src/pages/app/profile';
import React, { useEffect, useState } from 'react';
import Search from './src/pages/app/search';
import Cart from './src/pages/app/cart';
import { StatusBar } from 'expo-status-bar';
import Restaurant from './src/pages/app/restaurant';
import Food from './src/pages/app/food';
import Splash from './src/pages/SplashScreen';
import Restaurants from './src/pages/app/restaurants';
//navigate para el inicio
const StackIni = createStackNavigator();
//context
import { LoginContext } from './context/loginContext';




function StackNavIni() {
  return (
    <StackIni.Navigator initialRouteName="Splash">
      
      <StackIni.Screen name='Splash' component={Splash}
        options={{
          headerShown: false
        }} />
      <StackIni.Screen name='Register' component={Register}
        options={{
          headerShown: false
        }} /><StackIni.Screen name='Login' component={Login}
          options={{
            headerShown: false
          }} />


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
          name="Restaurant"
          component={Restaurant}
          options={{
            headerShown: false,
            header: () => <NavBar />
          }}
        />
        <Stack.Screen
          name="Food"
          component={Food}
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
          options={{
            headerShown: false,
            header: () => <NavBar />
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            header: () => <NavBar />
          }}
        />
        <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{
            headerShown: false,
            header: () => <NavBar />
          }}
        />
        <Stack.Screen
          name="RegisterRestaurant"
          component={RegisterRestaurant}
          options={{
            headerShown: false,
            header: () => <NavBar />
          }}
        />
       
      </Stack.Navigator>
      <NavBarBottom type='client'/>
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



  const [login, setLogin] = useState(true);
  function logFunction() {
    setLogin(true);
  }
  
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
        login();
      }
    }
    inicia();
  }, []);

  return (
    <LoginContext.Provider value={{ login, logFunction }}>

    <NavigationContainer>
      {login ? <StackNavApp /> : <StackNavIni />}
    </NavigationContainer>
    </LoginContext.Provider>
  );
}
