import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

const Story = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.names}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {},
  names: {
    textAlign: 'center',
  },
});
