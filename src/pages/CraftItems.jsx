import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { Link } from "react-router-dom";


const CraftItems = () => {
    const { loading } = useContext(AuthContext);
    const [crafts, setCrafts] = useState([]);
    useEffect( () => {
        fetch('https://assignment-10-jute-home-decor-server.vercel.app/craft')
        .then(res => res.json())
        .then(data => setCrafts(data))
    }, [])

    if (loading) {
        return <p className="text-2xl text-amber-700">Loading....</p>;
      }
    return (
        <div className="mt-6 mb-6">
            <h2 className="mt-20 text-3xl font-bold text-center text-blue-800 mb-8">Craft Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {crafts.map((craft) => (
                <div key={craft._id}>
                  <div className="card card-side border p-6 mb-4 mx-2">
                    <figure>
                      <img src={craft.image} alt="Movie" />
                    </figure>
                    <div className="flex items-center ml-6">
                      <div>
                        <h2 className="card-title">{craft.item_name}</h2>
                        <p>Price: {craft.price}</p>
                      </div>
                      <div className="card-actions justify-end ml-6">
                        <div className="join join-vertical">
                          <button className="btn join-item mb-4">View</button>
                          {/* <Link to={`updateCraft/${_id}`}> */}
                            <button className="btn join-item mb-4">Edit</button>
                          {/* </Link> */}
                          <button
                            // onClick={() => handleDelete(_id)}
                            className="btn join-item"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    );
};

export default CraftItems;