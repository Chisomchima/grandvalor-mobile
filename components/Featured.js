import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import ProductCards from './ProductCards'


const Featured = ({ id, title, cat }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
           `https://grandvalor-api.onrender.com/api/products?category=${cat}`
        );
        setProducts(res?.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <View key={id}>
      <ScrollView
        style={{
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        <Text style={styles.headerText}>{title}</Text>
        {/* <ArrowRightIcon color="red"/> */}
      </ScrollView>

      {/** cards*/}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        { products.map((product) => (
          <ProductCards key={product?._id} product={product}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: "coral",
    fontWeight: "bold",
  },
});

export default Featured;
