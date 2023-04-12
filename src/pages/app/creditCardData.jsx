// Pagina donde pone los datos de la tarjeta de credito.

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CreditCard from '../../components/cards/CreditCard';

export default function crediCartData() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const navigation = useNavigation();

    const goToPayActualizado = () => {
        navigation.navigate('payActualizado');
    };

    return (

        <ScrollView>

            <View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ marginLeft: 15 }}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-back" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginLeft: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: '800' }}>Agregar Tarjeta</Text>
                    </View>
                </View>

                <View style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <CreditCard />
                </View>

                <View style={{ alignItems: 'center', marginTop: 20 }}>

                    <View style={{ width: '85%', alignSelf: 'center' }}>
                        <TextInput
                            style={{ width: '106%', height: 40, borderColor: 'gray', borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 10, marginBottom: 20, alignSelf: 'center' }}
                            placeholder="Número de Tarjeta"
                            onChangeText={(text) => setCardNumber(text)}
                            value={cardNumber}
                        />

                        <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center', }}>
                            <TextInput
                                style={{ width: 160, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 20, alignSelf: 'center' }}
                                placeholder="Nombre"
                                onChangeText={(text) => setCardHolderName(text)}
                                value={cardHolderName}
                            />

                            <TextInput
                                style={{ width: 160, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 20, alignSelf: 'center' }}
                                placeholder="Apellidos"
                                onChangeText={(text) => setExpiryDate(text)}
                                value={expiryDate}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center' }}>

                            <View>
                                <Text>Fecha de expiración</Text>
                                <TextInput
                                    style={{ width: 160, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }}
                                    placeholder="MM/YY"
                                    onChangeText={(text) => setCvv(text)}
                                    value={cvv}
                                />
                            </View>

                            <View>
                                <Text>Código de Seguridad</Text>
                                <TextInput
                                    style={{ width: 160, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }}
                                    placeholder="MM/YY"
                                    onChangeText={(text) => setCvv(text)}
                                    value={cvv}
                                />
                            </View>
                        </View >

                        <View style={{ alignSelf: 'center' }}>

                            <TouchableOpacity onPress={goToPayActualizado} style={{ width: 150, backgroundColor: '#00869F', marginTop: 10, borderRadius: 10 }}>
                                <Text style={{ color: '#fff', padding: 10, textAlign: 'center', fontWeight: 900, textShadowColor: '#000', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 10 }}>
                                    Guardar
                                </Text>

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}
