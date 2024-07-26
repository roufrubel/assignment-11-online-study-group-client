import { useLoaderData, useParams } from "react-router-dom";



const Update = () => {
    const assignments = useLoaderData();
    const {id} = useParams();

    const updatedAssignment = assignments?.find(assignment => assignment._id === id)
    console.log(updatedAssignment)

    const handleUpdate = () => {

    }
    
    return (
        <div className="text-center mt-6 mb-12 p-4 bg-slate-50">
      <h2 className="mt-4 mb-6 font-bold text-2xl text-blue-800">
        Create Assignments
      </h2>
      <form
        onSubmit={handleUpdate}
        className="w-full px-2 md:w-1/2 lg:w-1/2 mx-auto space-y-2"
      >
        <label className="input input-bordered input-primary flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="title"
            placeholder="title"
            defaultValue={updatedAssignment.title}
          />
        </label>

        <label className="input input-bordered input-primary flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="description"
            placeholder="description"
          />
        </label>

        <label className="input input-bordered input-primary flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="marks"
            placeholder="marks"
          />
        </label>

        <label className="input input-bordered input-primary flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="image"
            placeholder="thumbnail image url"
          />
        </label>

        <select
          className="select select-bordered join-item select-primary flex items-center gap-2 w-full"
        >
          <option disabled selected>
            defaultValue={}
          </option>
        </select>

        <div className="input input-bordered input-primary flex items-center gap-2 ">
          defaultValue={}
        </div>

        <label className="input input-bordered input-primary flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="userEmail"
            placeholder="user email"
          />
        </label>

        <label className="input input-bordered input-primary flex items-center justify-center font-bold btn btn-outline gap-2 text-indigo-500">
          <input type="submit" value="Create Assignment" />
        </label>
      </form>
    </div>
    );
};

export default Update;