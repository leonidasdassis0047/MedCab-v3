import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  CardQuantityButton,
  FooterTotal,
  Header,
  IconButton,
  StepperInput,
} from '../../components';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeStack';

type MyCartProps = NativeStackScreenProps<HomeStackParamList, 'MyCart'> & {};

const MyCart: React.FC<MyCartProps> = ({navigation}) => {
  const [myCartList, setMyCartList] = React.useState(dummyData.myCart);

  // Handler: Update Cart list item quantity *****************************************************
  const updateQuantityHandler = (newQty: number, id: string) => {
    const newMyCartList = myCartList.map(mcl => {
      return mcl.id.toString() === id ? {...mcl, qty: newQty} : mcl;
    });

    setMyCartList(newMyCartList);
  };

  // Handler: Remove Cart list item  *************************************************************
  const removeCartListItemHandler = (id: string) => {
    let newMyCartList = [...myCartList];
    const index = newMyCartList.findIndex(item => item.id.toString() === id);
    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
  };

  // Render Header *******************************************************************************
  const renderHeader = () => {
    return (
      <Header
        title="My Cart"
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

  // Render Cart List ***************************************************************************
  const renderCartList = () => {
    return (
      <FlatList
        data={myCartList}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          marginTop: SIZES.radius,
        }}
        renderItem={({item}) => {
          return (
            <View
              style={[
                {
                  height: 100,
                  backgroundColor: COLORS.lightGray2,
                  marginTop: SIZES.base,
                },
                styles.cartItemContainer,
              ]}>
              {/* image */}
              <View style={{width: 90, height: 100, marginLeft: -10}}>
                <Image
                  source={item.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 10,
                  }}
                />
              </View>

              {/* info */}
              <View style={{flex: 1}}>
                <Text style={{...FONTS.body3}}>{item.name}</Text>
                <Text style={{...FONTS.h3, color: COLORS.primary}}>
                  ${item.price}
                </Text>
              </View>

              {/* counter */}
              <StepperInput
                value={item.qty}
                containerStyle={{
                  height: 46,
                  width: 124,
                  backgroundColor: COLORS.white,
                }}
                onAdd={() => {
                  updateQuantityHandler(item.qty + 1, item.id.toString());
                }}
                onMinus={() => {
                  updateQuantityHandler(item.qty - 1, item.id.toString());
                }}
              />
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      {renderHeader()}

      {/* Cart List */}
      {renderCartList()}

      {/* Footer */}
      <FooterTotal
        subTotal={37.95}
        shippingFee={0.0}
        total={37.95}
        onPress={() => {
          navigation.navigate('MyCard');
        }}
      />
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
