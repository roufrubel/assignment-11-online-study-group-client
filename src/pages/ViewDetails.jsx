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
    <div className="mt-4 mb-6 px-2">
        <div className="card md:pt-4 lg:pt-4 w-full mx-auto m-2 md:w-1/2 lg:w-1/2 mt-10 mb-10 border rounded-lg">
      <figure>
        <img className="rounded-xl" src={image} alt="craft" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>Subcategory: {subcategory_name}</p>
        <p>{short_description}</p>
        <p className="text-lg font-semibold">Price: $ {price}</p>
        <p>Ratings: {rating}</p>
        <p>Customization: {customization}</p>
        <p>Time: {processing_time}</p>
        <p>Stock: {stockStatus}</p>
        <p>Email: {user_email}</p>
        <p>Name: {user_name}</p>
      </div>
    </div>
    </div>
  );
};

export default ViewDetails;
