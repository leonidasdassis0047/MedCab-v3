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

type HorizontalFoodCardProps = {
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

const HorizontalFoodCard: React.FC<HorizontalFoodCardProps> = ({
  containerStyle,
  item,
  onPress,
  imageStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Image source={item.image} style={[imageStyle]} />
      <View
        style={{
          flex: 1,
        }}>
        {/* name */}
        <Text style={{...FONTS.h3, fontSize: 17}}>{item.name}</Text>
        {/* description */}
        <Text
          style={{...FONTS.body4, color: COLORS.darkGray2}}
          numberOfLines={1}>
          {item.description}
        </Text>
        {/* pricing */}
        <Text style={{...FONTS.h2, marginTop: SIZES.base}}>${item.price}</Text>
      </View>

      {/* Calories */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 4,
          right: SIZES.radius,
        }}>
        <Image source={icons.calories} style={{width: 30, height: 30}} />
        <Text style={{...FONTS.body5, color: COLORS.darkGray2}}>
          {item.calories} calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
});
