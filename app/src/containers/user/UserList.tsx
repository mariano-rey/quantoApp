import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { RootStackScreenProps } from '../router/types';

const UserList = ({ navigation }: RootStackScreenProps<'UserList'>) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Hello World!</Text>
      <Button
        title="Navigate to UserDetail"
        onPress={() => navigation.push('UserDetail', { id: '1' })}
      />
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default UserList;
