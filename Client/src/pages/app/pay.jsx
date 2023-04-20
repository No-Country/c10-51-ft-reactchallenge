import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CreditCard from '../../components/cards/CreditCard';
import axios from "axios";


const Pay = () => {
  const ip = "localhost";
  const [modalVisible, setModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardFirstName, setCardFirstName] = useState('');
  const [cardLastName, setCardLastName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAddCreditCard = () => {
    setModalVisible(true);
    // console.log(cardNumber, cardHolderName, expiryDate, cvv, codigo)
    
  };

  const handleCreditCardSubmit = async () => {

    try {
        const creditCardData = {
            number: parseInt(cardNumber),
            name: cardFirstName,
            lastname: cardLastName,
            exp: expiryDate,
            code: parseInt(cvv),
        };
        console.log(creditCardData);

        const response = await axios.post('http://localhost:3001/users/updateTargets?idUser=1', creditCardData);
        console.log(response.data);

        // Intente borrar los input despues que se presione el boto de guardar pero no se borra.
        // setCardNumber('');
        // setCardFirstName('');
        // setCardLastName('');
        // setExpiryDate('');
        // setCvv('');

    } catch (error) {
      console.error(error);
    }

    setModalVisible(false)

  };

  return (

        <View>

            <View>
                <Text style={{ fontWeight: 900, fontSize: 20, margin: 15 }}>Tarjeta</Text>
            </View>


            <View style={{ width: '80%', alignSelf: 'center', backgroundColor: '#f7f7f7', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 15,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 5,
                }}>
                
                <Text style={{ fontSize: 18, marginBottom: 20 }}>Añadir Tarjeta</Text>

                <TouchableOpacity onPress={handleAddCreditCard}>
                    <Ionicons name="add" size={24} color="#00869F" />
                </TouchableOpacity>

            </View>

            <View>
                <Text style={{ fontWeight: 900, fontSize: 20, margin: 15 }}>Ultimos pedidos</Text>
            </View>

            {/* Linea horizontal */}
            <View style={{ width: '90%', alignSelf: 'center', borderBottomColor: '#00869F', borderBottomWidth: 1.5, marginVertical: 10, }}></View>

                
            <View style={{ marginTop: 15, padding: 15, height: '40%', width: '80%', alignSelf: 'center', backgroundColor: '#f7f7f7', borderRadius: 8, flexDirection: 'column', alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 5,
                }}>

                <View style={{ padding: 10, alignSelf: 'center', fontSize: 15,}}>
                    <Text >Por ahora no tiene gastos{'\n'}Aca podra ver todos los gastos que tiene</Text>
                </View>

            </View>

            {/* Credit card modal */}
            <Modal visible={modalVisible} animationType="slide">

                <ScrollView>

                    <View style={{ alignItems: 'center' }}>

                        <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 15 }}>Agregar Tarjeta</Text>

                        <View style={{ margin: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <CreditCard />
                        </View>

                        <View style={{ width: '85%', alignSelf: 'center' }}>

                        <TextInput
                            style={{ width: '106%', height: 40, borderColor: 'gray', borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 10, marginBottom: 20, alignSelf: 'center' }}
                            placeholder="Número de Tarjeta"
                            onChangeText={setCardNumber}
                            value={cardNumber}
                            maxLength={16}
                        />
                        <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center' }}>
                            <TextInput
                            style={{ width: 180, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 20, alignSelf: 'center' }}
                            placeholder="Nombre"
                            onChangeText={setCardFirstName}
                            value={cardFirstName}
                            />
                            <TextInput
                            style={{ width: 180, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 20, alignSelf: 'center' }}
                            placeholder="Apellidos"
                            onChangeText={setCardLastName} 
                            value={cardLastName}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'center' }}>

                            <View>
                            <Text>Fecha de expiración</Text>
                            <TextInput
                                style={{ width: 180, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }}
                                placeholder="MM/YY"
                                onChangeText={setExpiryDate}
                                value={expiryDate}
                                
                            />
                            </View>

                            <View>
                            <Text>Código de Seguridad</Text>
                            <TextInput
                                style={{ width: 180, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }}
                                placeholder="CVV"
                                onChangeText={setCvv}
                                value={cvv}
                                maxLength={3}
                            />
                            </View>

                        </View>

                        <TouchableOpacity onPress={handleCreditCardSubmit} style={{ width: 150, alignSelf: 'center', backgroundColor: '#00869F', marginTop: 10, borderRadius: 10 }}>

                            <Text style={{ fontSize: 17, color: '#fff', padding: 10, textAlign: 'center', fontWeight: 900, fontextShadowColor: '#000', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 10 }}>
                            Guardar
                            </Text>

                        </TouchableOpacity>
                        
                        </View>
                    </View>
                </ScrollView>
            </Modal>

        </View>

    
  );
};

export default Pay;
