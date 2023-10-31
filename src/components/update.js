import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id,users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div className="m-4">
      <h2 className="my-2 text-xl font-semibold">Edit the data</h2>
      <form className="w-1/2 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-md"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-md"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Age</label>
          <input
            type="text"
            name="age"
            className="w-full p-2 border rounded-md"
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="mb-4">
          <input
            className="mr-2"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="text-gray-600">Male</label>
        </div>
        <div className="mb-4">
          <input
            className="mr-2"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="text-gray-600">Female</label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
