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
    <Wrap
      flexDirection="column"
      alignItems="center"
      gap="2rem"
      media="744px"
      mediaDisplay="flex"
      mediaFlexDirection="row"
      mediaJustifyContent="space-between"
    >
      <Title
        text="ToDoApp"
        fontSize="2rem"
        textAlign="center"
        media="744px"
        mediaTextAlign="start"
      />
      <Wrap>
        <TodoSearch
          value={searchValue}
          onChange={(event) => {
            setSearchValue && setSearchValue(event.target.value);
          }}
        />
        <Wrap media="744px" mediaDisplay="none" width="fit-content">
          <SearchIcon />
        </Wrap>
      </Wrap>
    </Wrap>
  );
};
