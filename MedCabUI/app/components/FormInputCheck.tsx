import React from 'react';
import {Image, View} from 'react-native';
import {COLORS, icons} from '../constants';

type FormInputCheckProps = {
  value: string;
  error: string;
};

const FormInputCheck: React.FC<FormInputCheckProps> = ({value, error}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Image
        source={
          value === '' || (value !== '' && error === '')
            ? icons.correct
            : icons.cancel
        }
        style={{
          height: 18,
          width: 18,
          tintColor:
            value === ''
              ? COLORS.gray
              : value !== '' && error === ''
              ? COLORS.green
              : COLORS.red,
        }}
      />
    </View>
  );
};

export default FormInputCheck;
