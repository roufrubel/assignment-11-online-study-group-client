import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaChevronDown } from "react-icons/fa";

const MyCraftList = () => {
  const { user, loading } = useContext(AuthContext);
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);
  const myCrafts = crafts?.filter((craft) => craft.user_email === user.email);
  const [mySortingCrafts, setMySortingCrafts] = useState(myCrafts);

  if (loading) {
    return <p className="text-2xl text-amber-700">Loading....</p>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this craft?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your craft has been deleted.",
          icon: "success",
        });
        fetch(
          `https://assign-11-online-study-group.web.app/assignment/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myCrafts?.filter((craft) => craft._id !== id);
              setCrafts(remaining);
            }
          });
      }
    });
  };

  const handleFilter = (filter) => {
    let filteredCrafts = [];
    if (filter === "yes") {
      filteredCrafts = myCrafts.filter(
        (craft) => craft.customization.toLowerCase() === "yes"
      );
    } else if (filter === "no") {
      filteredCrafts = myCrafts.filter(
        (craft) => craft.customization.toLowerCase() === "no"
      );
    }
    setMySortingCrafts(filteredCrafts);
  };

  return (
    <div className="min-h-screen mb-10 ">
      <h2 className="text-center mt-6 mb-6 font-bold text-2xl text-blue-800">
        Pending Assignments
      </h2>

      {/* filtering crafts */}
      <div className="dropdown dropdown-bottom flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 font-medium btn-primary text-black btn-outline"
        >
          Filter by Customization
          <FaChevronDown className="mr-2" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleFilter("yes")}>
            <a>Customization: Yes</a>
          </li>
          <li onClick={() => handleFilter("no")}>
            <a>Customization: No</a>
          </li>
        </ul>
      </div>

      <div>
        {myCrafts?.length > 0 ? (
          <div>
            {mySortingCrafts?.map((craft) => (
              <div
                key={craft._id}
                className="card card-side border p-2 md:p-6 lg:p-6 flex-col md:flex-row lg:flex-row items-center justify-evenly w-full md:w-2/3 lg:w-2/3 mx-auto gap-2 md:gap-6 lg:gap-6 mt-10"
              >
                <div className="w-full md:w-3/5 lg:w-3/5">
                  <figure>
                    <img className="rounded-xl" src={craft.image} alt="craft" />
                  </figure>
                </div>
                <div className="space-y-3">
                  <h2 className="card-title">{craft.item_name}</h2>
                  <p>Price: $ {craft.price}</p>
                  <p>Rating: {craft.rating}</p>
                  <p>Customization: {craft.customization}</p>
                  <p>Stock: {craft.stockStatus}</p>
                  <div className="flex items-center justify-around gap-4">
                    <Link to={`/update/${craft._id}`}>
                      <button className="btn">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(craft._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className=" text-xl font-bold bg-amber-50 p-4 rounded-xl mt-10 mb-8">
              No Crafts is Available
            </p>
            <Link to="/add">
              <button className="btn btn-neutral font-s">
                Add Your Craft Items
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCraftList;
