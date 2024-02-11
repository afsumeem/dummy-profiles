import { Form } from "react-bootstrap";

interface SelectInputProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SelectInput: React.FC<SelectInputProps> = ({ sortBy, setSortBy }) => {
  return (
    <Form.Select
      aria-label="Select sorting option"
      className="mb-3 w-25 "
      value={sortBy}
      onChange={(event) => setSortBy(event.target.value)}
    >
      <option>Sort For All Users</option>
      <option value="name">Sort by name</option>
      <option value="email">Sort by email</option>
      <option value="company">Sort by Company name</option>
    </Form.Select>
  );
};

export default SelectInput;
