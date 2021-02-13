import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Post from '../Post/Components/Post';
import Stories from '../Stories/Stories';

const Feed = () => {
  const post = [
    {
      imageUrl: 'https://i.pravatar.cc/500',
      name: 'instagramer',
      footer: {
        caption: 'Beautiful Photo #tbt',
        postedAt: '10 minutes ago',
        likesCounter: 1234,
      },
    },
    {
      imageUrl: 'https://i.pravatar.cc/500',
      name: 'instagramer2',
      footer: {
        caption: 'Beautiful Photo #tbt',
        postedAt: '10 minutes ago',
        likesCounter: 1234,
      },
    },
    {
      imageUrl: 'https://i.pravatar.cc/500',
      name: 'instagramer3',
      footer: {
        caption: 'Beautiful Photo #tbt',
        postedAt: '10 minutes ago',
        likesCounter: 1234,
      },
    },
    {
      imageUrl: 'https://i.pravatar.cc/500',
      name: 'instagramer4',
      footer: {
        caption: 'Beautiful Photo #tbt',
        postedAt: '10 minutes ago',
        likesCounter: 1234,
      },
    },
  ];

  return (
    <FlatList
      data={post}
      keyExtractor={({name}) => name}
      ListHeaderComponent={Stories}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;

const styles = StyleSheet.create({});
