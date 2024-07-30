import { useLoaderData, useParams } from "react-router-dom";
import moment from 'moment';

const ViewDetails = () => {
  const assignments = useLoaderData();
  const { id } = useParams();
  const assignment = assignments?.find((assignment) => assignment._id === id);
  const { image, title, marks, description, difficulty, date } = assignment;

  // date formatting with moment js
const originalDate = date;

// Format the date
const formattedDate = moment(originalDate).format('YYYY-MM-DD');

  return (
    <div className="mt-4 mb-6 p-2">
      <h2 className="mt-4 mb-6 font-bold text-2xl text-blue-800 text-center">
        - Assignment View Details -
      </h2>
      <div className="card p-4 w-full mx-auto m-2 md:w-1/2 lg:w-1/2 mt-10 mb-10 border rounded-lg">
        <figure>
          <img className="rounded-xl" src={image} alt="craft" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Marks: {marks}</p>
          <p>{description}</p>
          <p>Difficulty: {difficulty}</p>
          <p className="text-lg font-semibold">Created At: {formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
