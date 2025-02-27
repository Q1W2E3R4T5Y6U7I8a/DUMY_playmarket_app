import React, {useContext} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import posts from '../dumy/postsData';
import { FavoritesContext } from '../../Providers/FavoritesContext';

export default function PostDetails() {
  const { id } = useLocalSearchParams();
  const post = posts.find((p) => p.id === id);
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const toggleFavorite = () => {
    if (isFavorite(post.id)) {
      removeFavorite(post.id);
    } else {
      addFavorite(post);
    }
  };

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Post not found!</Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Post not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.description}>{post.description}</Text>
      </ScrollView>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
        <Image
          source={isFavorite(post.id) ? require('../../assets/star_icon.png') : require('../../assets/star_icon_active.png')}
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e5e4db',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  favoriteIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});