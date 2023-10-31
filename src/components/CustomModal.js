import React from "react";
import { useSelector } from "react-redux";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
        <h2 className="text-2xl font-semibold">{singleUser[0].name}</h2>
        <h3 className="text-lg text-gray-600">{singleUser[0].email}</h3>
        <h4 className="text-lg text-gray-600">{singleUser[0].age}</h4>
        <p className="text-lg text-gray-600">{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default CustomModal;
