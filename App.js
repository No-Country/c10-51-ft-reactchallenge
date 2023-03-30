import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import CardPromocion from './components/cardPromocion';
import SearchFood from './components/SearchFood';

export default function App() {
  return (
    <View style={styles.container}>
      <CardPromocion/>
      <SearchFood/>
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
