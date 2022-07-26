import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserProps } from '../user/types';

export type UserStackProps = {
  UserList: undefined;
  UserDetail: UserProps;
};

export type RootStackScreenProps<T extends keyof UserStackProps> =
  NativeStackScreenProps<UserStackProps, T>;
