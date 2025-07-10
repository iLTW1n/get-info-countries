import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
    }
  }
`;

export const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export const GET_CURRENCIES = gql`
  query {
    countries {
      currency
    }
  }
`;
