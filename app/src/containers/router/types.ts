import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type UserStackProps = {
  UserList: undefined;
  UserDetail: { id: number };
};

export type RootStackScreenProps<T extends keyof UserStackProps> =
  NativeStackScreenProps<UserStackProps, T>;
