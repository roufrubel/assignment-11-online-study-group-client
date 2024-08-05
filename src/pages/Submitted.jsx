import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

const Submitted = () => {
  const { user, loading } = useContext(AuthContext);
  const submittedData = useLoaderData();
  const mySubmittedAssignments = submittedData?.filter(
    (assignment) => assignment.userEmail === user.email
  ); 

  if (loading) {
    return <p className="text-2xl text-amber-700">Loading....</p>;
  }

  return (
    <div className="mb-20 h-screen">
    <h2 className="text-center mt-6 mb-10 font-bold text-2xl text-indigo-600">- My Attempted Assignments -</h2>
<div className="overflow-x-auto">
        <table className="table table-xs ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Marks</th>
              <th>Obtained Marks</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {mySubmittedAssignments.map((data) => (
              <tr key={data._id}>
                <td className="font-bold">{data?.title}</td>
                <td>
                {data.status === "complete" ? (
                    <span className="font-bold text-primary">Completed</span>
                  ) : data.status === "confirm" ? (
                    <span className="font-bold text-primary">Confirmed</span>
                  ) : (
                    <span className="font-bold text-primary">Pending</span>
                  )}
                </td>
                <td>{data?.marks}</td>
                <td>{data?.obtainedMark}</td>
                <td>
                  <p>{data?.feedBack}</p>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Submitted;
