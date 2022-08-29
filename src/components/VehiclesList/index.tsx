import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { vehiclesSelector } from '../../hooks/selectors';
import { setVehiclesPage } from '../../store/slices/app/appSlice';
import CardList from '../CardList';

interface IPeopleListProps {}

const VehiclesList: FC<IPeopleListProps> = (props) => {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => vehiclesSelector(state));

  const handlePagination = (page: number) => {
    dispatch(setVehiclesPage(page));
  };

  return <CardList {...films} handlePagination={handlePagination} />;
};

export default VehiclesList;
