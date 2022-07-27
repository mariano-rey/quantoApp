import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Divider;
