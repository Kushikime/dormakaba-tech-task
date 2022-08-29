import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { planetsSelector } from '../../hooks/selectors';
import CardList from '../CardList';

interface IPeopleListProps {}

const PlanetsList: FC<IPeopleListProps> = (props) => {
  const planets = useAppSelector((state) => planetsSelector(state));

  return <CardList {...planets} />;
};

export default PlanetsList;
