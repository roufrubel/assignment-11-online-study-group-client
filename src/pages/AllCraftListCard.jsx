import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AllCraftListCard = ({ craft }) => {
    const { loading } = useContext(AuthContext);
 
    if (loading) {
      <p className="text-2xl text-amber-700">Loading....</p>;
    }
  
    return (
      <tbody>
        <tr>
          <th></th>
          <td>{craft.item_name}</td>
          <td>${craft.price}</td>
          <td>{craft.stockStatus}</td>
          <td><button className="btn join-item mb-4">View Details</button></td>
        </tr>
      </tbody>
    );
};

export default AllCraftListCard;