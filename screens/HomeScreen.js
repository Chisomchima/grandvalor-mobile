import { useNavigation } from "@react-navigation/native";
import Featured from '../components/Featured';
import {FeaturedData} from '../db'
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  ImageBackground;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={Styles.container}>
      {/** header */}
      <View style={Styles.wrap}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: "https://media.istockphoto.com/id/1252858062/photo/beautiful-woman-wearing-stylish-sunglasses.jpg?s=612x612&w=0&k=20&c=Mn2QI1jobjZur6GCS19KNkencE72yMDPR560leEjWm4=",
          }}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Text style={Styles.headerText}>Summer Sales</Text>
            <Text style={Styles.paragraph}>
              Let your fashion do the talking this summer
            </Text>
          </View>
        </ImageBackground>
      </View>
       {/** Featured products */}
       <View style={{flex:1}}>
        { FeaturedData.map((cat) => (
            <Featured id={cat.id} title={cat.title} key={cat.id} cat={cat.cat}/>
        ))}
       </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  wrap: {
    height: 200,
  },
  headerText: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 15,
    color: "white",
  },
});
export default HomeScreen;
