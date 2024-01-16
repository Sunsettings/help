import { currentOrg } from '@/utils';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { message } from 'antd';
import { onError } from '@apollo/client/link/error'; // 引入onError
import { AUTH_TOKEN } from './constants';

const uri = '/graphql';

const httpLink = createHttpLink({
  uri,
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
      orgId: currentOrg()?.value,
    },
  };
});

let hasUnauthorizedErrorShown = false;
const errorLink = onError(({
  graphQLErrors,
  networkError,
}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((item) => {
      if (item.message === 'Unauthorized' && !hasUnauthorizedErrorShown) {
        message.error('登录失效，请登录');
        hasUnauthorizedErrorShown = true;
      }
    });
  }
  if (networkError) {
    message.error(networkError.message);
  }
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
