import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { useGetHotelsQuery } from 'src/store/explore';

const Explore = () => {
  const { data: hotels, isLoading, isSuccess, isError, error } = useGetHotelsQuery();

  return (
    <SafeAreaView>
      <Text>Explore page</Text>
      <FlatList
        data={hotels}
        renderItem={({ item }) => {
          console.log({ item });
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Explore;
