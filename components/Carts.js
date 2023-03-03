import React from "react";
import { useSelector } from "react-redux";
import { TouchableOpacity, Text } from "react-native";

const Carts = ({ setModalVisible }) => {
  const items = useSelector((state) => state.cart);

  return (
    <TouchableOpacity
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
      onPress={() => setModalVisible(true)}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {items?.quantity}
      </Text>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        View Cart
      </Text>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        NGN {items?.total}
      </Text>
    </TouchableOpacity>
  );
};

export default Carts;
