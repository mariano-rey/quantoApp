import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import Components from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootStackScreenProps } from '../router/types';
import UserListItem from './UserListItem';
import UserSlice from './userSlice';

const UserList = ({ navigation }: RootStackScreenProps<'UserList'>) => {
  const { status, userList, error } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();

  const onPressUser = (id: number) => navigation.push('UserDetail', { id });

  useEffect(() => {
    if (!userList.length) {
      dispatch(UserSlice.getAllUsers({ page: 0, per_page: 10 }));
    }
  }, [dispatch, userList.length]);

  return error ? (
    <Text>{error.message}</Text>
  ) : status === 'loading' ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={userList}
      renderItem={({ item }) => (
        <UserListItem {...item} onPress={onPressUser} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={Components.Divider}
    />
  );
};

export default UserList;
