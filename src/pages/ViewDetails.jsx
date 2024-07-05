import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const crafts = useLoaderData();
    const {id} = useParams();
    const craft = crafts?.find(craft => craft._id === id);
    const {item_name} = craft;
    
    return (
        <div>
            <h2>View Details Page: {item_name}</h2>
        </div>
    );
};

export default ViewDetails;