import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import AddComboButton from './src/components/Buttons/AddComboButton';
import CardPromocion from './src/components/Cards/CardPromocion';
import CardShop from './src/components/Cards/CardShop';
import CreditCard from './src/components/Cards/CreditCard';
import NavBar from './src/components/Navigation/NavBar';
import NavBarBottom from './src/components/Navigation/NavBarBottom';

export default function App() {
  return (
    <View style={styles.container}>
    <NavBar/>
      <CardPromocion/>
      <CardShop/>
      {/* <CreditCard perspective='front'/>
      <CreditCard perspective='back'/>
      <CreditCard perspective='toComplete'/> */}
      <AddComboButton/>
      <StatusBar style="auto" />
      <NavBarBottom/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textoLean:{
    color: 'blue',
  }
});
