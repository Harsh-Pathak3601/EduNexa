import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto w-full max-w-[550px]">
      <p className="font-dancing text-2xl text-yellow-50 text-center font-bold mb-1">
        We&apos;d love to partner with you
      </p>
      <h1 className="text-center text-3xl sm:text-4xl font-semibold text-richblack-5">Get in Touch</h1>
      <p className="text-center text-richblack-300 text-sm sm:text-base mt-2">
        We&apos;d love to hear from you. Please fill out this form.
      </p>
      <div className="mt-8 sm:mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
