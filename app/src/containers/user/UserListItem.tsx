import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { UserProps } from './types';
import Components from '../../components';

const UserListItem = (props: UserProps) => {
  const { avatar, email, first_name, id, last_name } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Components.Avatar uri={avatar} />
      <View>
        <Text style={styles.title}>
          {first_name} {last_name}
        </Text>
        <Text style={styles.subtitle}>{email}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: moderateScale(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: moderateScale(20), color: 'black' },
  subtitle: { fontSize: moderateScale(16), color: '#2d77ed' },
});

export default UserListItem;
