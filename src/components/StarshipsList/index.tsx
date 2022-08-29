import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { starshipsSelector } from "../../hooks/selectors";
import { setStarshipsPage } from "../../store/slices/app/appSlice";
import CardList from "../CardList";

interface IPeopleListProps {}

const StarshipsList: FC<IPeopleListProps> = (props) => {
  const dispatch = useAppDispatch();
  const starships = useAppSelector((state) => starshipsSelector(state));

  const handlePagination = (page: number) => {
    dispatch(setStarshipsPage(page))
  }

  return (
    <CardList {...starships} handlePagination={handlePagination} />
  )
}

export default StarshipsList;