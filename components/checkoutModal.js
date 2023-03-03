import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

const CheckoutModal = ({ setModalVisible, modalVisible }) => {
  const products = useSelector((state) => state.cart.products);
console.log(products);
  return (
    <View
      style={{
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#333",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            padding: 10,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Your Shopping Bag
        </Text>
        <TouchableOpacity
          style={{ fontSize: 15, backgroundColor: "coral", padding: 20 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {products.map((product) => (
          <View key={product?._id} style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: product?.img[0],
              }}
              style={{ width: "100%", height: 200, backgroundColor: "grey"}}
            />
            <View style={{ flexDirection: 'row'}}>
              <Text>NGN {{ product,}}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    // backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    // color: "white",
    // fontWeight: "bold",
    // textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: "center",
  },
});

export default CheckoutModal;
