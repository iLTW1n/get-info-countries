type Props = {
  message?: string;
};

export const Empty = (props: Props) => {
  const { message = 'Cargando ...' } = props;
  return <div className='w-full text-center text-2xl font-semibold text-gray-500 lg:text-6xl'>{message}</div>;
};
