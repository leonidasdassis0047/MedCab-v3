import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  FormInput,
  FormInputCheck,
  Header,
  IconButton,
  RadioButton,
  TextButton,
} from '../../components';
import {utils} from '../../utils';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {HomeStackParamList} from '../../navigation/HomeStack';

type AddCardProps = NativeStackScreenProps<HomeStackParamList, 'AddCard'> & {};

type Card = {
  id: number;
  name: string;
  icon: any;
  card_no?: string;
  key?: string;
};

const AddCard: React.FC<AddCardProps> = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = React.useState<null | Card>(null);

  const [cardName, setCardName] = React.useState<string>('');
  const [cardNameError, setCardNameError] = React.useState<string>('');

  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [cardNumberError, setCardNumberError] = React.useState<string>('');

  const [expiryDate, setExpiryDate] = React.useState<string>('');
  const [expiryDateError, setExpiryDateError] = React.useState<string>('');

  const [cvv, setCvv] = React.useState<string>('');
  const [cvvError, setCvvError] = React.useState<string>('');

  const [isRemember, setIsRemember] = React.useState<boolean>(false);

  React.useEffect(() => {
    setSelectedCard(route.params?.item as Card);
  }, [route.params?.item]);

  // Disabling submission basing on error states ************************************************
  const isEnableAddCard = () => {
    return (
      cardName !== '' &&
      cardNumber !== '' &&
      expiryDate !== '' &&
      cvv !== '' &&
      cardNameError === '' &&
      cardNumberError === '' &&
      expiryDateError === '' &&
      cvvError === ''
    );
  };

  // Render Header *******************************************************************************
  const renderHeader = () => {
    return (
      <Header
        title="Add new card"
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
        RightComponent={<View style={{width: 40}} />}
      />
    );
  };

  const renderCard = () => {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: '100%',
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: 'hidden',
        }}>
        {/* Card Logo */}
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />

        {/* Card Details */}
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>{cardName}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: COLORS.white, flex: 1, ...FONTS.body3}}>
              {cardNumber}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body3}}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderForm = () => {
    return (
      <View style={{marginTop: SIZES.padding * 2}}>
        {/* Card Number */}
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          autoComplete="cc-number"
          placeholder="Card Number"
          onChangeText={text => {
            utils.validateInput(text, 19, setCardNumberError);
            setCardNumber(
              text
                .replace(/\s/g, '')
                .replace(/(\d{4})/g, '$1 ')
                .trim(),
            );
          }}
          maxLength={19}
          value={cardNumber}
          error={cardNumberError}
          containerStyle={{marginTop: SIZES.radius}}
          AppendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />

        {/* Card Name */}
        <FormInput
          label="Card Name"
          placeholder="Card Name"
          onChangeText={text => {
            utils.validateInput(text, 4, setCardNameError);
            setCardName(text);
          }}
          value={cardName}
          error={cardNameError}
          containerStyle={{marginTop: SIZES.radius}}
          AppendComponent={
            <FormInputCheck value={cardName} error={cardNameError} />
          }
        />

        {/* Expiry Date */}
        <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
          {/* Expiry Date */}
          <FormInput
            label="Expiry Date"
            placeholder="MM/YY"
            onChangeText={text => {
              utils.validateInput(text, 5, setExpiryDateError);
              setExpiryDate(text);
            }}
            maxLength={5}
            value={expiryDate}
            containerStyle={{flex: 1}}
            AppendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />

          {/* CVV */}
          <FormInput
            label="CVV"
            onChangeText={text => {
              utils.validateInput(text, 3, setCvvError);
              setCvv(text);
            }}
            maxLength={3}
            value={cvv}
            containerStyle={{marginLeft: SIZES.radius, flex: 1}}
            AppendComponent={<FormInputCheck value={cvv} error={cvvError} />}
          />
        </View>

        {/* Remember card details */}
        <View style={{alignItems: 'flex-start', marginTop: SIZES.radius}}>
          <RadioButton
            label="Remember card details"
            onPress={() => {
              setIsRemember(prev => !prev);
            }}
            isSelected={isRemember}
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 3,
        }}>
        <TextButton
          disabled={!isEnableAddCard()}
          buttonContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableAddCard()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          label="Add Card"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Card */}
        {renderCard()}

        {/* New Card Form */}
        {renderForm()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default AddCard;
