import React from 'react';
import { Image, View } from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { Props } from './types';

const Avatar = ({ uri }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    margin: 12,
  },
  image: {
    borderColor: '#eb345b',
    borderWidth: 3,
    borderRadius: 32,
    width: moderateScale(50),
    height: moderateScale(50),
  },
});

export default Avatar;
