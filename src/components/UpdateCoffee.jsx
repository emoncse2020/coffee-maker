import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (formData) => {
    const name = formData.get("name");
    const quantity = formData.get("quantity");
    const supplier = formData.get("supplier");
    const taste = formData.get("taste");
    const category = formData.get("category");
    const details = formData.get("details");
    const photo = formData.get("photo");

    const UpdatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(UpdateCoffee);
    // send data to the server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className=" p-20 bg-[#F4F3F0]">
      <h2 className="text-3xl font-extrabold text-center mb-4">
        Update Coffee : {coffee?.name}
      </h2>
      <form action={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 space-y-2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2 space-y-2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Coffee Name"
                defaultValue={quantity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 space-y-2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2 space-y-2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Coffee Name"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 space-y-2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2 space-y-2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo row */}
        <div className="form-control w-full space-y-2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#D2B48C] mt-4 py-2 text-white"
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
