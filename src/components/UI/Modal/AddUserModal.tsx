import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddUserProps, FormData } from "../../../types";
import { toast } from "react-toastify";
//

const AddUser: React.FC<AddUserProps> = ({ onHide, show }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  //
  const notify = () =>
    toast("User Successfully added. You Can check in Local Storage");

  // handle submit
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const usersString = localStorage.getItem("users");
    const users: FormData[] = usersString ? JSON.parse(usersString) : [];
    const newUser = {
      id: Date.now(),
      ...data,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    notify();
    reset();
    onHide();
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "rgba(148, 187, 233, 1)" }}
      >
        <h4 className="text-center">Add New User</h4>
      </Modal.Header>

      {/* add user input form */}
      <Modal.Body>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Image Link"
            className=" my-1 w-100 p-2"
            {...register("image")}
          />

          <div className="d-flex justify-content-center gap-3">
            <input
              placeholder="First Name"
              className=" my-1 w-50 p-2"
              {...register("firstName")}
            />

            <input
              placeholder="Last Name"
              className=" my-1 w-50 p-2"
              {...register("lastName")}
            />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <input
              placeholder="Email Address"
              className=" my-1 w-100 p-2"
              {...register("email")}
            />
            <input
              placeholder="Company Name"
              className=" my-1 w-100 p-2"
              {...register("company")}
            />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <input
              placeholder="Address"
              className=" my-1 w-50 p-2"
              {...register("address")}
            />{" "}
            <input
              placeholder="City"
              className=" my-1 w-50 p-2"
              {...register("city")}
            />{" "}
            <input
              placeholder="State"
              className=" my-1 w-50 p-2"
              {...register("State")}
            />
          </div>

          {/* submit button */}
          <Button
            className="d-block mx-auto w-50 py-2 my-2 btn border-0 text-dark"
            style={{ backgroundColor: "rgba(148, 187, 233, 1)" }}
            type="submit"
          >
            Add User
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgba(148, 187, 233, 1)" }}>
        <Button variant="danger" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUser;
