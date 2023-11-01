import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2 text-2xl font-semibold">Fill the data</h2>
      <form className="w-1/2 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
          <input
            type="text"
            name="age"
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={getUserData}
                required
                className="form-radio text-blue-500"
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
                onChange={getUserData}
                className="form-radio text-blue-500"
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

export default Create;