import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";
import { ArrowSvg, OrangeWaveSvg } from "../../components/svgs/Svgs";
import CardAccordion from "../../components/cards/CardAccordion";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [userData, setUserData] = React.useState([]);
  const navigation = useNavigation();
  const [favorites, setFavorites] = React.useState([]);
  const [votedRemoved, setVotedRemoved] = React.useState(false);

async  function removeVote(id) {
    Alert.alert("Quitaste el restaurante de tus favoritos!");
    await axios.put(`https://c10-51-ft.up.railway.app/users/noFavorite?idUser=4&idRest=${id}`);
    setVotedRemoved(!votedRemoved);
  }



  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await axios.get(`https://c10-51-ft.up.railway.app/users/4`);
        const rests = await axios.get(`https://c10-51-ft.up.railway.app/rest`);
        setUserData(userProfile.data);
        setFavorites(rests.data.filter((rest) => {
          
          if (userProfile.data.favorites && userProfile.data.favorites.includes(rest.id)) {
            return true;
          }
          return false;
        }));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [votedRemoved]);


  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={{ position: "relative" }}>
        <View style={{ position: "static", left: 0,right:0}}>
          <OrangeWaveSvg height={350} width={500} />
        </View>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            backgroundColor: "#ffffff",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 45,
            left: 16,
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.7,
            shadowRadius: 3,
            elevation: 5,
            zIndex: 15,
          }}
          onPress={() => navigation.goBack()}
        >
          <ArrowSvg height={13} width={13} fill="#000000" rotating={90} />
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: userData.img }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ color: "white", fontWeight: 700, fontSize: 22 }}>
            {userData.name}
          </Text>
        </View>
      </View>

      <View>
        <CardAccordion userData={userData} favorites={favorites} removeVote={removeVote}/>
      </View>
    </ScrollView>
  );
}
