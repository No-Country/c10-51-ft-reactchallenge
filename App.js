import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import NavBarBottom from './src/components/Navigation/NavBarBottom'
import NavBar from './src/components/Navigation/NavBar'


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

  useEffect(() => {
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

  if (!fontsLoaded) return null;
  
  return (
    <View style={styles.container} onLayout={onLayout}>
      <NavBar/>
      <NavBarBottom/>
    </View>

);
}
//se debe colocar un layout para que ambas navbar se meustren en todas las paginas menos las que no corresponde

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
    fontFamily:'Poppins-Regular'

  },
  
});
// blanco = #f1f1f1
// negro = #0a0a0a