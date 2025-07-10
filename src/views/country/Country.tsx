import { Empty } from '@/components/empty';
import { GET_COUNTRY } from '@/gql';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const Country = () => {
  const params = useParams();
  console.log('params', params.id);
  const { data: dCountry, loading: lCountry } = useQuery(GET_COUNTRY, {
    variables: {
      code: params.id
    }
  });
  console.log('dCountry', dCountry, lCountry);
  return (
    <div className='px-4'>
      <div className='container mx-auto py-4 lg:py-8'>
        {lCountry ? <Empty /> :
          <>
            <div className='flex flex-col gap-2 lg:gap-4'>
              <div className='text-4xl lg:text-8xl'>{dCountry.country.emoji}</div>
              <h1 className='font-semibold text-2xl lg:text-5xl'>
                ({dCountry.country.code}) {dCountry.country.name}
              </h1>
              <div>
                <div className='text-lg lg:text-2xl'>
                  <span className='font-semibold'>Capital: </span>
                  {dCountry.country.capital}
                </div>
                <div className='text-lg lg:text-2xl'>
                  <span className='font-semibold'>Moneda: </span>
                  {dCountry.country.currency}
                </div>
                <div className='text-lg lg:text-2xl'>
                  <span className='font-semibold'>Continente: </span>
                  {dCountry.country.continent.name} ({dCountry.country.continent.code})
                </div>
                <div className='text-lg lg:text-2xl'>
                  <span className='font-semibold'>Lenguajes: </span>
                  {dCountry.country.languages.map((language: { name: string }) => language.name).join(', ')}
                </div>
              </div>
            </div>
            <Link
              href='/'
              type="button"
              className="text-white mt-10 block bg-[#e40545] font-semibold rounded-lg px-4 py-3 text-center"
            >
              Volver
            </Link>
          </>
        }
      </div>
    </div>
  );
};
