import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="text-2xl font-semibold">All data</h2>
      <div className="mb-4">
        <input
          className="form-radio text-blue-500"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={() => setRadioData("")}
        />
        <label className="ml-2 text-gray-700">All</label>
      </div>
      <div className="mb-4">
        <input
          className="form-radio text-blue-500"
          name="gender"
          checked={radioData === "Male"}
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="ml-2 text-gray-700">Male</label>
      </div>
      <div className="mb-4">
        <input
          className="form-radio text-blue-500"
          name="gender"
          value="Female"
          checked={radioData === "Female"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="ml-2 text-gray-700">Female</label>
      </div>

      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })

            .map((ele) => (
              <div key={ele.id} className="bg-white shadow-md rounded-md p-4 my-4">
                <h5 className="text-xl font-semibold">{ele.name}</h5>
                <h6 className="text-gray-600">{ele.email}</h6>
                <p className="text-gray-700">{ele.gender}</p>
                <button
                  className="text-blue-500 underline mr-4"
                  onClick={() => [setId(ele.id), setShowPopup(true)]}
                >
                  View
                </button>
                <Link to={`/edit/${ele.id}`} className="text-blue-500 underline mr-4">
                  Edit
                </Link>
                <Link
                  onClick={() => dispatch(deleteUser(ele.id))}
                  className="text-red-500 underline"
                >
                  Delete
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
