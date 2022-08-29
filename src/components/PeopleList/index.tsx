import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { filmsSelector, peopleSelector } from "../../hooks/selectors";
import { setPeoplePage } from "../../store/slices/app/appSlice";
import CardList from "../CardList";

interface IPeopleListProps {}

const PeopleList: FC<IPeopleListProps> = (props) => {
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => peopleSelector(state));

  const handlePagination = (page: number) => {
    dispatch(setPeoplePage(page))
  }

  return (
    <CardList {...people} handlePagination={handlePagination} />
  )
}

export default PeopleList;