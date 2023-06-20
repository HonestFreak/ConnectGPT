"use client"
import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import axios from "axios";

const NewsLatterBox = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowConfetti(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    try {
      await axios.post("/api/submit-form", formData);
      // Additional form submission logic if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately
    }
  };

  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white
      ">
      🚀 Be a winner in this AI war.<br />
      🥇  Be the first in your industry to use ConnectGPT.
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color">
        Get massive discounts, early access, and special surprises in the future by becoming a
        ConnectGPT early adopter.
      </p>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25"></p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name" required
          placeholder="Enter your name"
          className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <input
          type="email"
          name="email" required
          placeholder="Enter your email"
          className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <input
          type="submit"
          value="🔥 Add me to the waitlist"
          className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
        />
        <p className="text-center text-base font-medium leading-relaxed text-body-color">
          We will not send spam. Your email will not be shared with any third party.
        </p>
      </form>

      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.2}
        />
      )}
    </div>
  );
};

export default NewsLatterBox;
