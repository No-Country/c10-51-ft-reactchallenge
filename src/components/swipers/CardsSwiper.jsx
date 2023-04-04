import React from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import CardPromocion from "../cards/CardPromocion";
import CardShop from "../cards/CardShop";
const Swiper = require('react-native-swiper').default;



function CardsSwiper({swiperType}) {
  


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
      </Swiper>) : swiperType === 'food' ? (
      <ScrollView horizontal={true} >
      <View style={{ flexDirection: 'row' , gap: 15}}>
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
      </View>
    </ScrollView>

) : swiperType === 'fav' ? (<Swiper autoplay={true} autoplayTimeout={6} >
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
          <CardPromocion />
        </View>
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
          <CardPromocion />
        </View>
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
          <CardPromocion />
        </View>
        </Swiper>) : (<Swiper autoplay={true} autoplayTimeout={6} >
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
          <CardPromocion />
        </View>
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
          <CardPromocion />
        </View>
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
          <CardPromocion />
        </View>
        </Swiper>)}
		
    </>
	);
}

export default CardsSwiper;