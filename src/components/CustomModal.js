import React from "react";
import { useSelector } from "react-redux";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.find((ele) => ele.id === id);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-white w-96 rounded shadow-lg p-4">
        <div className="modal-header flex justify-between">
          <h2 className="text-2xl font-semibold">{singleUser.name}</h2>
          <button onClick={() => setShowPopup(false)} className="text-gray-500">
            Close
          </button>
        </div>
        <div className="modal-content">
          <h3 className="text-lg font-semibold">{singleUser.email}</h3>
          <p>Age: {singleUser.age}</p>
          <p>Gender: {singleUser.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
