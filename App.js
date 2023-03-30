import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import CardPromocion from './components/cardPromocion';
import { BtnPrimaryIconDef, BtnPrimaryIconHome, BtnSecondaryIconDef } from './components/buttons/BtnsIcon'
import { useFonts } from 'expo-font';
import { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { BtnPrimaryLarge, BtnPrimaryColLarge, BtnPrimary, BtnPrimaryCol, BtnAddCart, BtnFiltroComp } from './components/buttons/Btns';
import Index from './app';

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
      <CardPromocion />
      <BtnPrimaryIconDef text="Icon Button" />
      <BtnPrimaryIconHome />
      <BtnSecondaryIconDef />
      <BtnPrimaryLarge text="Button Primary" onPress={()=> alert('ejemplo')} />
      <BtnPrimaryColLarge text="Button Primary Color " onPress={()=> alert('ejemplo')} />
      <BtnPrimary text="Button label" onPress={()=> alert('ejemplo')} />
      <BtnPrimaryCol text="Button label " onPress={()=> alert('ejemplo')} />  
      <BtnAddCart text="agregar al carrito"/>    
      <BtnFiltroComp/>
      <StatusBar style="auto" />
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30 }}> PRUEBA FUENTE</Text>
    </View>
  );
}

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