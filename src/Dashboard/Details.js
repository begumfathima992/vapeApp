import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../res';

export default function Details({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.desc}>This is the detail page of {item.name}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  image: { height: 150, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.APPBLACK },
  price: { fontSize: 18, color: '#00e0ff', marginVertical: 10 },
  desc: {
    fontSize: 14,
    color: Colors.GRAY,
    marginTop: 10,
    textAlign: 'center',
  },
});
