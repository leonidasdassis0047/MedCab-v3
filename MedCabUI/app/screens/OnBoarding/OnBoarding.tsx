import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {TextButton} from '../../components';
import {COLORS, constants, FONTS, images, SIZES} from '../../constants';
import {AuthNavigationParamList} from '../../navigation/AuthNavigation';

type OnBoardingProps = NativeStackScreenProps<
  AuthNavigationParamList,
  'OnBoarding'
> & {};

const OnBoarding: React.FC<OnBoardingProps> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const flatListRef = React.useRef<any>();

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onViewChangeRef = React.useRef(
    ({viewableItems, changed}: {viewableItems: Array<any>; changed: any}) => {
      setCurrentIndex(viewableItems[0].index);
    },
  );

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 24, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${item.id}-${index}`.toString()}
              style={{
                borderRadius: 6,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  const renderHeaderLogo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          source={images.logo_02}
          style={{width: SIZES.width * 0.5, height: 100}}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          height: 160,
        }}>
        {/* Pagination or Dots */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Dots />
        </View>

        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}>
            <TextButton
              buttonContainerStyle={{
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.transparent,
              }}
              label="Skip"
              labelStyle={{color: COLORS.darkGray}}
              onPress={() => {
                navigation.replace('SignIn');
              }}
            />
            <TextButton
              buttonContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingVertical: SIZES.radius,
                borderRadius: SIZES.radius,
              }}
              labelStyle={{color: COLORS.white}}
              label="Next"
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}

        {currentIndex === constants.onboarding_screens.length - 1 && (
          <View
            style={{
              marginVertical: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}>
            <TextButton
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.radius,
              }}
              label="Let's Get Started"
              onPress={() => {
                navigation.replace('SignIn');
              }}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={COLORS.lightOrange2} animated />
      {/* Logo */}
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}>
              {/* Header */}
              <View style={{flex: 3}}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: index === 1 ? '92%' : '100%',
                    width: '100%',
                  }}>
                  <Image
                    resizeMode="contain"
                    source={item.bannerImage}
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* Details */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.radius,
                }}>
                <Text style={{...FONTS.h1, fontSize: 24}}>{item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
