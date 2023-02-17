import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import ProductRows from "../components/ProductRows";
import Carts from "../components/Carts";
import axios from "axios";
import { reset, removeProduct, decreaseProduct, addProduct, increaseProduct } from "../redux/cartRedux";

const ProductScreen = () => {
  const {
    params: { product },
  } = useRoute();
  const navigation = useNavigation();
  const [allProd, setAllProd] = useState(null);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addItem = (item) => {
      dispatch(increaseProduct(item));
  };

  const removeItem = () => {
    dispatch(decreaseProduct());
};
 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://grandvalor-api.onrender.com/api/products");
        setAllProd(res.data);
        dispatch(reset())
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
      }}
    >
      <Carts />
      <ScrollView>
        <View>
          <Image
            source={{
              uri: product.img[0],
            }}
            style={{ width: "100%", height: 200, backgroundColor: "grey" }}
          />
        </View>

        {/**product details */}
        <View style={{ padding: 20, backgroundColor: "#eee" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {product.title}
          </Text>
          <Text style={{ fontSize: 12 }}>{product.desc}</Text>
          <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 12 }}>
            NGN {product.price}
          </Text>
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
                  textAlign: "center",
                  fontSize: 30,
                }}
                onPress = {removeItem}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 20,
                textAlign: "center",
              }}
            >
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
              onPress={()=>addItem(product)}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 30,
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
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
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        {/* * Product rows */}
        <View style={{ margin: 10, padding: 10 }}>
          <Text
            style={{
              padding: 10,
              color: "#333",
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            View More Products
          </Text>
          {allProd?.map((prod) => (
            <ProductRows
              prod={prod}
              key={prod._id}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
