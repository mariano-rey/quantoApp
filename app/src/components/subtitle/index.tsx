import React from 'react';
import { Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Props } from './types';

const Subtitle = ({ text, fontSize }: Props) => {
  const styles = {
    title: { fontSize: moderateScale(fontSize || 16), color: '#2d77ed' },
  };

  return <Text style={styles.title}>{text}</Text>;
};

export default Subtitle;
