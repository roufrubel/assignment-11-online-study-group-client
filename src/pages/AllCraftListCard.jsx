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
          <td className="font-semibold">{craft.title}</td>
          <td>${craft.marks}</td>
          <td>{craft.difficulty}</td>
          <td>{craft.date}</td>
          <td><Link to={`/assignment/${_id}`}><button className="btn btn-circle btn-sm btn-outline font-bold"><GrView/></button></Link></td>
        </tr>
      </tbody>
    );
};

export default AllCraftListCard;