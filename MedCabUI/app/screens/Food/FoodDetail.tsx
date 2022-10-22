import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../../constants';
import {
  CardQuantityButton,
  Header,
  IconButton,
  IconLabel,
  LineDivider,
  Ratings,
  StepperInput,
  TextButton,
} from '../../components';
import {HomeStackParamList} from '../../navigation/HomeStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type FoodDetailProps = NativeStackScreenProps<
  HomeStackParamList,
  'FoodDetail'
> & {};

const FoodDetail: React.FC<FoodDetailProps> = ({route, navigation}) => {
  const [foodItem] = React.useState(route.params.item);
  const [selectedSize, setSelectedSize] = React.useState('');
  const [qty, setQty] = React.useState(0);

  const renderHeader = () => {
    return (
      <Header
        title="Details"
        containerStyle={{
          height: 42,
          paddingHorizontal: SIZES.padding,
          marginTop: 20,
        }}
        LeftComponent={
          <IconButton
            icon={icons.back}
            onPress={() => {
              navigation.goBack();
            }}
            containerStyle={{}}
          />
        }
        RightComponent={
          <CardQuantityButton
            quantity={10}
            onPress={() => {}}
            containerStyle={{}}
          />
        }
      />
    );
  };

  const renderDetails = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Food card */}
        <View
          style={{
            height: 190,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}>
            {/* Calories */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={icons.calories} style={{height: 24, width: 24}} />
              <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
                {foodItem?.calories} calories
              </Text>
            </View>

            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                height: 24,
                width: 24,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          <Image
            resizeMode="contain"
            source={foodItem?.image}
            style={{
              height: 170,
              width: '100%',
            }}
          />
        </View>

        {/* Food info */}
        <View style={{marginTop: SIZES.padding}}>
          <Text style={{...FONTS.h1, color: COLORS.black}}>
            {foodItem?.name}
          </Text>
          {/* description */}
          <Text
            style={{
              ...FONTS.body3,
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: 'justify',
            }}>
            {foodItem?.description}
          </Text>

          {/* Ratings, duration & shipping */}
          <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
            {/* ratings */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label="4.5"
              labelStyle={{color: COLORS.white}}
            />

            {/* duration */}
            <IconLabel
              containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
              icon={icons.clock}
              iconStyle={{tintColor: COLORS.black}}
              label="30 Mins"
            />

            {/* shipping */}
            <IconLabel
              containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
              icon={icons.dollar}
              iconStyle={{tintColor: COLORS.black}}
              label="Free shipping"
            />
          </View>

          {/* Sizes */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.padding,
            }}>
            <Text style={{...FONTS.h3}}>Sizes</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: SIZES.padding,
              }}>
              {dummyData.sizes.map((size, index) => {
                return (
                  <TextButton
                    label={size.label}
                    labelStyle={{
                      color:
                        selectedSize === size.id.toString()
                          ? COLORS.white2
                          : COLORS.gray,
                      ...FONTS.body3,
                    }}
                    key={`sizes-${size.id}-${index}`}
                    buttonContainerStyle={{
                      height: 36,
                      width: 50,
                      margin: SIZES.base,
                      borderWidth: 1,
                      borderRadius: SIZES.base,
                      borderColor: COLORS.gray2,
                      backgroundColor:
                        selectedSize === size.id.toString()
                          ? COLORS.primary
                          : COLORS.transparent,
                    }}
                    onPress={() => {
                      setSelectedSize(size.id.toString());
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderRestaurant = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Restaurant');
        }}
        style={{
          marginVertical: SIZES.padding,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'flex-end',
        }}>
        <Image
          source={images.profile}
          style={{width: 46, height: 46, borderRadius: SIZES.base}}
        />

        {/* info */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h3}}>{dummyData.myProfile.name}</Text>
          <Text style={{...FONTS.body4, color: COLORS.gray}}>
            1.2 km away from you
          </Text>
        </View>

        {/* ratings */}
        <Ratings rating={4} containerStyle={{marginBottom: SIZES.base}} />
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 120,
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
          marginBottom: SIZES.padding * 2,
        }}>
        {/* stepper input counter */}
        <StepperInput
          value={qty}
          onAdd={() => {
            setQty(prevQty => prevQty + 1);
          }}
          onMinus={() => {
            setQty(prevQty => {
              if (prevQty === 0) {
                return 0;
              }
              return prevQty - 1;
            });
          }}
          containerStyle={{marginRight: SIZES.padding, width: '46%'}}
        />

        {/* buy now button */}
        <TextButton
          buttonContainerStyle={{
            height: 44,
            paddingHorizontal: SIZES.base,
            borderRadius: SIZES.base,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            flex: 1,
          }}
          label="Buy"
          labelStyle={{fontSize: 15}}
          labelRight={`$${10.99}`}
          labelRightStyle={{fontSize: 15}}
          onPress={() => {
            navigation.navigate('MyCart');
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <ScrollView>
        {/* Food detail */}
        {renderDetails()}

        <LineDivider />

        {/* Restaurant serving this food */}
        {renderRestaurant()}

        <LineDivider />

        {/* Footer */}
        {renderFooter()}
      </ScrollView>

      {/* Footer for cart adjustments */}
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
