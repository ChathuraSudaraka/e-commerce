import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ProductRemoveModal = ({ closeModal }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productImage, setProductImage] = useState("");
  const [errors, setErrors] = useState({});
  const [confirmRemove, setConfirmRemove] = useState(false);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductColorChange = (e) => {
    setProductColor(e.target.value);
  };

  const handleImageDrop = (acceptedFiles, rejectedFiles) => {
    // Handle accepted files (validations)
    if (rejectedFiles.length > 0) {
      setErrors({ productImage: "Invalid file type or size" });
    } else {
      // Reset errors if there are no rejected files
      setErrors({});
    }

    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (!file.type.startsWith("image/")) {
        setErrors({ productImage: "Please upload an image file" });
      } else if (file.size > 5242880) {
        // 5 MB in bytes
        setErrors({ productImage: "Image size should be less than 5 MB" });
      } else {
        setProductImage(file);
      }
    }
  };

  const handleUpdate = () => {
    // Add logic to dispatch an action for updating the product
    // ...

    // Close the modal
    closeModal();
  };

  const handleRemove = () => {
    // Add logic to dispatch an action for removing the product
    // ...

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <Transition.Root show={true} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative bg-white dark:bg-blog-component-bg dark:border-border-color border border-gray-200 rounded-lg w-full max-w-md p-4">
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-gray-900"
                  >
                    Remove Product
                  </Dialog.Title>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-600">
                    Are you sure you want to remove the product?
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="ml-2 px-3 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md"
                    onClick={handleRemove}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="ml-2 px-3 py-2 text-sm font-medium text-white bg-primeColor hover:bg-black rounded-md"
                    onClick={closeModal}
                  >
                    No
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default ProductRemoveModal;
