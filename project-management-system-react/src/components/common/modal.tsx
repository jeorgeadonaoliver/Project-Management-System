import { useModal } from "../../context/modal-context";


const Modal = () => {

    const { closeModal } = useModal();

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black transition-transform duration-300 scale-100">
            <h2 className="text-xl font-bold mb-4">Add Record</h2>
            <form>
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter name"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
    );

};

export default Modal;