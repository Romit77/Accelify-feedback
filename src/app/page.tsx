"use client";
import React from "react";
import { BackgroundBeams } from "../app/components/ui/background-beams";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";

export default function BackgroundBeamsDemo() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async () => {
    try {
      const parsedEmail = schema.safeParse(email);
    } catch (error: any) {
      toast.error("Invalid email format");
      return;
    }

    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });
    if (response.ok) {
      toast.success(
        "Message sent successfully to our email. We will get back to you soon."
      );
      setEmail("");
      setMessage("");
    } else {
      toast.error("Failed to send message on email! Please try again later.");
    }
  };

  const schema = z.string().email({ message: "invalid email format" });

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We are here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          creative journey.
        </p>

        <input
          type="text"
          placeholder="Your Message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-20 p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-zinc cursor-pointer"
        onClick={sendMail}
      >
        Send Message
      </button>
      <BackgroundBeams />
    </div>
  );
}
