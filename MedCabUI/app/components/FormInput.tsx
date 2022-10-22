import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

type FormInputProps = TextInputProps & {
  placeholder?: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  error?: string;
  AppendComponent?: JSX.Element;
  PrependComponent?: JSX.Element;
};

const FormInput: React.FC<FormInputProps> = ({
  inputStyle,
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  error,
  AppendComponent,
  PrependComponent,
  ...rest
}) => {
  return (
    <View style={[{}, containerStyle]}>
      {/* Label & Error message */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{label}</Text>
        <Text style={{color: COLORS.red, ...FONTS.body4}}>{error}</Text>
      </View>

      {/* Textinput */}
      <View style={[styles.textInputContainer, inputContainerStyle]}>
        {PrependComponent}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          style={[{flex: 1, ...FONTS.body4}, inputStyle]}
          {...rest}
        />
        {AppendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: SIZES.radius,
    marginTop: SIZES.base,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.lightGray2,
  },
});
