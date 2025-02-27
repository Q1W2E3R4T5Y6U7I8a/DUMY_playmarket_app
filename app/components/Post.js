import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const POST_WIDTH = (width - width * 0.05) / 2; // 2.5% padding on each side
const POST_HEIGHT = POST_WIDTH * 1.5; // Adjust height as needed

const Post = ({ post, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(post)} style={styles.postContainer}>
      <Image source={post.image} style={styles.postImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{post.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: POST_WIDTH,
    height: POST_HEIGHT,
    margin: width * 0.025, // 2.5% margin
    borderRadius: 8,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  titleText: {
    color: '#232A2E',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Post;