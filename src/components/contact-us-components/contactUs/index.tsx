import React, { useEffect } from "react";
import Container from "../../../shared/Container/Container";
import { motion } from "framer-motion";
import HeadText from "../../../shared/HeadText";
import { FaUser, FaEnvelope } from "react-icons/fa";

const ContactUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="mt-20 px-10">
      <Container>
        <div className="mb-20">
          <HeadText>Contact Us</HeadText>
        </div>
        <motion.form
          className="grid w-full grid-cols-1 gap-10 rounded-xl bg-white p-10 shadow-xl md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onSubmit={submitHandler}
        >
          <div className="flex h-20  gap-2 border p-4">
            <FaUser className="self-center text-blue-10" />{" "}
            <input
              type="text"
              placeholder="First Name"
              className="ml-4 w-full outline-none"
            />
          </div>
          <div className="flex h-20  gap-2 border p-4">
            <FaUser className="self-center text-blue-10" />{" "}
            <input
              type="text"
              placeholder="Last Name"
              className="ml-4 w-full outline-none"
            />
          </div>
          <div className="flex h-20  gap-2 border p-4 md:col-span-2">
            <FaEnvelope className="self-center text-blue-10" />{" "}
            <input
              type="text"
              placeholder="Email Address"
              className="ml-4 w-full outline-none"
            />
          </div>

          <div className="flex  h-40 gap-2 border p-4 md:col-span-2">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
              className="w-full resize-none p-4 outline-none"
            ></textarea>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-md bg-red-gtext px-10 py-4 text-white"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </Container>
    </section>
  );
};

export default ContactUs;
