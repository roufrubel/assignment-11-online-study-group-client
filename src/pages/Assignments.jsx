import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Swal from "sweetalert2";
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Assignments = () => {
  const { loading, user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  
  // console.log(deletedAssignment);

  const [mySortingAssignments, setMySortingAssignments] = useState([]);

  const url =
    "https://assignment-11-online-group-study-server.vercel.app/assignment";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setMySortingAssignments(data); 
      });
  }, []);

  if (loading) {
    return <p className="text-2xl text-amber-700">Loading....</p>;
  }


  const handleDelete = (id, email) => {
      Swal.fire({
        title: "Are you sure?",
      text: "Do you want to delete this assignment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://assignment-11-online-group-study-server.vercel.app/assignment/${id}?email=${email}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.deletedCount > 0) {
                const remaining = assignments?.filter(
                  (assignment) => assignment._id !== id);
                  setAssignments(remaining);
                  setMySortingAssignments(remaining);
                  Swal.fire("Deleted!", "Your assignment has been deleted.", "success");
              } else {
                Swal.fire("Error!", data.message, "error");
              }
            });
        }
      });
  };


  const handleFilter = (filter) => {
    let filteredAssignment = [];
    if (filter === "easy") {
      filteredAssignment = assignments.filter(
        (assignment) => assignment.difficulty.toLowerCase() === "easy"
      );
    } else if (filter === "medium") {
      filteredAssignment = assignments.filter(
        (assignment) => assignment.difficulty.toLowerCase() === "medium"
      );
    } else if (filter === "hard") {
      filteredAssignment = assignments.filter(
        (assignment) => assignment.difficulty.toLowerCase() === "hard"
      );
    }
    setMySortingAssignments(filteredAssignment);
  };

  return (
    <div className="min-h-screen mb-10 ">
      <h2 className="text-center mt-6 mb-6 font-bold text-2xl text-indigo-600">
        - Assignments -
      </h2>

      {/* filtering assignments */}
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
        {mySortingAssignments.length === 0 ? (
          <div>
            {assignments.map((assignment) => (
              <div
                key={assignment._id}
                className="card card-side border border-indigo-300 p-2 md:p-6 lg:p-6 flex-col md:flex-row lg:flex-row items-center justify-start w-full md:w-2/3 lg:w-2/3 mx-auto gap-2 md:gap-6 lg:gap-6 mt-10"
              >
                <div className="w-full md:w-3/5 lg:w-3/5">
                  <figure>
                    <img
                      className="rounded-xl"
                      src={assignment.image}
                      alt="craft"
                    />
                  </figure>
                </div>
                <div>
                  <div className="space-y-3">
                    <h2 className="card-title text-indigo-600">
                      {assignment.title}
                    </h2>
                    <p>Marks: {assignment.marks}</p>
                    <p>Difficulty: {assignment.difficulty}</p>
                  </div>
                  <div className="flex items-center justify-around gap-4 mt-12">
                    <Link to={`/update/${assignment._id}`}>
                      <button className="btn btn-circle btn-sm btn-outline font-bold btn-primary">
                        <FaRegEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(assignment._id, assignment.user_email)}
                      className="btn btn-circle btn-sm btn-outline font-bold btn-primary text-lg"
                    >
                      <MdDeleteForever />
                    </button>
                    <Link to={`/assignment/${assignment._id}`}>
                      <button className="btn btn-circle btn-sm btn-outline font-bold btn-primary">
                        <GrView />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {mySortingAssignments.map((assignment) => (
              <div
                key={assignment._id}
                className="card card-side border border-indigo-300 p-2 md:p-6 lg:p-6 flex-col md:flex-row lg:flex-row items-center justify-start w-full md:w-2/3 lg:w-2/3 mx-auto gap-2 md:gap-6 lg:gap-6 mt-10"
              >
                <div className="w-full md:w-3/5 lg:w-3/5">
                  <figure>
                    <img className="rounded-xl" src={assignment.image} alt="craft" />
                  </figure>
                </div>
                <div>
                  <div className="space-y-3">
                    <h2 className="card-title text-indigo-600">
                      {assignment.title}
                    </h2>
                    <p>Marks: {assignment.marks}</p>
                    <p>Difficulty: {assignment.difficulty}</p>
                  </div>
                  <div className="flex items-center justify-around gap-4 mt-12">
                    <Link to={`/update/${assignment._id}`}>
                      <button className="btn btn-circle btn-sm btn-outline font-bold btn-primary">
                        <FaRegEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(assignment._id, user?.email)}
                      className="btn btn-circle btn-sm btn-outline font-bold btn-primary text-lg"
                    >
                      <MdDeleteForever />
                    </button>
                    <Link to={`/assignment/${assignment._id}`}>
                      <button className="btn btn-circle btn-sm btn-outline font-bold btn-primary">
                        <GrView />
                      </button>
                    </Link>
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
