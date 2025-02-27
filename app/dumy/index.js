import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import posts from '../dumy/postsData';

export default function DumyScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/post/${item.id}`} asChild>
            <TouchableOpacity style={styles.postItem}>
              <Image source={item.image} style={styles.image} />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postItem: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#e5e4db',
    alignItems: 'center',
    justifyContent: '#2F7FAD',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
});