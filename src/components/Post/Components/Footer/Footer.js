import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = ({footer}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{footer.likesCounter}</Text>
      <Text style={styles.caption}>{footer.caption}</Text>
      <Text style={styles.postedAt}>{footer.postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#9993a1',
    margin: 3,
  },
});
