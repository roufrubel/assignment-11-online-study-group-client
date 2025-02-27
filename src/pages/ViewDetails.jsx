import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const assignments = useLoaderData();
  const { loading, user } = useContext(AuthContext);
  const { id } = useParams();
  const assignment = assignments?.find((assignment) => assignment._id === id);
  const { image, title, marks, description, difficulty, date } = assignment;
  const userEmail = user.email;

  const location = useLocation();
  const navigate = useNavigate();

  // date formatting with moment js
  const originalDate = date;

  // Format the date
  const formattedDate = moment(originalDate).format("YYYY-MM-DD");

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
  const docLink = form.docLink.value;
  const quickNote = form.quickNote.value;

  const submittedAssignment = {
  docLink,
  quickNote,
  title,
  marks,
  userEmail
  }

    // console.log(submittedAssignment);
    fetch("https://assignment-11-online-group-study-server.vercel.app/submit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignment),
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.insertedId) {
        Swal.fire(
          "Submitted!",
          "Your assignment has been submitted.",
          "success"
        );
        // navigate after submitted assignment
        navigate(location?.state ? location.state : "/");
        form.reset();
      }
    })
    .catch((error) => {
      Swal.fire(
        "Error!",
        "There was an error submitting your assignment.",
        error
      );
    });
};

  if (loading) {
    return <p className="text-2xl text-amber-700">Loading....</p>;
  }

  return (
    <div className="mt-4 mb-6 p-2">
      <h2 className="mt-2 mb-2 font-bold text-2xl text-blue-800 text-center">
        - Assignment View Details -
      </h2>
      <div className="card p-4 w-full mx-auto m-2 md:w-1/2 lg:w-1/2 mt-10 mb-10 border rounded-lg">
        <figure>
          <img className="rounded-xl" src={image} alt="craft" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-indigo-600">
            {title}
          </h2>
          <p>Marks: {marks}</p>
          <p>{description}</p>
          <p>Difficulty: {difficulty}</p>
          <p className="text-lg font-semibold text-indigo-600">
            Created At: {formattedDate}
          </p>
        </div>

        <div>
          <button
            className="btn  bg-slate-200 hover:bg-indigo-600 btn-block text-indigo-600 hover:text-white text-md"
            onClick={() =>
              document.getElementById("take-assignment-modal").showModal()
            }
          >
            Take Assignment
          </button>
          <dialog
            id="take-assignment-modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div>
                <h3 className="font-semibold text-xl text-indigo-600 mb-4">
                  Provide Pdf/Doc link here!
                </h3>
                <form onSubmit={handleSubmitAssignment}>
                  <div className="pt-3 pb-3 w-full">
                    <span className="font-bold mb-2"> Pdf/Doc link : </span>
                    <input type="text" placeholder="provide Pdf/Doc link here" className="input input-bordered w-full mt-1" name="docLink"/>
                  </div>
                  <textarea
                    name="quickNote"
                    placeholder="Write your quick note here"
                    className="textarea textarea-bordered textarea-xs w-full"
                  ></textarea>
                  <button className="btn btn-primary mt-6">
                    <input type="submit" value="Submit Assignment" />
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
