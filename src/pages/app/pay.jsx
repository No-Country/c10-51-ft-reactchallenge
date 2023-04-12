// Pagina donde tenga la opcion de añadir una tarjeta de credito.

import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import goTocreditCardData from './creditCardData'
import CreditCard from "../../components/cards/CreditCard";

export default function Pay () {



	const navigation = useNavigation();

	const goTocreditCardData = () => {
		navigation.navigate('creditCardData');
	}

	return (

		/* 
		
		La primera pagina donde esta la opcion de añadir tarjeta, y ultimos pedidos.
		
		*/

		<View style={{height: '100%', alignItems:'center', justifyContent: 'center'}}>

			<Text style={{position: 'absolute', top: 0, left: 0, fontSize: 20, fontWeight: "900", padding: 20}}>Tarjeta</Text>

			<View style={{marginTop: -250, alignItems: 'center'}}>
				<TouchableOpacity onPress={goTocreditCardData}>
					<View style={{backgroundColor: '#f7f7f7', borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.2, shadowRadius: 1, elevation: 2, flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15}}>
						<Text style={{fontSize: 18, marginRight: 90, marginBottom: 20}}>Añadir Tarjeta</Text>


						<Ionicons  name="add" size={24} color="#00869F" xlinkHref="crediCardData" />
					</View>
				</TouchableOpacity>
			</View>

			<Text style={{position: 'absolute', top: 150, left: 0, fontSize: 17, fontWeight: "900", padding: 20}}>Ultimos Pedidos</Text>

			<View style={{width: '90%', top: 80, borderBottomWidth: 2, borderBottomColor: '#00869F'}}></View>

			<View style={{width: '75%', top: 180, backgroundColor: '#f7f7f7', borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.2, shadowRadius: 1, elevation: 2, alignItems: 'center', padding: 20}}>
				<Text style={{fontSize: 12,  fontWeight: '600', marginBottom: 10, textShadowColor: '#fff', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 2}}>Por ahora no tiene gastos{'\n'}Aquí podrá ver sus pedidos pagados</Text>

			</View>

		</View>
	);
}


		/* 
		
		Ahora es la parte cuando el cliente ya añadio su carjeta y ahora tiene el historial de sus pedidos y la opcion de añadir otra tarjeta.
		
		*/


		// <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>

		// 	<Text style={{ position: 'absolute', top: 0, left: 0, fontSize: 20, fontWeight: "900", padding: 20 }}>Tarjeta</Text>

		// 	<ScrollView horizontal={true}>
		// 		<View style={{ flexDirection: 'row', padding: 15, gap: 20, marginTop: -150, alignItems: 'center' }}>

		// 			<CreditCard />

		// 			<View style={{ height: 100, marginTop: 0, alignItems: 'center' }}>
		// 				<TouchableOpacity onPress={goTocreditCardData}>
		// 					<View style={{ backgroundColor: '#f7f7f7', borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.2, shadowRadius: 1, elevation: 2, flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
		// 						<Text style={{ fontSize: 18, marginRight: 90, marginBottom: 20 }}>Añadir nueva Tarjeta</Text>


		// 						<Ionicons name="add" size={24} color="orange" xlinkHref="NewPage" />
		// 					</View>
		// 				</TouchableOpacity>
		// 			</View>
		// 		</View>
		// 	</ScrollView>

		// 	<Text style={{ position: 'absolute', top: 200, left: 0, fontSize: 17, fontWeight: "900", padding: 20 }}>Ultimos gastos</Text>

		// 	<View style={{ width: '90%', top: -70, borderBottomWidth: 2, borderBottomColor: 'orange' }}></View>


		// 	<View >

		// 		<View style={{ width: '75%', top: -50, backgroundColor: '#f7f7f7', borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.2, shadowRadius: 1, elevation: 2, padding: 20 }}>

		// 			<View style={{ minHeight: '25%', flexDirection: 'row', justifyContent: 'space-between', width: 270}}>
		// 				<Text style={{ fontSize: 15, fontWeight: '900', marginBottom: 10 }}>Hamburguesa con cheddar{'\n'}Con papas fritas</Text>
		// 				<Text style={{ fontWeight: 900 }}>$2670</Text>
		// 			</View>

		// 			<Text>1x lata de Coca-Cola 200ml</Text>
		// 			<Text>1x lata de Sprite 200ml</Text>

		// 		</View>

		// 	</View>


		// </View>