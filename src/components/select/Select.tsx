import { ChevronDown } from 'lucide-react';

type Props = {
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  listItems: {
    value: string;
    label: string;
  }[];
};

export const Select = (props: Props) => {
  const { className, placeholder, onChange, value, listItems = [] } = props;

  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`
          bg-white
          border-2
          border-gray-950
          outline-none
          rounded-sm
          w-full
          py-2 pr-11 pl-4
          appearance-none
          ${value ? 'text-gray-950' : 'text-gray-500'}
        `}
      >
        <option value=''>{placeholder}</option>
        {listItems.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <ChevronDown className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-950' />
    </div>
  );
};
