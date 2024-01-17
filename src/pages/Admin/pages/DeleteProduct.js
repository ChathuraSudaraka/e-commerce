import React, { useState } from "react";
import Sidebar from "../layouts/sidebar/Sidebar";

const UpdateProduct = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productImage, setProductImage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};

    if (!search.trim()) {
      errors.search = "Search is required";
    }

    if (!category.trim()) {
      errors.category = "Category is required";
    }

    if (!productName.trim()) {
      errors.productName = "Product Name is required";
    }

    if (!description.trim()) {
      errors.description = "Description is required";
    }

    if (!price.trim()) {
      errors.price = "Price is required";
    } else if (isNaN(price) || +price <= 0) {
      errors.price = "Price must be a valid positive number";
    }

    if (!productColor.trim()) {
      errors.productColor = "Product Color is required";
    }

    if (!productImage.trim()) {
      errors.productImage = "Product Image URL is required";
    }

    if (Object.keys(errors).length === 0) {
      // If no errors, proceed with form submission (e.g., make API call to update the product)
      alert("Form submitted successfully!");
    } else {
      // If there are errors, update the state to display error messages
      setFormErrors(errors);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 md:order-2">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold mb-4">Remove Product</h2>
          <div className="bg-white p-4 border border-gray-400 shadow">
            <form onSubmit={handleSubmit}>
              <div className="p-4 border border-gray-600">
                {/* Search */}
                <div className="mb-4">
                  <label
                    htmlFor="search"
                    className="text-base font-titleFont font-semibold px-2"
                  >
                    Search Product
                  </label>
                  <input
                    type="text"
                    id="search"
                    className={`w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor ${
                      formErrors.search && "border-red-500"
                    }`}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {formErrors.search && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.search}
                    </p>
                  )}
                </div>
              </div>

              {/* Category */}
              <div className="mb-4 mt-4">
                <label
                  htmlFor="category"
                  className="text-base font-titleFont font-semibold px-2"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className={`w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor ${
                    formErrors.category && "border-red-500"
                  }`}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {formErrors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.category}
                  </p>
                )}
              </div>

              {/* Product Name */}
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="text-base font-titleFont font-semibold px-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className={`w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor ${
                    formErrors.productName && "border-red-500"
                  }`}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                {formErrors.productName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.productName}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="text-base font-titleFont font-semibold px-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className={`w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor ${
                    formErrors.description && "border-red-500"
                  }`}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {formErrors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.description}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="text-base font-titleFont font-semibold px-2"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  className={`w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor ${
                    formErrors.price && "border-red-500"
                  }`}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {formErrors.price && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.price}
                  </p>
                )}
              </div>

              {/* Product Color */}
              <div className="mb-4">
                <label
                  htmlFor="productColor"
                  className="text-base font-titleFont font-semibold px-2"
                >
                  Product Color
                </label>
                <input
                  type="text"
                  id="productColor"
                  className={`w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor ${
                    formErrors.productColor && "border-red-500"
                  }`}
                  value={productColor}
                  onChange={(e) => setProductColor(e.target.value)}
                />
                {formErrors.productColor && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.productColor}
                  </p>
                )}
              </div>

              {/* Product Image */}
              <div className="mb-4">
                <label
                  htmlFor="productImage"
                  className="text-base font-titleFont font-semibold px-2"
                >
                  Product Image
                </label>
                <input
                  type="text"
                  id="productImage"
                  className={`w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor ${
                    formErrors.productImage && "border-red-500"
                  }`}
                  value={productImage}
                  onChange={(e) => setProductImage(e.target.value)}
                />
                {formErrors.productImage && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.productImage}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] mr-4 hover:bg-black duration-300 font-bold"
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UpdateProduct;
