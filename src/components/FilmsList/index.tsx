import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { filmsSelector } from "../../hooks/selectors";
import { setFilmsPage } from "../../store/slices/app/appSlice";
import CardList from "../CardList";

interface IPeopleListProps {}

const FilmsList: FC<IPeopleListProps> = (props) => {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => filmsSelector(state));

  const handlePagination = (page: number) => {
    dispatch(setFilmsPage(page))
  }

  return (
    <CardList {...films} handlePagination={handlePagination} />
  )
}

export default FilmsList;