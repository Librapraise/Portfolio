"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current,
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mt-3">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl md:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
        ref={form}
        onSubmit={sendEmail}
          className="h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 md:gap-6 justify-center p-10 md:p-24"
        >
          <span>Dear Praise,</span>
          <textarea
            rows={4}
            className="bg-gray-200 rounded-lg outline-none resize-none p-2"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-gray-200 rounded-lg outline-none p-2"
          />
          <span>Best Regards.</span>
          <button className="bg-black hover:bg-gray-200 rounded font-semibold text-white hover:text-gray-600 p-2 md:p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
