import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { filmsSelector, planetsSelector } from "../../hooks/selectors";
import { setPlanetsPage } from "../../store/slices/app/appSlice";
import CardList from "../CardList";

interface IPeopleListProps {}

const PlanetsList: FC<IPeopleListProps> = (props) => {
  const dispatch = useAppDispatch();
  const planets = useAppSelector((state) => planetsSelector(state));

  const handlePagination = (page: number) => {
    dispatch(setPlanetsPage(page))
  }

  return (
    <CardList {...planets} handlePagination={handlePagination} />
  )
}

export default PlanetsList;