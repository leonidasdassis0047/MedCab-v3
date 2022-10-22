import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Header,
  LineDivider,
  TextButton,
  TextIconButton,
} from '../../components';
import {COLORS, constants, FONTS, icons, SIZES} from '../../constants';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeStack';

type DeliveryStatusProps = NativeStackScreenProps<
  HomeStackParamList,
  'DeliveryStatus'
> & {};

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({navigation}) => {
  const [currentStep, setCurrentStep] = React.useState(4);

  // Render Header *******************************************************************************
  const renderHeader = () => {
    return (
      <Header
        title="Delivery Status"
        containerStyle={{
          height: 42,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
        }}
      />
    );
  };

  // Render Info ********************************************************************************
  const renderInfo = () => {
    return (
      <View
        style={{
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text style={{textAlign: 'center', color: COLORS.gray, ...FONTS.body4}}>
          Estimated Delivery
        </Text>
        <Text style={{textAlign: 'center', ...FONTS.h2}}>
          10 Nov 2022 | 12:30 PM
        </Text>
      </View>
    );
  };

  // Render Track Order ***************************************************************
  const renderTrackOrder = () => {
    return (
      <View
        style={{
          marginTop: SIZES.base,
          paddingVertical: SIZES.base,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: SIZES.padding - 4,
            paddingHorizontal: SIZES.radius,
          }}>
          <Text style={{...FONTS.h3}}>Track Order</Text>
          <Text style={{...FONTS.body3, color: COLORS.gray}}>KLANa47Z</Text>
        </View>

        <LineDivider lineStyle={{backgroundColor: COLORS.lightGray2}} />

        {/* Order Status */}
        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`order-status${item.id}-${index}`}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: -6,
                  }}>
                  <Image
                    source={icons.check_circle}
                    style={{
                      width: 40,
                      height: 40,

                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />
                  <View style={{marginLeft: SIZES.radius}}>
                    <Text style={{...FONTS.h3}}>{item.title}</Text>
                    <Text style={{color: COLORS.gray, ...FONTS.body4}}>
                      {item.sub_title}
                    </Text>
                  </View>
                </View>

                {index < constants.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep && (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      />
                    )}

                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{width: 4, height: 50, marginLeft: 17}}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  // Render Footer *************************************************************
  const renderFooter = () => {
    return (
      <View style={{marginTop: SIZES.radius, marginBottom: SIZES.padding * 3}}>
        {currentStep < constants.track_order_status.length - 1 && (
          <View style={{flexDirection: 'row', height: 50}}>
            {/* Cancel */}
            <TextButton
              buttonContainerStyle={{
                width: '40%',
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancel"
              labelStyle={{color: COLORS.primary}}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            {/* MapView Button */}
            <TextIconButton
              label="View Map"
              labelStyle={{color: COLORS.white}}
              icon={icons.map}
              iconPosition="right"
              containerStyle={{
                backgroundColor: COLORS.primary,
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                navigation.navigate('DeliveryMap');
              }}
            />
          </View>
        )}

        {currentStep === constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={{
              height: 50,
              borderRadius: SIZES.radius,
            }}
            label="Done"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/* Info */}
      {renderInfo()}

      {/* Track Order */}
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default DeliveryStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
  },
});
