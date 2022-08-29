import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { peopleSelector } from '../../hooks/selectors';
import CardList from '../CardList';

interface IPeopleListProps {}

const PeopleList: FC<IPeopleListProps> = (props) => {
  const people = useAppSelector((state) => peopleSelector(state));

  return <CardList {...people} />;
};

export default PeopleList;
