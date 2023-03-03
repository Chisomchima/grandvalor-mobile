import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import ProductRows from "../components/ProductRows";
import CheckoutModal from "../components/checkoutModal";
import Carts from "../components/Carts";
import axios from "axios";
import { reset, addProduct } from "../redux/cartRedux";

const ProductScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    params: { product },
  } = useRoute();
  const navigation = useNavigation();
  const [allProd, setAllProd] = useState(null);
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addProduct(item));
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://grandvalor-api.onrender.com/api/products"
        );
        setAllProd(res.data);
        dispatch(reset());
      } catch (err) {
        console.log(err);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <CheckoutModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </Modal>

      <Carts setModalVisible={setModalVisible} />
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
                backgroundColor: "#333",
                color: "white",
                textAlign: "center",
              }}
              onPress={() => addItem(product)}
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
            <ProductRows prod={prod} key={prod._id} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
