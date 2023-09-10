import { TodoSearch } from "../../Molecules/TodoSearch/TodoSearch";
import { SearchIcon } from "../../atoms/SearchIcon/SearchIcon";
import { Title } from "../../atoms/Title/Title";
import { Wrap } from "../../atoms/Wrap/Wrap";

interface TitleAndSearchI {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
}

export const TitleAndSearch = ({
  searchValue,
  setSearchValue,
}: TitleAndSearchI) => {
  return (
    <Wrap flexDirection="column" alignItems="center" gap="2rem">
      <Title text="ToDoApp" fontSize="2rem" />
      <Wrap>
        <TodoSearch
          value={searchValue}
          onChange={(event) => {
            setSearchValue && setSearchValue(event.target.value);
          }}
        />
        <SearchIcon />
      </Wrap>
    </Wrap>
  );
};
