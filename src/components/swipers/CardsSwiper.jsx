import React from "react";
import { ScrollView,Text } from "react-native";
import { View } from "react-native";
import CardPromocion from "../cards/CardPromocion";
import CardShop from "../cards/CardShop";
import CardMenu from "../cards/CardMenu";
import { BtnPrimaryIconDef } from "../buttons/BtnsIcon";
import { useNavigation } from "@react-navigation/native";
const Swiper = require('react-native-swiper').default;



function CardsSwiper({swiperType,title}) {
  const navigation = useNavigation();

const toRestaurant = ()=> {navigation.navigate("Order")}

	return (
    <>
    {swiperType === 'promo' ? (
      
    <Swiper autoplay={true} autoplayTimeout={6} height={200}>
      <View style={{justifyContent: 'center' , alignItems: 'center'}}>
        <CardPromocion />
      </View>
      <View style={{justifyContent: 'center' , alignItems: 'center'}}>
        <CardPromocion />
      </View>
      <View style={{justifyContent: 'center' , alignItems: 'center'}}>
        <CardPromocion />
      </View>
      </Swiper>
      
      ) : swiperType === 'food' ? (
        <View>
          
      <Text
      style={{
        width: "100%",
        fontSize:17,
        fontWeight: 700,
        padding: 16
      }}
      >
      {title}
    </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width: '100%'}}>
      <View style={{ flexDirection: 'row',paddingBottom:10}}>
        <CardShop title='Mc donnalds' description='La casa de hamburguesas que te espera con una sonrisa' type='rest' to={()=>toRestaurant()}/>
        <CardShop title='Mc donnalds' description='La casa de hamburguesas que te espera con una sonrisa' type='rest'/>
        <CardShop title='Mc donnalds' description='La casa de hamburguesas que te espera con una sonrisa' type='rest'/>
        <CardShop title='Mc donnalds' description='La casa de hamburguesas que te espera con una sonrisa' type='rest'/>
        <CardShop title='Mc donnalds' description='La casa de hamburguesas que te espera con una sonrisa' type='rest'/>
      </View>
    </ScrollView>
    <View style={{alignItems: 'flex-end',width:'100%'}}><BtnPrimaryIconDef text='Ver todo'/></View>
    </View>

) : swiperType === 'fav' ? (
  <View>

      <Text
      style={{
        width: "100%",
        fontSize:17,
        fontWeight: 700,
        padding: 16
      }}
      >
      {title}
    </Text>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={{ flexDirection: 'row' ,paddingBottom:10}}>
        <CardMenu/>
        <CardMenu/>
        <CardMenu/>
        <CardMenu/>
        <CardMenu/>
      </View>
      
    </ScrollView>
    <View style={{alignItems: 'flex-end',width:'100%',paddingBottom1:25}}><BtnPrimaryIconDef text='Ver todo'/></View></View>) : (<></>)}
		
    </>
	);
}

export default CardsSwiper;