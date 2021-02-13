import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Post = ({post}) => {
  return (
    <>
      <Header imageUri={'https://i.pravatar.cc/80'} name={post.name} />
      <Body imageUrl={post.imageUrl} />
      <Footer footer={post.footer} />
    </>
  );
};

export default Post;

const styles = StyleSheet.create({});
