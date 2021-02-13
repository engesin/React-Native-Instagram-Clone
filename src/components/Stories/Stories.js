import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Story from '../Story/Story';

const data = [
  {
    name: 'Engin',
    uri: 'https://i.pravatar.cc/80',
  },
  {
    name: 'Merve',
    uri: 'https://i.pravatar.cc/80',
  },
  {
    name: 'Can',
    uri: 'https://i.pravatar.cc/80',
  },
  {
    name: 'Neşe',
    uri: 'https://i.pravatar.cc/80',
  },
  {
    name: 'Mahmut',
    uri: 'https://i.pravatar.cc/80',
  },
  {
    name: 'Ayşe',
    uri: 'https://i.pravatar.cc/80',
  },
  {
    name: 'Barış',
    uri: 'https://i.pravatar.cc/80',
  },
  {
    name: 'Mutlu',
    uri: 'https://i.pravatar.cc/80',
  },
];

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      horizontal
      keyExtractor={({name}) => name}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story imageUri={item.uri} name={item.name} />}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
