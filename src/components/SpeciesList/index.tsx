import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { filmsSelector, speciesSelector } from "../../hooks/selectors";
import { setSpeciesPage } from "../../store/slices/app/appSlice";
import CardList from "../CardList";

interface IPeopleListProps {}

const SpeciesList: FC<IPeopleListProps> = (props) => {
  const dispatch = useAppDispatch();
  const species = useAppSelector((state) => speciesSelector(state));

  const handlePagination = (page: number) => {
    dispatch(setSpeciesPage(page))
  }

  return (
    <CardList {...species} handlePagination={handlePagination} />
  )
}

export default SpeciesList;