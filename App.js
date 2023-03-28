import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import CardPromocion from './components/cardPromocion';

export default function App() {
  return (
    <View style={styles.container}>
      <CardPromocion/>
    <StatusBar style="auto" />
      
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
