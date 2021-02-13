import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function ProfilePicture({uri, size = 70}) {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{uri: uri}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 76,
    width: 76,
    margin: 5,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#eccaf8',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#c015a3',
  },
});
