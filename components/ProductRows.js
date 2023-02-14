import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const ProductRows = ({ prod }) => {
  return (
    <View
      style={{
        margin:2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#eee",
        borderWidth: 2,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 159,
          margin: 5,
        }}
        // onPress={() => {
        //   navigate.navigate("Product", {
        //     product,
        //   });
        // }}
      >
        <Image
          source={{
            uri: prod.img[0],
          }}
          style={{ height: "100%", width: "40%", justifyContent: 'flex-start' }}
        />
        <View style={{ padding: 20, width: "60%"}}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>{prod.title}</Text>
          <Text style={{ fontSize: 12 }}>{prod.desc}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            NGN {prod.price}
          </Text>
          <TouchableOpacity>
          <Text
            style={{
              padding: 10,
              marginTop: 10,
              backgroundColor: "#333",
              color: "white",
              textAlign: "center",
            }}
          >
            Buy Now
          </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductRows;
