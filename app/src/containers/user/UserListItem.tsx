import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { UserListItemProps } from './types';
import Components from '../../components';

const UserListItem = (props: UserListItemProps) => {
  const { avatar, email, first_name, onPress, id, last_name } = props;

  const onUserPress = () => onPress(id);

  return (
    <TouchableOpacity style={styles.container} onPress={onUserPress}>
      <Components.Avatar uri={avatar} />
      <View>
        <Components.Title text={`${first_name} ${last_name}`} />
        <Components.Subtitle text={`${email}`} />
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: moderateScale(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserListItem;
