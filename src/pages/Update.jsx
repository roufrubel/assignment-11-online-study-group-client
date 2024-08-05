import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const assignment = useLoaderData()
    const [difficulty, setDifficulty] = useState(assignment.difficulty || "");
    const [date, setDate] = useState(new Date(assignment.date) || null);

    const location = useLocation();
    const navigate = useNavigate();
   
  
    const handleDifficulty = (e) => {
      const difficultyText = e.target.value;
      setDifficulty(difficultyText);
    };
  
    const handleDateSelect = (date) => {
      setDate(date);
    };
  
    const handleDateChange = (date) => {
      setDate(date);
    };
  
    const handleUpdateSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const image = form.image.value;
      const description = form.description.value;
      const marks = form.marks.value;
      const user_email = form.userEmail.value;
  
      const updatedAssignment = {
        title,
        description,
        marks,
        image,
        difficulty,
        date,
        user_email,
      };
    //   console.log(updatedAssignment);
  
      fetch(
        `https://assignment-11-online-group-study-server.vercel.app/assignment/${assignment._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedAssignment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data.modifiedCount > 0) {
            Swal.fire({
                title: "Success!",
                text: "Assignment updated successfully",
                icon: "success",
                confirmButtonText: "cool",
              });
          }
  
          if (data.modifiedCount > 0) {
            form.reset();
          }
           // navigate after updated assignment
           navigate(location?.state ? location.state : '/assignment');
        });
    };
    
    return (
      <div className="text-center mt-6 mb-12 p-4 bg-slate-50">
        <h2 className="mt-4 mb-6 font-bold text-2xl text-blue-800">
          Update Assignment
        </h2>
        <form
          onSubmit={handleUpdateSubmit}
          className="w-full px-2 md:w-1/2 lg:w-1/2 mx-auto space-y-2"
        >
          <label className="input input-bordered input-primary flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="title"
              defaultValue={assignment.title}
            />
          </label>
  
          <label className="input input-bordered input-primary flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="description"
              defaultValue={assignment.description}
            />
          </label>
  
          <label className="input input-bordered input-primary flex items-center gap-2">
            <input
              type="number"
              className="grow"
              name="marks"
              defaultValue={assignment.marks}
            />
          </label>
  
          <label className="input input-bordered input-primary flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="image"
              defaultValue={assignment.image}
            />
          </label>
  
          <select
            className="select select-bordered join-item select-primary flex items-center gap-2 w-full"
            value={difficulty}
            onChange={handleDifficulty}
          >
            <option disabled value="">
              Select difficulty level
            </option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
  
          <div className="input input-bordered input-primary flex items-center gap-2 ">
            <DatePicker
              selected={date}
              onSelect={handleDateSelect}
              onChange={handleDateChange}
              placeholderText="Select due date"
              className="grow"
            />
          </div>
  
          <label className="input input-bordered input-primary flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="userEmail"
              defaultValue={assignment.user_email}
            />
          </label>
  
          <label className="input input-bordered input-primary flex items-center justify-center font-bold btn btn-outline gap-2 text-indigo-500">
            <input type="submit" value="Update Assignment" />
          </label>
        </form>
      </div>
    );
  };
  
  export default Update;