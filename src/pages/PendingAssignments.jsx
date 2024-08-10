import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const PendingAssignments = () => {
  const { user, loading } = useContext(AuthContext);
  const [pendingAssignments, setPendingAssignments] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://assignment-11-online-group-study-server.vercel.app/submit")
      .then((res) => res.json())
      .then((data) => setPendingAssignments(data));
  }, []);

  if (loading) {
    return <p className="text-2xl text-amber-700">Loading....</p>;
  }

  const handleConfirm = (id) => {
    fetch(
      `https://assignment-11-online-group-study-server.vercel.app/submit/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = pendingAssignments.filter(
            (data) => data?._id !== id
          );
          const confirmedAssignment = pendingAssignments.find(
            (data) => data?._id === id
          );
          confirmedAssignment.status = "confirm";
          const newAssignment = [confirmedAssignment, ...remaining];
          setPendingAssignments(newAssignment);
        }
      });
  };

  const handleSubmitMarkFeedBack = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMark = form.obtainedMark.value;
    const feedBack = form.feedBack.value;
    const submittedMarkFeedBack = {
      obtainedMark,
      feedBack,
      status: "complete",
    };
    // console.log(submittedMarkFeedBack);

    fetch(
      `https://assignment-11-online-group-study-server.vercel.app/submit/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submittedMarkFeedBack),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = pendingAssignments.filter(
            (data) => data?._id !== id
          );
          const completedAssignment = pendingAssignments.find(
            (data) => data?._id === id
          );
          completedAssignment.status = "complete";
          const newAssignment = [completedAssignment, ...remaining];
          setPendingAssignments(newAssignment);

          Swal.fire(
            "Submitted!",
            "Mark and FeedBack has been submitted.",
            "success"
          );
          // navigate after submitted assignment
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        Swal.fire(
          "Error!",
          "There was an error submitting Mark and FeedBack.",
          error
        );
      });
  };

  return (
    <div className="mb-20">
      <h2 className="text-center mt-6 mb-10 font-bold text-2xl text-indigo-600">
        - Pending Assignments -
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-xs ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Marks</th>
              <th>Examinee Name</th>
              <th>Give Mark</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments
              ?.filter((assignment) => assignment.status !== "complete")
              ?.map((data) => (
                <tr key={data._id}>
                  <td className="font-bold">{data?.title}</td>
                  <td>{data?.marks}</td>
                  <td>{user?.displayName}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-primary btn-xs"
                        onClick={() =>
                          document
                            .getElementById("take-assignment-modal")
                            .showModal()
                        }
                      >
                        Give Mark
                      </button>
                      <dialog
                        id="take-assignment-modal"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <div>
                            <h3 className="font-semibold text-xl text-indigo-600 mb-4">
                              Give mark and feedback here!
                            </h3>
                            <div className="p-2  rounded-lg border border-purple-400">
                              <div className="mb-2 bg-indigo-100 rounded-lg p-2">
                                <span className="font-bold">PDF/DOC LINK:</span>{" "}   
                                <p>{data?.docLink}</p>                             
                              </div>
                              <p className="bg-indigo-100 rounded-lg p-2">
                                <span className="font-bold">NOTE:</span>{" "}
                                {data?.quickNote}
                              </p>
                            </div>
                            <form
                              onSubmit={(e) =>
                                handleSubmitMarkFeedBack(e, data._id)
                              }
                            >
                              <label className="input input-bordered flex items-center gap-2 my-4">
                                Mark
                                <input
                                  type="number"
                                  name="obtainedMark"
                                  className="grow"
                                  placeholder="Give mark here"
                                />
                              </label>
                              <textarea
                                name="feedBack"
                                placeholder="Write your FeedBack here"
                                className="textarea textarea-bordered textarea-xs w-full"
                              ></textarea>
                              <button className="btn btn-primary mt-6">
                                <input
                                  type="submit"
                                  value="Submit Mark and FeedBack"
                                />
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
                  </td>
                  <td>
                    {data.status === "complete" ? (
                      <span className="font-bold text-primary">Completed</span>
                    ) : data.status === "confirm" ? (
                      <span className="font-bold text-primary">Confirmed</span>
                    ) : (
                      <button
                        onClick={() => handleConfirm(data?._id)}
                        className="btn btn-primary btn-xs"
                      >
                        Please Confirm
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignments;
