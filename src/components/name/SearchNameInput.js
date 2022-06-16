import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useSelector, useDispatch } from "react-redux";
import { setErrorInput, setEnteredSearch } from "../../store/name-slice";
import { useNavigate } from "react-router-dom";

const SearchName = () => {
  const dispatcher = useDispatch();
  const { error, enteredSearch } = useSelector((state) => state.name);
  const navigate = useNavigate();

  const enteredValue = enteredSearch.trim();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredValue === "") {
      dispatcher(setErrorInput(true));
      return;
    }
    dispatcher(setErrorInput(false));

    navigate("/search");
  };

  const handleChange = (event) => {
    dispatcher(setEnteredSearch(event.target.value));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <TextField
        {...(error ? { error, helperText: "Enter a correct value" } : "")}
        id="outlined-basic"
        fullWidth
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
        placeholder="Character Name"
        variant="outlined"
        value={enteredSearch}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchName;
