import { Search } from '@/components/search';
import { Select } from '@/components/select';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { compact, uniq } from 'lodash';
import { IContinent } from '@/toolbox/types';
import { GET_CONTINENTS, GET_COUNTRIES, GET_CURRENCIES } from '@/gql';

export const Home = () => {
  const { data: dataContinents, loading: loadingContinents } = useQuery(GET_CONTINENTS);
  const { data: dCurrencies, loading: lCurrencies } = useQuery(GET_CURRENCIES);
  const { data, loading, error, refetch } = useQuery(GET_COUNTRIES, {
    variables: undefined
  });
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectCurrency, setSelectCurrency] = useState<string>('');
  const [selectContinent, setSelectContinent] = useState<string>('');

  if (loading || loadingContinents || lCurrencies) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderCurrencies = (): string[] => {
    const currencies = dCurrencies.countries.map((country: { currency: string }) => country.currency);
    return uniq(compact(currencies));
  };

  const renderCountries = () => {
    if (searchValue.length) {
      return data.countries.filter((country: { name: string }) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return data.countries;
  };

  return (
    <div className='container mx-auto p-4 lg:px-0 lg:py-8'>
      <div className='grid gap-2 lg:grid-cols-4'>
        <Search
          className='lg:col-span-2'
          onSearch={setSearchValue}
        />
        <Select
          value={selectCurrency}
          onChange={value => {
            setSelectCurrency(value);
            refetch({
              filter: {
                currency: value ? { eq: value } : undefined,
                continent: selectContinent ? { eq: selectContinent } : undefined
              }
            });
          }}
          placeholder='Seleccione una moneda'
          listItems={renderCurrencies().map((currency) => ({ value: currency, label: currency }))}
        />
        <Select
          value={selectContinent}
          onChange={setSelectContinent}
          placeholder='Seleccione un continente'
          listItems={dataContinents.continents.map((continent: IContinent) => ({
            value: continent.code, label: continent.name
          }))}
        />
      </div>
      <h2 className='text-xl mt-8 mb-4 font-semibold'>
        {searchValue.length ? `Resultado de "${searchValue}"` : 'Todos los países'}
      </h2>

      <div className='grid gap-4 grid-cols-2 lg:grid-cols-4'>
        {renderCountries().map((country: { code: string; name: string; emoji: string }) => (
          <Link
            href={`/${country.code}`}
            key={country.code}
            className='cursor-pointer bg-white shadow-xs rounded-lg p-4 flex flex-col items-center hover:bg-neutral-200'
          >
            <div className='text-4xl'>{country.emoji}</div>
            <p className='font-bold text-center'>{country.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
