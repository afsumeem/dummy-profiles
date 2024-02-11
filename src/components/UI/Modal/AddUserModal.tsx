import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

//type
interface AddUserProps {
  onHide: () => void;
  show: boolean;
}

const AddUser: React.FC<AddUserProps> = ({ onHide, show }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit
  //   const onSubmit = (data) => {
  //     axios.post("http://localhost:5000/orders", data).then((res) => {
  //       if (res.data.insertedId) {
  //         alert("Form submitted successfully");
  //         reset();
  //       }
  //     });
  //   };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h4 className="text-center">Add New User</h4>
      </Modal.Header>
      <Modal.Body>
        <form className="">
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
          <input
            className="d-block mx-auto  my-2 btn btn-info w-100"
            type="submit"
            value="Add"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUser;
