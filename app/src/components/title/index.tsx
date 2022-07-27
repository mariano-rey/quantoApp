import React from 'react';
import { Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Props } from './types';

const Title = ({ text, fontSize }: Props) => {
  const styles = {
    title: { fontSize: moderateScale(fontSize || 20), color: 'black' },
  };

  return <Text style={styles.title}>{text}</Text>;
};

export default Title;
