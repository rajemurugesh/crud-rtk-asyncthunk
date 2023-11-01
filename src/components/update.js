import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "Male",
  });



  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2 text-2xl font-semibold">Edit the data</h2>
      <form className="w-1/2 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-400"
            value={updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-400"
            value={updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-400"
            value={updateData.age}
            onChange={newData}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-radio text-blue-500"
                checked={updateData.gender === "Male"}
                onChange={newData}
              />
              <span className="ml-2">Male</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-radio text-blue-500"
                checked={updateData && updateData.gender === "Female"}
                onChange={newData}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
