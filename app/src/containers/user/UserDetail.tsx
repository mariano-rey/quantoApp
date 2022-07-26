import React from 'react';
import { Text, View } from 'react-native';
import { RootStackScreenProps } from '../router/types';

const UserDetail = ({ route }: RootStackScreenProps<'UserDetail'>) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default UserDetail;
