import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function ProductCards({product}) 
{
    const navigate = useNavigation();
  return (
    <TouchableOpacity style={{borderColor: '#eee', borderWidth: 1, borderRadius: 10, width: 300, height:250, margin:5}}
    onPress ={() => {
        navigate.navigate('Product', {
          product,
        })
      }}
    >
        <Image
             source={{
                uri: product.img[0],
             }}
             style={{height: "70%", width: '100%'}}
        />
        <View style={{padding: 5}}>
            <Text style={{ fontWeight: "bold", fontSize: 17}}>{product.title}</Text>
            <Text style={{ fontSize: 12}}>{product.desc}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 17}}>NGN {product.price}</Text>
        </View>
    </TouchableOpacity>
  )
}