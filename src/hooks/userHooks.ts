import { useQuery } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import { connectFactory, useAppContext } from '@/utils/contextFactory';
import { GET_USER } from '@/graphql/user';
import { IUser } from '@/utils/types';

const KEY = 'userInfo';
const DEFAULT_VALUE = {

};
export const useUserContext = () => useAppContext<IUser>(KEY);

export const connect = connectFactory(KEY, DEFAULT_VALUE);

export const useGetUser = () => {
  const { setStore } = useUserContext();
  const location = useLocation();
  const nav = useNavigate();
  const { loading, refetch } = useQuery<{ getUserInfo: IUser }>(GET_USER, {
    onCompleted: (data) => {
      if (data.getUserInfo) {
        const {
          id, name, tel, desc, avatar,
        } = data.getUserInfo;
        setStore({
          id, name, tel, desc, avatar, refetchHandler: refetch,
        });
        if (location.pathname.startsWith('/login')) {
          nav('/');
        }
        return;
      }
      setStore({ refetchHandler: refetch });
      if (location.pathname !== '/login') {
        nav(`/login?orgUrl=${location.pathname}`);
      }
    },
    onError: () => {
      setStore({ refetchHandler: refetch });
      if (location.pathname !== '/login') {
        nav(`/login?orgUrl=${location.pathname}`);
      }
    },
  });
  return { loading, refetch };
};
