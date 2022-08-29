import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { vehiclesSelector } from '../../hooks/selectors';
import CardList from '../CardList';

interface IPeopleListProps {}

const VehiclesList: FC<IPeopleListProps> = (props) => {
  const films = useAppSelector((state) => vehiclesSelector(state));

  return <CardList {...films} />;
};

export default VehiclesList;
