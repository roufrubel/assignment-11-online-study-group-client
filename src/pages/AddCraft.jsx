import Swal from "sweetalert2";

const AddCraft = () => {
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.itemName.value;
    const subcategory_name = form.subcategoryName.value;
    const short_description = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const user_email = form.userEmail.value;
    const user_name = form.userName.value;
    const newCraft = {
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
    };

    fetch("https://assignment-11-online-group-study-server.vercel.app/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft added successfully",
            icon: "success",
            confirmButtonText: "cool",
          });
        }

        if (data.insertedId) {
          form.reset();
        }
      });
  };
  return (
    <div className="text-center mb-12">
      <h2 className="mt-6 mb-6 font-bold text-2xl text-blue-800">
        Create Assignments
      </h2>
      <form
        onSubmit={handleAddSubmit}
        className="w-full px-2 md:w-1/2 lg:w-1/2 mx-auto space-y-2"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="image"
            placeholder="image"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="itemName"
            placeholder="item name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="subcategoryName"
            placeholder="subcategory name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="shortDescription"
            placeholder="short description"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="price"
            placeholder="price"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="rating"
            placeholder="rating"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="customization"
            placeholder="customization"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="processingTime"
            placeholder="processing time"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="stockStatus"
            placeholder="stock Status"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="userEmail"
            placeholder="user email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="userName"
            placeholder="user Name"
          />
        </label>
        <label className="input input-bordered flex items-center justify-center font-bold btn btn-outline gap-2">
          <input type="submit" value="ADD CRAFT" />
        </label>
      </form>
    </div>
  );
};

export default AddCraft;
