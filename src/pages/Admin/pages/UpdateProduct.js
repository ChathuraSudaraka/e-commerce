import React, { useState, useRef, useEffect, Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "react-modal"; // Import Modal from the appropriate library
import { paginationItems } from "../../../constants";
import Sidebar from "../layouts/sidebar/Sidebar";

Modal.setAppElement("#root"); // Set the root element for the Modal

const UpdateProduct = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const ref = useRef();
  const cancelButtonRef = useRef(); // Define cancelButtonRef

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  // Function to open the modal when the search icon is clicked
  const openModal = () => {
    setShow(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 md:order-2 overflow-y-auto">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full border border-gray-500 rounded-lg placeholder:text-[#C4C4C4] placeholder:text-[14px] text-center"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" onClick={openModal} />
          </div>
          <div className="bg-gray-200 border border-gray-500 h-96 mt-4">
            {searchQuery && (
              <div
                className={`h-96 mx-auto top-16 w-full overflow-y-scroll scrollbar-hide cursor-pointer rounded-md p-4`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      key={item._id}
                      className="w-full h-28 bg-white mb-3 flex items-center gap-4 rounded-md p-3 cursor-pointer hover:shadow-md transition duration-300"
                    >
                      <img
                        className="w-24 h-24 object-cover rounded-md"
                        src={item.img}
                        alt="productImg"
                      />
                      <div className="flex flex-col flex-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">{item.des}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            LKR {item.price}
                          </span>
                        </p>
                      </div>
                      <div className="">
                        <button
                          onClick={openModal}
                          className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] mr-4 hover:bg-black duration-300 font-bold"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal for Update Product */}
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10"
          initialFocus={cancelButtonRef}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative border border-gray-200 dark:border-border-color dark:bg-blog-component-bg bg-white rounded-lg w-full max-w-md p-4">
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium dark:text-white text-gray-900"
                  >
                    Search
                  </Dialog.Title>
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <FaSearch className="fill-current text-gray-500 w-6 h-6" />
                    </span>
                    <input
                      type="text"
                      className="block w-full pl-10 py-2 pr-3 dark:bg-slate-600 text-gray-900 placeholder-gray-900 focus:outline-none focus:ring focus:ring-blue-400 border dark:border-none rounded-md"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div className="mt-6">
                  {/* Search results */}
                  <div className="bg-white dark:bg-slate-600 rounded-md border dark:border-none border-gray-300 shadow">
                    <div className="p-2">
                      <div className="flex items-center cursor-pointer dark:hover:bg-gray-700 hover:bg-blue-100 p-2 rounded-md my-2">
                        <div className="bg-gray-400 w-2 h-2 rounded-full m-2"></div>
                        <div className="flex-grow font-medium">
                          React Native
                        </div>
                        <div className="text-sm font-normal dark:text-gray-900 text-gray-500">
                          Blog
                        </div>
                      </div>
                      <div className="flex items-center cursor-pointer dark:hover:bg-gray-700 hover:bg-blue-100 p-2 rounded-md my-2">
                        <div className="bg-green-400 w-2 h-2 rounded-full m-2"></div>
                        <div className="flex-grow font-medium">Bootstrap 5</div>
                        <div className="text-sm font-normal dark:text-gray-900 text-gray-500">
                          Article
                        </div>
                      </div>
                      <div className="flex items-center cursor-pointer dark:hover:bg-gray-700 hover:bg-blue-100 p-2 rounded-md my-2">
                        <div className="bg-gray-400 w-2 h-2 rounded-full m-2"></div>
                        <div className="flex-grow font-medium">
                          Tailwind CSS
                        </div>
                        <div className="text-sm font-normal dark:text-gray-900 text-gray-500">
                          Article
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-medium dark:text-white text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-md"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default UpdateProduct;
