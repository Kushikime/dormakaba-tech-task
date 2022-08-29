import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { starshipsSelector } from '../../hooks/selectors';
import CardList from '../CardList';

interface IPeopleListProps {}

const StarshipsList: FC<IPeopleListProps> = (props) => {
  const starships = useAppSelector((state) => starshipsSelector(state));

  return <CardList {...starships} />;
};

export default StarshipsList;
