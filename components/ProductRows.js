import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { reset, removeProduct, decreaseProduct, addProduct, increaseProduct } from "../redux/cartRedux";

const ProductRows = ({ prod }) => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(increaseProduct(item));
};

const removeItem = () => {
  dispatch(decreaseProduct());
};


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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 200,
          margin: 5,
        }}
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
          <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                borderRadius: 50,
                textAlign: 'center',
                fontSize: 30,
              }}
              onPress={removeItem}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 20, textAlign: 'center', }}>
          {items.product.quantity || 0}
          </Text>
          <TouchableOpacity
            style={{
              margin: 10,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
            }}
            onPress={() => addItem(prod)}
          >
            <Text style={{ fontWeight: "bold", color: "white", textAlign: 'center', fontSize: 30 }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
          <Text
            style={{
              padding: 10,
              marginTop: 10,
              backgroundColor: "#333",
              color: "white",
              textAlign: "center",
            }}
          >
            Add to Cart
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductRows;
