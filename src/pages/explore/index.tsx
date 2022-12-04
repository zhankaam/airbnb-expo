import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { HotelType } from 'src/services/http/explore/types';
import { useGetHotelsQuery } from 'src/store/explore';

const { width } = Dimensions.get('window');

const Explore = () => {
  const { data: hotels, isLoading, isSuccess, isError, error } = useGetHotelsQuery();
  const { card, image, container, cardText } = styles;

  const renderItem = ({ item }: { item: HotelType }) => (
    <TouchableOpacity style={card}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={false}
        data={item.pictures}
        pagingEnabled
        snapEnabled
        scrollAnimationDuration={1000}
        onSnapToItem={(index: number) => console.log('current index:', index)}
        renderItem={({ item }: { item: string }) => <Image style={image} source={{ uri: item }} />}
      />
      <Text style={cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return <FlatList style={container} data={hotels} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  card: {
    marginBottom: 60,
    width: '100%',
  },
  cardText: {
    fontSize: 16,
    padding: 10,
  },
});

export default Explore;
