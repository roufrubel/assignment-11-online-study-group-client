import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link} from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Swal from "sweetalert2";
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Assignments = () => {
  const { loading } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);

  const [mySortingCrafts, setMySortingCrafts] = useState(crafts);

  const url =
    "https://assignment-11-online-group-study-server.vercel.app/assignment";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, [crafts]);

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
          `https://assignment-11-online-group-study-server.vercel.app/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = crafts?.filter((craft) => craft._id !== id);
              setCrafts(remaining);
            }
          });
      }
    });
  };

  const handleFilter = (filter) => {
    let filteredCrafts = [];
    if (filter === "easy") {
      filteredCrafts = crafts.filter(
        (craft) => craft.difficulty.toLowerCase() === "easy"
      );
    } else if (filter === "medium") {
      filteredCrafts = crafts.filter(
        (craft) => craft.difficulty.toLowerCase() === "medium"
      );
    } else if (filter === "hard") {
      filteredCrafts = crafts.filter(
        (craft) => craft.difficulty.toLowerCase() === "hard"
      );
    }
    setMySortingCrafts(filteredCrafts);
  };

  return (
    <div className="min-h-screen mb-10 ">
      <h2 className="text-center mt-6 mb-6 font-bold text-2xl text-indigo-600">
        - Assignments -
      </h2>

      {/* filtering crafts */}
      <div className="dropdown dropdown-bottom flex justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 font-medium btn-primary text-black btn-outline"
        >
          Filter by Difficulty Level
          <FaChevronDown className="mr-2" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleFilter("easy")}>
            <a>Easy</a>
          </li>
          <li onClick={() => handleFilter("medium")}>
            <a>Medium</a>
          </li>
          <li onClick={() => handleFilter("hard")}>
            <a>Hard</a>
          </li>
        </ul>
      </div>

      <div>
        {mySortingCrafts.length === 0 ? (
          <div>
            { crafts.map((craft) => (
              <div
                key={craft._id}
                className="card card-side border border-indigo-300 p-2 md:p-6 lg:p-6 flex-col md:flex-row lg:flex-row items-center justify-start w-full md:w-2/3 lg:w-2/3 mx-auto gap-2 md:gap-6 lg:gap-6 mt-10"
              >
                <div className="w-full md:w-3/5 lg:w-3/5">
                  <figure>
                    <img className="rounded-xl" src={craft.image} alt="craft" />
                  </figure>
                </div>
                <div >
                  <div className="space-y-3">
                  <h2 className="card-title text-indigo-600">{craft.title}</h2>
                  <p>Marks: {craft.marks}</p>
                  <p>Difficulty: {craft.difficulty}</p>
                  </div>
                  <div className="flex items-center justify-around gap-4 mt-12">
                    <Link to={`/update/${craft._id}`}>
                      <button className="btn btn-circle btn-sm btn-outline font-bold btn-primary"><FaRegEdit/></button>
                    </Link>
                    <button
                      onClick={() => handleDelete(craft._id)}
                      className="btn btn-circle btn-sm btn-outline font-bold btn-primary text-lg"
                    >
                      <MdDeleteForever/>
                    </button>
                    <Link to={`/assignment/${craft._id}`}><button className="btn btn-circle btn-sm btn-outline font-bold btn-primary"><GrView/></button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            { mySortingCrafts.map((craft) => (
              <div
                key={craft._id}
                className="card card-side border border-indigo-300 p-2 md:p-6 lg:p-6 flex-col md:flex-row lg:flex-row items-center justify-start w-full md:w-2/3 lg:w-2/3 mx-auto gap-2 md:gap-6 lg:gap-6 mt-10"
              >
                <div className="w-full md:w-3/5 lg:w-3/5">
                  <figure>
                    <img className="rounded-xl" src={craft.image} alt="craft" />
                  </figure>
                </div>
                <div >
                  <div className="space-y-3">
                  <h2 className="card-title text-indigo-600">{craft.title}</h2>
                  <p>Marks: {craft.marks}</p>
                  <p>Difficulty: {craft.difficulty}</p>
                  </div>
                  <div className="flex items-center justify-around gap-4 mt-12">
                    <Link to={`/update/${craft._id}`}>
                      <button className="btn btn-circle btn-sm btn-outline font-bold btn-primary"><FaRegEdit/></button>
                    </Link>
                    <button
                      onClick={() => handleDelete(craft._id)}
                      className="btn btn-circle btn-sm btn-outline font-bold btn-primary text-lg"
                    >
                      <MdDeleteForever/>
                    </button>
                    <Link to={`/assignment/${craft._id}`}><button className="btn btn-circle btn-sm btn-outline font-bold btn-primary"><GrView/></button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignments;

