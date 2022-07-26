import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootStackScreenProps } from '../router/types';
import UserSlice from './userSlice';

const UserList = ({ navigation }: RootStackScreenProps<'UserList'>) => {
  const { status, userList, error } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();

  // const onPressUser = () => {
  //   // navigation.push('UserDetail', { id: '1' });
  // };

  const renderContent = () => {
    if (error) {
      return <Text>{error.message}</Text>;
    }
    if (status === 'loading') {
      return <Text>LOADING...</Text>;
    }

    return userList.map(({ id, first_name, last_name }) => (
      <Text key={id}>
        {first_name} {last_name}
      </Text>
    ));
  };

  useEffect(() => {
    if (!userList.length) {
      dispatch(UserSlice.getAllUsers({ page: 0, per_page: 10 }));
    }
  }, [dispatch, userList.length]);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {renderContent()}
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default UserList;
