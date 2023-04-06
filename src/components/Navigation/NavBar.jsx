import React from "react";
import { TouchableOpacity, StyleSheet, View, Text ,Animated,Dimensions,ScrollView } from "react-native";
import {MenuSvg,
  LupaSvg,
  CartSvg,
  AvatarSvg,
  CampaingSvg,
  CuponSvg,
  CreditCardSvg,
  InfoSvg,
  BookSvg,
  ClockSvg} from "../svgs/Svgs";
import InputSearchFood from "../cards/InputSearchFood";
import { BtnFiltroComp } from "../buttons/Btns";


export default function NavBar() {

 const [isOpen, setIsOpen] = React.useState(false)
 const [typeOfMenu, setTypeOfMenu] = React.useState('')
 const height = React.useRef(new Animated.Value(0)).current;
 const transparence = React.useRef(new Animated.Value(0)).current;

 const windowHeight = Dimensions.get("window").height;
 const tags = [
  "Hamburguesas",
  "Sushi",
  "Pizza",
  "Comida arabe",
  "Comida china",
  "Comida italiana",
  "Comida mexicana",
  "Comida peruana",
  "Comida tailandesa",
  "Comida vegetariana",
  "Comida vegana",
  "Comida rápida",
  "Comida saludable",
  "Comida gourme",
];

 React.useEffect(() => {
  Animated.timing(height, {
    toValue: isOpen ? 1 : 0,
    duration: 600,
    useNativeDriver: false,
    
  }).start();
  Animated.timing(transparence, {
    toValue: isOpen ? 1 : 0,
    duration: 600,
    useNativeDriver: false,
    
  }).start();
}, [isOpen]);



const interpolatedHeight = height.interpolate({
  inputRange: [0, 1],
  outputRange: [0, typeOfMenu === 'menu' ? 330 : windowHeight], // altura final deseada
});



const interpolatedTransparence = transparence.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 100], // transparencia final deseada
});

	return (
		<View style={{alignItems:'center'}}>
      
     {typeOfMenu === 'menu' || typeOfMenu === '' ? (
     <Animated.View style={{...styles.container,display: typeOfMenu === 'search' ? 'none' : 'flex',transparence:interpolatedTransparence}}>

     <TouchableOpacity onPress={() => {
         setIsOpen(!isOpen)
         setTypeOfMenu('menu')
       }}>
       <MenuSvg width={'24'} height={'24'}/>
     </TouchableOpacity>
     <View style={styles.containerUser}>
       <TouchableOpacity>
         <AvatarSvg width={'38'} height={'38'}/>
       </TouchableOpacity>
       <Text style={styles.navText}>Bienvenido, User</Text>
     </View>

     

<TouchableOpacity onPress={() => {
  setIsOpen(true)
  setTypeOfMenu('search')
 }}>
  <LupaSvg width={'24'} height={'24'} />
</TouchableOpacity>
    


     <TouchableOpacity>
       <CartSvg width={'24'} height={'24'}/>
     </TouchableOpacity>
      
     </Animated.View>
      ) : (
        
        <View style={{flexDirection:'row',gap:20 , width:'90%',marginTop:55}}>
        <TouchableOpacity onPress={() => {
            setIsOpen(false);setTypeOfMenu('')
          }}><Text style={{fontSize:25}}>{`<`}</Text></TouchableOpacity>
        <InputSearchFood isOpen={true} filterIcon={false} finalWidth='90'/>
        
        </View>
          
      )}
      
      
      
      <Animated.View onPress={() => {setIsOpen(false); setTypeOfMenu('')}} 
  style={{
    height: interpolatedHeight,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: typeOfMenu === 'menu' ? '#F2F2F2' : 'white',
    width:'100%',
  }}
>
{typeOfMenu === 'menu' ? (
      <View style={{width:'80%',height: 350,alignItems:'center',justifyContent:'center'}}>
      <View style={{flexDirection: 'row',gap:25,height:60,alignItems:'center'}}><CampaingSvg fill='#514E4E' width='25' height='25'/><Text style={styles.text}>Notificaciones</Text></View>
      <View style={{flexDirection: 'row',gap:25,height:60,alignItems:'center'}}><BookSvg fill='#514E4E' width='25' height='25'/><Text style={styles.text}>Mis pedidos</Text></View>
      <View style={{flexDirection: 'row',gap:25,height:60,alignItems:'center'}}><CuponSvg fill='#514E4E' width='25' height='25'/><Text style={styles.text}>Cupones</Text></View>
      <View style={{flexDirection: 'row',gap:25,height:60,alignItems:'center'}}><CreditCardSvg fill='#514E4E' width='25' height='25'/><Text style={styles.text}>Pagos</Text></View>
      <View style={{flexDirection: 'row',gap:25,height:60,alignItems:'center'}}><InfoSvg fill='#514E4E' width='25' height='25'/><Text style={styles.text}>Términos y condiciones</Text></View>
      
    </View>
      ) : (
        <View style={{height:'100%'}}>
          <View >

            <Text style={{marginTop:30,paddingHorizontal:16}}>Busca por filtro</Text>
				<View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:20}}>
					{tags.map((tag) => (
            <View key={tag} >
							<BtnFiltroComp text={tag}/>
						</View>
						
            ))}

			</ScrollView>
				</View>
            </View>
            <View style={{paddingHorizontal:16,marginTop:20}}>
            <Text>Búsquedas reciente</Text>
            <View style={{width:'100%',height: 200,alignItems:'center',justifyContent:'center',marginTop:20}}>
      <View style={{flexDirection: 'row',gap:20,width:'100%' ,height:60,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'black',paddingHorizontal:20}}><ClockSvg fill='#514E4E' width='16' height='16'/><Text style={styles.text}>Pizza</Text></View>
      <View style={{flexDirection: 'row',gap:20,width:'100%' ,height:60,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'black',paddingHorizontal:20}}><ClockSvg fill='#514E4E' width='16' height='16'/><Text style={styles.text}>Sushi</Text></View>
      <View style={{flexDirection: 'row',gap:20,width:'100%' ,height:60,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'black',paddingHorizontal:20}}><ClockSvg fill='#514E4E' width='16' height='16'/><Text style={styles.text}>Arepa</Text></View>
      </View></View>
          </View>

        
      )}
    

</Animated.View>

       
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		minHeight: 64,
    marginTop: 32,
		paddingHorizontal: 20,
		display: "flex",
		flexDirection: "row",
		gap: 0,
		alignItems: "center",
		justifyContent: "space-between",
    backgroundColor:'white'
	},
	containerUser: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		width: "60%",
	},
	navText: {
    height: 14,
		fontWeight: 500,
		fontSize: 14,
    lineHeight: 14
	},
  text: {width:'80%',fontWeight: 400,color: '#514E4E',fontSize:17}
});
