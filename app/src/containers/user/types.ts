import { SerializedError } from '@reduxjs/toolkit';

export interface UserProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserListItemProps extends UserProps {
  onPress: () => void;
}

export interface Props {
  status: 'idle' | 'loading' | 'error';
  userList: UserProps[];
  error: SerializedError | null;
}
