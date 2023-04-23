import React from 'react';
import {Text, View, StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const CardPromocion = ({id,title,description,image}) => {
     
    const navigation = useNavigation();

    return (
      <TouchableOpacity style={styles.container}
        onPress={() => {
            axios.post(`https://c10-51-ft.up.railway.app/cart/creator?idUser=4`)
            navigation.navigate('Food',{foodId:id})}
        }
      >
      <ImageBackground source={{uri:image}} style={styles.backgroundImg}>

      <LinearGradient colors={['black', 'transparent']} style={styles.background}/>
      <View style={styles.textContainer}>
      <Text style={styles.primaryText}>{title}</Text>
      <Text style={styles.secondaryText}>{description}</Text>
      </View>
      </ImageBackground>
  </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '92%',
        textAlign: 'start',
        borderRadius: 20,
        overflow:"hidden",
        elevation: 2
        
    },
    textContainer:{
        marginTop: 20,
        marginLeft:20,
    },
    secondaryText: {
        fontFamily: 'Poppins-Light',
        color: 'white',
        fontWeight: 400,
        fontSize:12,
        lineHeight: 14, 
        marginBottom: 5,
        padding:1
    },
    primaryText: {
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        fontWeight: 700,
        fontSize:16,
        lineHeight: 24, 
        marginBottom: 5,
        padding:1
    },
    background: {
        flex:1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 150,
        borderRadius: 20,
        opacity:0.8
        

    },
    backgroundImg:{
        flex: 1,
        resizeMode: 'cover',
        borderRadius : 20,
    }
})

export default CardPromocion;
