import react from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import reactDom from 'react-dom';
import { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
//componentes
import NavBar from './src/components/Navigation/NavBar'
import CardPromocion from './src/components/Cards/CardPromocion'

import NavBarBottom from './src/components/Navigation/NavBarBottom'
import AddCardButton from './src/components/Buttons/AddCardButton';
import { BtnPrimary, BtnPrimaryCol, BtnPrimaryLarge, BtnPrimaryColLarge, BtnAddCart, BtnFiltroComp } from './src/components/Buttons/Btns'
import { BtnPrimaryIconDef, BtnPrimaryIconHome } from './src/components/Buttons/BtnsIcon';

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
      <ScrollView >
    <View style={styles.container} onLayout={onLayout}>

      <NavBar />
      <CardPromocion />
      <AddCardButton />
      <BtnPrimary text="Boton 1" onPress={()=> alert('ejemlo')}/>
      <BtnPrimary text="Boton 122" onPress={()=> alert('ejemlo')}/>

      <BtnPrimaryCol text="Boton 2" onPress={()=> alert('ejemlo')}/>
      <BtnPrimaryLarge text="Boton largo 1" onPress={()=> alert('ejemlo')}/>
      <BtnPrimaryColLarge text="Boton largo 2" onPress={()=> alert('ejemlo')}/>
      <BtnPrimaryIconDef text="Boton Icon"/>
      <BtnPrimaryIconHome />
      <BtnAddCart text={'Anadir al Carrito'}/>
      <BtnFiltroComp text={"filtro"} color={"red"} />
      <NavBarBottom/>

      <StatusBar />
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#d9d9d9',

  },

});
// blanco = #f1f1f1
// negro = #0a0a0a