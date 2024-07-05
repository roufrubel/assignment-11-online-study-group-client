import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const crafts = useLoaderData();
  const { id } = useParams();
  const craft = crafts?.find((craft) => craft._id === id);
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    user_email,
    user_name,
  } = craft;

  return (
    <div className="card">
      <figure>
        <img src={image} alt="craft" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>{subcategory_name}</p>
        <p>{short_description}</p>
        <p className="text-lg font-semibold">{price}</p>
        <p>{rating}</p>
        <p>{customization}</p>
        <p>{processing_time}</p>
        <p>{stockStatus}</p>
        <p>{user_email}</p>
        <p>{stockStatus}</p>
        <p>{user_name}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
