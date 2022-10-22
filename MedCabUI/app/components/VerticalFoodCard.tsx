import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../constants';

type VerticalFoodCardProps = {
  containerStyle: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  item: {
    id: number;
    name: string;
    description: string;
    categories: number[];
    price: number;
    calories: number;
    isFavourite: boolean;
    image: any;
  };
  onPress: () => void;
};

const VerticalFoodCard: React.FC<VerticalFoodCardProps> = ({
  containerStyle,
  item,
  onPress,
  imageStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: 200,
          padding: SIZES.radius,
          alignItems: 'center',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        },
        containerStyle,
      ]}>
      {/* calories & favourite */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.base,
        }}>
        {/* calories */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={icons.calories} style={{width: 30, height: 30}} />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
            {item.calories} calories
          </Text>
        </View>
        {/* favs */}

        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>

      {/* image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={item.image} style={{height: '100%', width: '100%'}} />
      </View>
      {/* info */}
      <View style={{alignItems: 'center', marginTop: -20}}>
        {/* name */}
        <Text style={{...FONTS.h3}}>{item.name}</Text>
        {/* description */}
        <Text
          style={{
            ...FONTS.body5,
            textAlign: 'center',
            color: COLORS.darkGray2,
          }}>
          {item.description}
        </Text>
        {/* pricing */}
        <Text style={{...FONTS.h2, marginTop: SIZES.radius}}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;

const styles = StyleSheet.create({});
