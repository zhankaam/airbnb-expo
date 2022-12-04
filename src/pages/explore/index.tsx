import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import { useGetHotelsQuery } from 'src/store/explore';

const Explore = () => {
  const { data: hotels, isLoading, isSuccess, isError, error } = useGetHotelsQuery();
  const { width } = Dimensions.get('window');
  // console.log({ width });

  return (
    <SafeAreaView style={styles.container}>
      <Text>Explore page</Text>
      <FlatList
        data={hotels}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Carousel
              loop
              width={width}
              height={width / 2}
              autoPlay={false}
              data={item.pictures}
              scrollAnimationDuration={1000}
              onSnapToItem={(index: number) => console.log('current index:', index)}
              renderItem={({ index }: { index: number }) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    backgroundColor: '#fff',
                    marginLeft: 10,
                    marginRight: 10,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ textAlign: 'center', fontSize: 30 }}>{index}</Text>
                </View>
              )}
            />
          </View>
        )}
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
