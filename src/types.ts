export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
  };
  company: {
    name: string;
  };
}

//add user props
export interface AddUserProps {
  onHide: () => void;
  show: boolean;
}

/// add user form data
export interface FormData {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  address: string;
  city: string;
  State: string;
}
