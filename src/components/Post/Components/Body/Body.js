import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import ProfilePicture from '../../../ProfilePicture/ProfilePicture';

const Body = ({imageUrl}) => {
  return (
    <View>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').width,
  },
});
