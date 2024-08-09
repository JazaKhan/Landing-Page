import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bk7ychz", // Your service ID
        "template_b6c3tak", // Your template ID
        form.current,
        "bZHgLa52icagtpQ0C" // Your public key (User ID)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your message was sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="container mx-auto px-8 py-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl mb-8"
      >
        Contact Me
      </motion.h2>
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label className="block text-neutral-300 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-3 py-2 border border-neutral-600 rounded-lg text-neutral-900"
          />
        </div>
        <div className="mb-4">
          <label className="block text-neutral-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-3 py-2 border border-neutral-600 rounded-lg text-neutral-900"
          />
        </div>
        <div className="mb-4">
          <label className="block text-neutral-300 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full px-3 py-2 border border-neutral-600 rounded-lg text-neutral-900"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
