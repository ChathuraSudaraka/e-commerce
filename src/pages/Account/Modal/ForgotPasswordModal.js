import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import OtpInput from 'react-otp-input';

const ForgotPassModal = ({ closeModal }) => {
  const [otp, setOtp] = useState("");

  const handleUpdate = () => {
    closeModal();
  };

  return (
    <div>
      <Transition.Root show={true} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={closeModal}>
          {/* ... (previous Transition.Child components) */}

          <div className="fixed inset-0 z-10 flex items-center justify-center">
            {/* ... (previous Transition.Child components) */}
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
                    className="text-lg font-medium text-gray-900"
                  >
                    Enter OTP
                  </Dialog.Title>
                </div>
                <div className="mt-9">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    containerStyle="flex justify-center"
                    inputStyle="w-12 h-12 text-3xl mx-2 border-gray-400 border outline-none text-center"
                    isInputNum
                  />
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="ml-2 px-3 py-2 text-sm font-medium text-white bg-primeColor hover:bg-black rounded-md"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="ml-2 px-3 py-2 text-sm font-medium text-white bg-primeColor hover:bg-black rounded-md"
                    onClick={closeModal}
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

export default ForgotPassModal;
