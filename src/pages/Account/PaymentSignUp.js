import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { logoLight } from "../../assets/images";

const PaymentSignUp = () => {
  // ============= Initial State Start here =============
  const [clientMobile, setClientMobile] = useState("");
  const [Address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientMobile, setErrClientMobile] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errPostalCode, setErrPostalCode] = useState("");
  const [errCardNumber, setErrCardNumber] = useState("");
  const [errExpiryDate, setErrExpiryDate] = useState("");
  const [errCvv, setErrCvv] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleMobile = (e) => {
    setClientMobile(e.target.value);
    setErrClientMobile("");
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };

  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
    setErrPostalCode("");
  };

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
    setErrCardNumber("");
  };

  const handleExpiryDate = (e) => {
    setExpiryDate(e.target.value);
    setErrExpiryDate("");
  };

  const handleCvv = (e) => {
    setCvv(e.target.value);
    setErrCvv("");
  };

  const handlePaymentSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientMobile) {
        setErrClientMobile("Enter your mobile number");
      } else {
        if (clientMobile.length <= 10) {
          setErrClientMobile("You have not 10 numbers");
        }
      }
      if (!Address) {
        setErrAddress("Enter your address");
      }
      if (!city) {
        setErrCity("Select your city");
      }
      if (!country) {
        setErrCountry("Select your country");
      }
      if (!postalCode) {
        setErrPostalCode("Enter your postal/zip code");
      }
      if (!cardNumber) {
        setErrCardNumber("Enter your card number");
      }
      if (!expiryDate) {
        setErrExpiryDate("Enter expiration date");
      }
      if (!cvv) {
        setErrCvv("Enter your cvv");
      }
      // ============== Getting the value ==============
      if (
        clientMobile &&
        Address &&
        city &&
        country &&
        postalCode &&
        cardNumber &&
        expiryDate &&
        cvv
      ) {
        setSuccessMsg(
          `Hello dear Sir, Welcome you to Eshop Admin panel. We received your Sign up request. We are processing to validate your access.`
        );
        setClientMobile("");
        setAddress("");
        setCity("");
        setCountry("");
        setPostalCode("");
        setCardNumber("");
        setExpiryDate("");
        setCvv("");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Get started for free
            </h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with ESHOP
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all ESHOP services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © ESHOP
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your Payment Method
              </h1>
              <div className="flex flex-col gap-3">
                {/* Mobile Number */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Phone Number
                  </p>
                  <input
                    onChange={handleMobile}
                    value={clientMobile}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="number"
                    placeholder="eg. 0712345***"
                  />
                  {errClientMobile && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errClientMobile}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Address
                  </p>
                  <input
                    onChange={handleAddress}
                    value={Address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="eg. 1st street , UK"
                  />
                  {errAddress && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errAddress}
                    </p>
                  )}
                </div>

                {/* City (Dropdown) */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    City
                  </p>
                  <select
                    onChange={handleCity}
                    value={city}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  >
                    {/* Add options for cities */}
                    <option value="">Select City</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                  </select>
                  {errCity && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCity}
                    </p>
                  )}
                </div>

                {/* Country (Dropdown) */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Country
                  </p>
                  <select
                    onChange={handleCountry}
                    value={country}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  >
                    {/* Add options for countries */}
                    <option value="">Select Country</option>
                    <option value="country1">Country 1</option>
                    <option value="country2">Country 2</option>
                  </select>
                  {errCountry && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCountry}
                    </p>
                  )}
                </div>

                {/* Postal Code */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Zip/Postal code
                  </p>
                  <input
                    onChange={handlePostalCode}
                    value={postalCode}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Enter your postal code"
                  />
                  {errPostalCode && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPostalCode}
                    </p>
                  )}
                </div>

                <hr />

                {/* Card Number */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Card Number
                  </p>
                  <input
                    onChange={handleCardNumber}
                    value={cardNumber}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Enter your Card Number"
                  />
                  {errCardNumber && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCardNumber}
                    </p>
                  )}
                </div>

                {/* Expiry Date */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Expiration Date
                  </p>
                  <input
                    onChange={handleExpiryDate}
                    value={expiryDate}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="eg. MM/YYYY"
                  />
                  {errExpiryDate && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errExpiryDate}
                    </p>
                  )}
                </div>

                {/* CVV */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    CVV
                  </p>
                  <input
                    onChange={handleCvv}
                    value={cvv}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Enter CVV"
                  />
                  {errCvv && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCvv}
                    </p>
                  )}
                </div>

                {/* Checkbox */}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the Eshop{" "}
                    <span className="text-blue-500">Terms of Service </span>and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={handlePaymentSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Create Payment Method
                </button>

                {/* Back to shopping link */}
                <p className="text-sm text-center font-titleFont font-medium">
                  <Link to="/">
                    <span className="hover:text-blue-600 duration-300">
                      Back to shopping
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentSignUp;
