"use client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const telegram_message = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    fetch(
      `https://api.telegram.org/bot${`1989219584:AAGydBoy_0dS2kcniLujhReiv05o3z-wrNA`}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1002476405069",
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
        <h1 className="font-semibold text-[72px]">Contact us</h1>
        <p className="text-[24px] text-[#878787] mt-5">
          Have any questions or propositions? Leave your message and we`ll get
          back to you in an instant!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 mt-12">
          <input
            type="text"
            placeholder="Name"
            required
            className="py-5 px-7 text-xl bg-[#252525] w-full rounded-[50px] outline-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="py-5 px-7 text-xl bg-[#252525] w-full rounded-[50px] outline-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Messages..."
            className="py-5 px-7 text-xl h-[160px] bg-[#252525] w-full rounded-[30px] outline-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-[50px] border border-[#878787] p-[20px] text-xl font-semibold"
          >
            Send message
          </button>
        </form>
      </div>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        src={"/img/contact-us.png"}
        width={736}
        height={762}
        className="w-[736px] object-cover lg:flex hidden "
      />
    </section>
  );
};

export default ContactForm;
