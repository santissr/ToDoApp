import { Text } from "../../atoms/Text/Text";
import { Wrap } from "../../atoms/Wrap/Wrap";
import { FaSpinner } from "react-icons/fa";
import { RotatingIcon } from "./Todos.styled";

export const TodosLoading = () => {
  return (
    <Wrap flexDirection="column">
      <RotatingIcon>
        <FaSpinner size="5rem" />
      </RotatingIcon>
      <Text
        text="Loading..."
        textAlign="center"
        fontSize="2.5rem"
        fontWeight="700"
      />
    </Wrap>
  );
};
