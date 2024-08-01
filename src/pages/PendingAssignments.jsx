import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PendingAssignments = () => {
    const {loading } = useContext(AuthContext);
    const pendingAssignments = useLoaderData();
  
    if (loading) {
      return <p className="text-2xl text-amber-700">Loading....</p>;
    }

    return (
        <div className="mb-20">
    <h2 className="text-center mt-6 mb-10 font-bold text-2xl text-indigo-600">- Pending Assignments -</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {pendingAssignments.map((data) => (
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
    </div>
    );
};

export default PendingAssignments;