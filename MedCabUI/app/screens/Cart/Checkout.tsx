import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Text, View} from 'react-native';

import {
  CardItem,
  FooterTotal,
  FormInput,
  Header,
  IconButton,
} from '../../components';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {HomeStackParamList} from '../../navigation/HomeStack';

type CheckoutProps = NativeStackScreenProps<
  HomeStackParamList,
  'Checkout'
> & {};

type Card = {
  id: number;
  name: string;
  icon: any;
  card_no?: string;
  key?: string;
};

const Checkout: React.FC<CheckoutProps> = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = React.useState<null | Card>(null);

  React.useEffect(() => {
    setSelectedCard({...route.params?.item, key: 'MyCard'} as Card);
  }, [route.params?.item]);

  // Render Header *******************************************************************************
  const renderHeader = () => {
    return (
      <Header
        title="Checkout"
        containerStyle={{
          height: 42,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
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
        RightComponent={<View style={{width: 40}} />}
      />
    );
  };

  // Render My Cards
  const renderMyCards = () => {
    return (
      <View>
        <Text style={{...FONTS.h3}}> Cards Available</Text>
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                key={`${item.id}-${index}`}
                item={item}
                onPress={() => {
                  setSelectedCard({...item, key: 'MyCard'});
                }}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ===
                  `MyCard-${item.id}`
                }
              />
            );
          })}
      </View>
    );
  };

  const renderDeilveryAddress = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Delivery Address</Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}>
          <Image source={icons.location1} style={{height: 32, width: 32}} />
          <Text
            style={{marginLeft: SIZES.radius, width: '86%', ...FONTS.body3}}
            numberOfLines={2}>
            {dummyData.myProfile.address} Kampla Uganda
          </Text>
        </View>
      </View>
    );
  };

  const renderCoupon = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Add Coupon</Text>

        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: 'hidden',
          }}
          placeholder="Coupon code"
          keyboardType="number-pad"
          maxLength={6}
          AppendComponent={
            <View
              style={{
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.discount}
                style={{width: 32, height: 32, resizeMode: 'center'}}
              />
            </View>
          }
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-400}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}>
        {/* Available Cards */}
        {renderMyCards()}

        {/* Delivery Address */}
        {renderDeilveryAddress()}

        {/* Coupon */}
        {renderCoupon()}
      </KeyboardAwareScrollView>

      <FooterTotal
        total={39.95}
        shippingFee={0.0}
        subTotal={39.95}
        onPress={() => {
          navigation.replace('Success');
        }}
      />
    </View>
  );
};

export default Checkout;
