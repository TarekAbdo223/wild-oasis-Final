import React, { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const AddCabin = () => {
  const [isOpemModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>Add cabin</Button>
      {isOpemModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
