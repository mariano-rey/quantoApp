import axios, { PaginationProps, ResponseData } from '../../http';
import { UserProps } from './types';

const getUsers = async (params: PaginationProps): Promise<UserProps[]> => {
  const { data } = await axios.get<ResponseData<UserProps[]>>('/', {
    params,
  });
  return data.data;
};

const getUserById = async (id: number): Promise<UserProps> => {
  const { data } = await axios.get<ResponseData<UserProps>>(`/${id}`);
  return data.data;
};

export default { getUsers, getUserById };
