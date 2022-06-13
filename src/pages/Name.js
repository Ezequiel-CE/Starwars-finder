import SearchNameInput from "../components/name/SearchNameInput";
import { NameContainer, NameTitle } from "../components/name/name.styled";
import { useSelector, useDispatch } from "react-redux";
import { setEnteredSearch } from "../store/name-slice";
import { useEffect } from "react";

const Name = () => {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(setEnteredSearch(""));
  }, [dispatcher]);

  return (
    <NameContainer>
      <NameTitle>Search your favorite character</NameTitle>
      <SearchNameInput />
    </NameContainer>
  );
};

export default Name;
