import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    // render: (population: string) =>
    //   parseInt(population)
    //     ? parseInt(population).toLocaleString('es-AR')
    //     : population,
  },
  {
    title: 'consumables',
    dataIndex: 'consumables',
    key: 'consumables',
    // render: (residents: string[]) => residents.length,
  },
  {
    title: 'Cantidad de Films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => films.length,
  },
];

const Vehicles = () => {
  const { data, error } = useSWR('/vehicles', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} /* :D */ />
    </div>
  );
};

export default Vehicles;
