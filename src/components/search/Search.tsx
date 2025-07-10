import { Search as IconSearch } from 'lucide-react';
import { debounce } from 'lodash';
import { useCallback, ChangeEvent } from 'react';

type Props = {
  className?: string;
  onSearch: (value: string) => void;
};

export const Search = (props: Props) => {
  const { className, onSearch } = props;

  const debouncedChange = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    }, 500),
    []
  );

  return (
    <div className={`relative ${className}`}>
      <IconSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-950' />
      <input
        type='text'
        placeholder='Buscar ...'
        onChange={debouncedChange}
        className='
          border-2
          w-full
          py-2 pl-11 pr-4
          bg-white
          text-gray-950
          rounded-sm
          outline-none
          placeholder:text-gray-500
        '
      />
    </div>
  );
};
