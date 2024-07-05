import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const MyCraftList = ({ setCrafts }) => {
    const crafts = useLoaderData();
    const { _id } = crafts;
    const { user } = useContext(AuthContext);
    const myCrafts = crafts.filter((craft) => craft.user_email === user.email);
  
    const handleDelete = (_id) => {
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
  
          fetch(
            `https://assignment-10-jute-home-decor-server-57suv2m2r.vercel.app/craft/${_id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
  
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your craft has been deleted.",
                  icon: "success",
                });
                const remaining = crafts.filter((cof) => cof._id !== _id);
                setCrafts(remaining);
              }
            });
        }
      });
    };
  
    return (
      <div className="min-h-screen mb-10 ">
        <h2 className="text-center mt-6 mb-6 font-bold text-2xl text-blue-800">My Craft List</h2>
        <div>
          {myCrafts.length > 0 ? (
            <div>
              {myCrafts.map((craft) => (
                <div key={craft._id}>
                  <div className="card card-side border p-6">
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
                          <Link to={`updateCraft/${_id}`}>
                            <button className="btn join-item mb-4">Edit</button>
                          </Link>
                          <button
                            onClick={() => handleDelete(_id)}
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
          ) : (
            <div className="text-center">
            <p className=" text-xl font-bold bg-amber-50 p-4 rounded-xl mt-10 mb-8">No Crafts is Available</p>
            <Link to="/add"><button className="btn btn-neutral font-s">Add Your Craft Items</button></Link>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default MyCraftList;