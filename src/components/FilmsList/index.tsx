import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { filmsSelector } from '../../hooks/selectors';
import CardList from '../CardList';

interface IPeopleListProps {}

const FilmsList: FC<IPeopleListProps> = (props) => {
  const films = useAppSelector((state) => filmsSelector(state));

  return <CardList {...films} />;
};

export default FilmsList;
