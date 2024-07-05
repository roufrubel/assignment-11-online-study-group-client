import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";


const AllCraftListCard = ({ craft }) => {
    const { loading } = useContext(AuthContext);
    const {_id} = craft;
 
    if (loading) {
      <p className="text-2xl text-amber-700">Loading....</p>;
    }
  
    return (
      <tbody>
        <tr>
          <th></th>
          <td className="font-semibold">{craft.item_name}</td>
          <td>${craft.price}</td>
          <td>{craft.stockStatus}</td>
          <td><Link to={`/craft/${_id}`}><button className="btn btn-circle btn-sm btn-outline font-bold"><GrView/></button></Link></td>
        </tr>
      </tbody>
    );
};

export default AllCraftListCard;