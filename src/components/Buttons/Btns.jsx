import React from 'react';
import {Text,View, StyleSheet,TouchableOpacity} from 'react-native';

export function BtnPrimaryLarge (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimaryLarge, backgroundColor:'#f1f1f1',
    }}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnPrimaryColLarge (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimaryLarge, backgroundColor:'#7d7d7d',
    }}>
            <Text style={{...styles.textBtn, color:'#f1f1f1'}}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnPrimary (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimary, backgroundColor:'#f1f1f1',
    }}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnPrimaryCol (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimary, backgroundColor:'#a6a6a6',
    }}>
            <Text style={{...styles.textBtn, color:'#f1f1f1'}}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnAddCart (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={()=>alert('ejemplo')} style={styles.btnAddCart}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnFiltroComp (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={()=>alert('ejemplo')} style={{...styles.btnAddCart, backgroundColor:'#9d9d9d', width:'auto', paddingHorizontal:12, paddingVertical:10}}>
            <Text style={styles.textBtn}>Filtro</Text>
        </TouchableOpacity >
    );
};






const styles = StyleSheet.create({
    btnsPrimaryLarge:{
        width: '64%',
        paddingVertical:16,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10, 
    },
    textBtn:{
        fontFamily:'Poppins-SemiBold'
    },
    btnsPrimary:{
        paddingHorizontal: 32,
        paddingVertical:16,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10, 
        
    },
    btnAddCart:{
        width:"50%",
        paddingVertical:11,
        borderRadius:15,
        backgroundColor:'#f1f1f1',
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10, 
    }
})


