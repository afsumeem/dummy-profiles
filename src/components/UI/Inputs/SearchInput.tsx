import { Button, Form, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

//

interface SearchInputProps {
  searchUsers: string;
  setSearchUsers: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchUsers,
  setSearchUsers,
}) => {
  return (
    <InputGroup className="mb-3 w-50">
      <Form.Control
        placeholder="Search users"
        className="border-0 border-bottom rounded-0 "
        aria-label="Search users"
        aria-describedby="basic-addon2"
        value={searchUsers}
        onChange={(e) => setSearchUsers(e.target.value)}
      />
      <Button
        className="bg-transparent text-dark border-0 border-bottom rounded-0"
        id="button-addon2"
      >
        <CiSearch />
      </Button>
    </InputGroup>
  );
};

export default SearchInput;
