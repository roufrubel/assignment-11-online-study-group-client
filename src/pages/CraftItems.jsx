import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const CraftItems = () => {
  const { loading } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-online-group-study-server.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, []);

  if (loading) {
    return <p className="text-2xl text-amber-700">Loading....</p>;
  }
  return (
    <div className="mt-6 mb-6">
      <h2 className="mt-20 text-3xl font-bold text-center text-blue-800 mb-8">
        Craft Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grow">
        {crafts.map((craft) => (
          <div key={craft._id}>
            <div className="card card-side border mb-8 mx-2 flex-col">
              <div className="mb-4">
                <figure>
                  <img className="rounded-t-xl" src={craft.image} alt="Movie" />
                </figure>
              </div>
              <div className="space-y-2 p-4">
                <h2 className="card-title">{craft.item_name}</h2>
                <p>Price: {craft.price}</p>
                <Link to={`/craft/${craft._id}`}>
                  <button className="btn btn-primary btn-outline font-bold mt-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
