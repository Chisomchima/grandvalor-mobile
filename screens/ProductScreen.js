import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ProductRows from "../components/ProductRows";
import axios from "axios";

const ProductScreen = () => {
  const [allProd, setAllProd] = useState([]);
  const {
    params: { product },
  } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          "https://grandvalor-api.onrender.com/api/products"
        );
        // console.log((await res).data, 'chisom')
        setAllProd(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
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
        <TouchableOpacity>
          <Text
            style={{
              padding: 10,
              marginTop: 10,
              backgroundColor: "coral",
              color: "white",
              textAlign: "center",
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
      {/* * Product rows */}
      <View style={{ margin: 10, padding: 10 }}>
        <Text style={{
              padding: 10,
              color: "#333",
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: "center",
            }}> View More Products</Text>
        {allProd?.map((prod) => (
          <ProductRows prod={prod} key={prod._id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
