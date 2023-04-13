import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { ArrowSvg, BookSvg, EditSvg, HeartSvg, LocationSvg } from "../svgs/Svgs";


export default function Accordion({ title,iconType,userAddresses,userData, userFavorites}) {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [collapsibleContent, setCollapsibleContent] = React.useState('address');

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  //icons props
  const icon = {
    heart: <HeartSvg height={16} width={16} fill="#00869F" />,
    book: <BookSvg height={16} width={16} fill="#00869F" />,
    location: <LocationSvg height={16} width={16} fill="#00869F" />,
  }


  return (
    <View style={{ zIndex: 1 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          height: 60,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={toggleAccordion}
      >
        {icon[iconType]}
        <Text style={{ color: "#4D4D4D", width: "80%" }}>{title}</Text>
        <ArrowSvg height={16} width={16} fill="#00869F" rotating={0}/>
      </TouchableOpacity>


      <Collapsible collapsed={isCollapsed} style={styles.accordionBody}>
        {collapsibleContent === 'address' ? (
          <View style={styles.cardContent}>
          <Text>direcciones</Text>
          <EditSvg height={16} width={16} fill="#00869F" />
        </View>
        ) : collapsibleContent === 'data' ? (
          <View style={styles.cardContent}>
          <Text>datos</Text>
          <EditSvg height={16} width={16} fill="#00869F" />
        </View>
        ) : collapsibleContent === 'favorites' ? (
          <View style={styles.cardContent}>
          <Text>favoritos</Text>
          <EditSvg height={16} width={16} fill="#00869F" />
        </View>
        ) : null}
        
      </Collapsible>


    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: "green",
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
    height:35
  },
  accordionBody: {
    padding: 16,
  },
});