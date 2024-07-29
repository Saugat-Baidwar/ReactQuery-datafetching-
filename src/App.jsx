import { useState } from "react";
import "./App.css";

// import Modal from "./components/modal";
import Modal from "./Components/Modal";
import { IoMdCloseCircle } from "react-icons/io";
import Card from "./Components/Card";
import AddProductForm from "./Forms/AddProductForm";
// import AddProductForm from "./forms/addProduct";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-yellow-500 w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>

            <AddProductForm />

            {/* <h1> hi i am form</h1>  */}
          </div>
        </Modal>
      ) : null}

      <div className="border-b-2 border-black">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-red-500 rounded-md p-2 m-4 text-white bold"
        >
          Add new product
        </button>
      </div>
      <Card />
    </div>
  );
}

export default App;
