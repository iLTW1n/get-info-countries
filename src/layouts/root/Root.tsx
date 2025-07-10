'use client';
import { Header } from '@/components/header';
import createApolloClient from '@/gql/config';
import { ApolloProvider } from '@apollo/client';

type Props = {
  children: React.ReactNode;
};

const client = createApolloClient();

export const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <ApolloProvider client={client}>
      <Header />
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </ApolloProvider>
  );
};
