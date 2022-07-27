import React from 'react';
import { Image, View } from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { Props } from './types';

const Avatar = ({ uri, size }: Props) => {
  const dynamicStyle = {
    borderRadius: size || 50,
    width: moderateScale(size || 50),
    height: moderateScale(size || 50),
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, dynamicStyle]} />
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
  },
});

export default Avatar;
