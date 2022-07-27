import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootStackScreenProps } from '../router/types';
import Components from '../../components';
import userSlice from './userSlice';

const UserDetail = ({ route }: RootStackScreenProps<'UserDetail'>) => {
  const { status, user, error } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(userSlice.getUserById(route.params.id));
    }
  }, [dispatch, route.params.id, user]);

  useEffect(() => {
    return () => {
      dispatch(userSlice.cleanUser());
    };
  }, [dispatch]);

  return error ? (
    <Text>{error.message}</Text>
  ) : status === 'loading' ? (
    <ActivityIndicator />
  ) : (
    user && (
      <View style={styles.container}>
        <Components.Avatar uri={user.avatar} size={120} />
        <Components.Title
          text={`${user.first_name} ${user.last_name}`}
          fontSize={40}
        />
        <Components.Subtitle text={`Email: ${user.email}`} />
      </View>
    )
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserDetail;
