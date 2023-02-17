import React from "react";
import { View, Text } from "react-native";

const Carts = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 10,
        backgroundColor: "coral",
        zIndex: 3,
        width: 400,
        height: 50,
        margin: 10,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        0
      </Text>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        View Cart
      </Text>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        NGN 10000
      </Text>
    </View>
  );
};

export default Carts;
