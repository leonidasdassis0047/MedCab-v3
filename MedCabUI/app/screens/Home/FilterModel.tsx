import React from 'react';
import {
  Animated,
  Modal,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {
  IconButton,
  TextButton,
  TextIconButton,
  TwoPointSlider,
} from '../../components';
import {COLORS, constants, FONTS, icons, SIZES} from '../../constants';

type FilterModelProps = {
  isVisible: boolean;
  onClose: () => void;
};

const FilterModel: React.FC<FilterModelProps> = ({isVisible, onClose}) => {
  const [showFilterModel, setShowFilterModel] =
    React.useState<boolean>(isVisible);

  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (showFilterModel) {
      // onClose();
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        onClose();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFilterModel]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 640],
  });

  const [deliveryTime, setDeliveryTime] = React.useState('');
  const [ratings, setRatings] = React.useState('');
  const [tags, setTags] = React.useState('');

  const renderDistance = () => {
    return (
      <Section title="Filter distance">
        <View style={{alignItems: 'center'}}>
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            postFix="km"
            onValuesChange={values => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderDeliveryTime = () => {
    return (
      <Section
        containerStyle={{
          marginTop: 40,
        }}
        title="Delivery Time">
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`${item.id}-${index}`.toString()}
                label={item.label}
                labelStyle={{
                  color:
                    item.id.toString() === deliveryTime
                      ? COLORS.white
                      : COLORS.gray,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id.toString() === deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => {
                  setDeliveryTime(item.id.toString());
                }}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderPricingRange = () => {
    return (
      <Section title="Pricing Range">
        <View
          style={{
            alignItems: 'center',
          }}>
          <TwoPointSlider
            values={[10, 50]}
            min={1}
            max={100}
            preFix="$"
            onValuesChange={values => {
              console.log(values);
            }}
          />
        </View>
      </Section>
    );
  };

  const renderRatings = () => {
    return (
      <Section title="Ratings" containerStyle={{marginTop: 40}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`${item.id}-${index}`}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  margin: 4,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id.toString() === ratings
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                label={item.label.toString()}
                labelStyle={{
                  color:
                    item.id.toString() === ratings ? COLORS.white : COLORS.gray,
                }}
                icon={icons.star}
                iconStyle={{
                  tintColor:
                    item.id.toString() === ratings ? COLORS.white : COLORS.gray,
                  width: 16,
                  height: 16,
                }}
                onPress={() => {
                  setRatings(item.id.toString());
                }}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderTags = () => {
    return (
      <Section title="Tags">
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={`${item.id}-${index}`}
                label={item.label}
                labelStyle={{
                  color:
                    item.id.toString() === tags ? COLORS.white : COLORS.gray,
                }}
                onPress={() => {
                  setTags(item.id.toString());
                }}
                buttonContainerStyle={{
                  height: 50,
                  margin: 4,
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id.toString() === tags
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  return (
    <React.Fragment>
      <StatusBar
        backgroundColor={COLORS.transparentBlackModel}
        barStyle={'light-content'}
        animated
        showHideTransition={'fade'}
      />
      <Modal animationType="slide" transparent visible={isVisible}>
        <View style={{flex: 1, backgroundColor: COLORS.transparentBlackModel}}>
          {/* Transparent background */}
          <TouchableWithoutFeedback
            onPress={() => setShowFilterModel(false)}
            style={{
              backgroundColor: COLORS.transparent,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            />
          </TouchableWithoutFeedback>
          <Animated.View
            style={{
              position: 'absolute',
              left: 0,
              width: '100%',
              height: '100%',
              padding: SIZES.padding,
              borderTopRightRadius: SIZES.radius,
              borderTopLeftRadius: SIZES.radius,
              backgroundColor: COLORS.white,
              top: modalY,
            }}>
            {/* Header */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                  fontSize: 18,
                  textTransform: 'capitalize',
                }}>
                Filter search
              </Text>

              <IconButton
                containerStyle={{
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: COLORS.gray2,
                }}
                icon={icons.cross}
                iconStyle={{tintColor: COLORS.gray2}}
                onPress={() => {
                  setShowFilterModel(false);
                }}
              />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 250,
              }}>
              {/* distance filter */}
              {renderDistance()}

              {/* Delivery time section */}
              {renderDeliveryTime()}

              {/* Pricing reange */}
              {renderPricingRange()}

              {/* Ratings */}
              {renderRatings()}

              {/* Tags */}
              {renderTags()}
            </ScrollView>

            {/* Apply Button */}
            <View
              style={{
                position: 'absolute',
                bottom: SIZES.height * 0.08,
                left: 0,
                right: 0,
                height: 110,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
                backgroundColor: COLORS.white,
              }}>
              <TextButton
                label="Apply Filters"
                buttonContainerStyle={{
                  backgroundColor: COLORS.primary,
                  height: 50,
                  borderRadius: SIZES.base,
                }}
                onPress={() => {
                  console.log('Apply Filters');
                }}
              />
            </View>
          </Animated.View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default FilterModel;

const Section: React.FC<{
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
}> = ({children, containerStyle, title}) => {
  return (
    <View style={[styles.sectionContainer, containerStyle]}>
      <Text style={{...FONTS.h3}}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: SIZES.padding,
  },
});
