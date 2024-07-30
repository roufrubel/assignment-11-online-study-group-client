import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";

const ViewDetails = () => {
  const assignments = useLoaderData();
  const { id } = useParams();
  const assignment = assignments?.find((assignment) => assignment._id === id);
  const { image, title, marks, description, difficulty, date } = assignment;

  // date formatting with moment js
  const originalDate = date;

  // Format the date
  const formattedDate = moment(originalDate).format("YYYY-MM-DD");

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
            className="btn btn-primary text-md"
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
                <h3 className="font-semibold text-xl text-indigo-600">
                  Attach your file here!
                </h3>
                <form>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-sm w-full max-w-xs mt-10 mb-6"
                  />

                  <textarea
                    placeholder="quick note"
                    className="textarea textarea-bordered textarea-sm w-full max-w-xs "
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
