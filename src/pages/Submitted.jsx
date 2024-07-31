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
    <>
    <h2 className="text-center mt-6 mb-10 font-bold text-2xl text-indigo-600">- My Attempted Assignments -</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {mySubmittedAssignments.map((data) => (
        <div key={data._id} className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src={data?.assignment?.image}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-indigo-600">{data?.assignment?.title}</h2>
    <p>Marks: {data?.assignment?.marks}</p>
  </div>
</div>
      ))}
    </div>
    </>
  );
};

export default Submitted;
