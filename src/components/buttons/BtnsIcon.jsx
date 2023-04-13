import React from 'react';
import {View, StyleSheet,Text, Alert, TouchableOpacity,} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function BtnPrimaryIconDef(props){
    const {text} = props
    return (
        <TouchableOpacity 
        style={styles.ButtonPrimaryIconDef}
        onPress = {() => alert("ejemplo")}>
            <Text style={styles.TextIconBtn}>{text}</Text>
            <Ionicons name="arrow-forward-outline" size={18} />
         </TouchableOpacity>
    );
}

export function BtnPrimaryIconHome(){
    return (
        <TouchableOpacity 
        style={styles.ButtonPrimaryIconDef}
        onPress = {() => Alert.alert("ejemplo")}>
            <Ionicons name="home-outline" size={18} />
            <Text style={styles.TextIconBtn}>Home</Text>
         </TouchableOpacity>
    );
}

export function BtnSecondaryIconDef(){
    return (
        <TouchableOpacity 
        style={styles.ButtonSecondaryIconDef}
        onPress = {() => Alert.alert("ejemplo")}>
            <Text style={styles.TextIconBtn}>Home</Text>
            <Ionicons name="home-outline" size={18} />
         </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    ButtonPrimaryIconDef: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderRadius: 100,
        height: 31,
        paddingHorizontal:10,
        justifyContent: 'center'
        ,gap:8, 
        margin:10,
        maxWidth:100,
        borderColor: 'gray',
        borderWidth: 1,
    },
    ButtonSecondaryIconDef:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#f1f1f1',
        borderRadius: 20,
        paddingHorizontal:10,
        paddingVertical:9.5, 
        justifyContent: 'center'
        ,gap:8, 
        margin:10,
    },
    TextIconBtn:{
        fontFamily: 'Poppins-SemiBold'
        , fontSize: 12,
    }
})

