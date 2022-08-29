import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { speciesSelector } from '../../hooks/selectors';
import CardList from '../CardList';

interface IPeopleListProps {}

const SpeciesList: FC<IPeopleListProps> = (props) => {
  const species = useAppSelector((state) => speciesSelector(state));

  return <CardList {...species} />;
};

export default SpeciesList;
