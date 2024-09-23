"use client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = ({ t }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const telegram_message = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    fetch(
      `https://api.telegram.org/bot${`7851770190:AAGykp4ZqDLmllGJVUw54OCCgYjg1bFJBvg`}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1002467431572",
          text: telegram_message,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setName("");
          setMessage("");
          toast.success("Message sent successfully!");
        } else {
          toast.error("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <section id="about-me" className="flex justify-center">
      <div className="flex flex-col px-12 py-7 max-w-[736px]">
        <h1 className="font-semibold text-[72px]">{t.contact_us.title}</h1>
        <p className="text-[24px] text-[#878787] mt-5">{t.contact_us.desc}</p>
        <form onSubmit={handleSubmit} className="space-y-6 mt-12">
          <input
            type="text"
            placeholder={t.contact_us.name}
            required
            className="py-5 px-7 text-xl bg-[#252525] w-full rounded-[50px] outline-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder={t.contact_us.email}
            className="py-5 px-7 text-xl bg-[#252525] w-full rounded-[50px] outline-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            type="text"
            placeholder={t.contact_us.message}
            className="py-5 px-7 text-xl h-[160px] bg-[#252525] w-full rounded-[30px] outline-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-[50px] border border-[#878787] p-[20px] text-xl font-semibold"
          >
            {t.contact_us.send_message}
          </button>
        </form>
      </div>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        src={"/img/contact-us.png"}
        width={736}
        height={762}
        className="w-[736px] object-cover lg:flex hidden "
        alt="contact-us"
      />
    </section>
  );
};

export default ContactForm;
