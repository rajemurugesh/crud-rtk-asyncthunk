import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData, dispatch]);

  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h4 className="text-white text-2xl font-semibold">RTK</h4>

          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:underline">
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/read" className="hover:underline">
                All Post ({allusers.length})
              </Link>
            </li>
          </ul>

          <input
            className="form-input w-1/2 rounded-md py-2 px-3 bg-white text-gray-800"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
