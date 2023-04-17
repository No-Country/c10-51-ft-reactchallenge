import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GOOGLE_MAPS_KEY } from '@env';

export default function App() {

  const [origin, setOrigin] = React.useState({
    latitude: -12.068087157083301, 
    longitude: -75.21007970002559,
  });
  const [destination, setDestination] = React.useState({
    latitude: -12.066474595862786, 
    longitude: -75.20453084148023,
  });

  return (

    <View style={{backgroundColor: '#f5f5f5', height: '100%'}}>

      <View style={{height: '45%', width: '95%', alignSelf: 'center', margin: 30,}}>

        <MapView 
          style={styles.map} 
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker 
            draggable
            coordinate={origin}
            onDragEnd={(e) => setOrigin(e.nativeEvent.coordinate)}
          />
          <Marker 
            draggable
            coordinate={destination}
            onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
          />

          <MapViewDirections 
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_KEY}
            strokeWidth={5}
            strokeColor="#00869F"
          />
        </MapView>

      </View>
      
      <View style={{backgroundColor: '#fff', alignSelf: 'center', width: '95%', padding: 15, borderRadius: 15, height: '60%', top: -90, shadowColor: '#000',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.5, shadowRadius: 10,}}>

        <ScrollView>

          <View>

            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 2, width: '30%', alignSelf: 'center'}}></View>

            <View style={{margin: 10, alignSelf: 'center',}}>
              <Text style={{ fontSize: 18, fontWeight: 700}}>Hora estimada de entrega</Text>
            </View>

            <View style={{margin: 0, alignSelf: 'center',}}>
              <Text style={{ fontSize: 22, fontWeight: 900}}>12:05 - 12:20</Text>
            </View>

            <View style={{flexDirection: 'row', margin: 15, top: 15, justifyContent: 'space-between'}}>

              <View style={{padding: 0, gap: 35, alignItems: 'center'}}>
                <Icon name="list-alt" size={30} color="gray" />
                <Icon name="cutlery" size={30} color="#00869F" />
                <Icon name="bicycle" size={30} color="gray" />
                <Icon name="check" size={30} color="gray" />
              </View>

              <View style={{ paddingRight: 0, gap: 50, }}>
                <Text style={{fontSize: 14}}>El restaurante acepto su pedido</Text>
                <Text style={{fontSize: 14, fontWeight: '700'}}>El restaurante esta preparando su pedido</Text>
                <Text style={{fontSize: 14}}>El repartidor esta en camino</Text>
                <Text style={{fontSize: 14}}>El pedido llego a su casa</Text>

              </View>

            </View>

            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: '90%', alignSelf: 'center', paddingTop: 25}}></View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, top: 20, alignItems: 'center'}}>

              <View style={{flexDirection: 'row', gap: 25}}>

                <View >
                  <Image style={{width: 50, height: 50, borderRadius: 100}}
                    source={require('./assets/Persona.jpg')} />
                </View>

                <View>

                  <View>
                    <Text style={{fontSize: 18, fontWeight: 800}}>Mateo Martinez</Text>
                  </View>

                  <View style={{flexDirection: 'row', gap: 10, top: 5, alignItems: 'center'}}>
                    <Icon name='star' size={25} color='yellow'  />
                    <Text style={{fontWeight: 600, fontSize: 17}}>4.5</Text>
                  </View>

                </View>

              </View>

              <View style={{flexDirection: 'row', gap: 25}}>

                <View style={{shadowColor: '#000'}}>
                  <Icon name='phone' size={25} color='#00869F' />
                </View>

                <View>
                  <Icon name='comment' size={25} color='#00869F' />

                </View>

              </View>

            </View>

          </View>

        </ScrollView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
  map: {
    width: '100%',
    height: '100%',
    borderRadius: '25px'
  }
});
