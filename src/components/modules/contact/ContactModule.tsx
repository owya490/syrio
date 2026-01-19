"use client";

import {
  MultilineTextInput,
  SubmitButton,
  TextInput,
} from "@/components/elements";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

const EMAILJS_SERVICE_ID = "syrio";
const EMAILJS_TEMPLATE_ID = "contact_us_template";
const EMAILJS_PUBLIC_KEY = "4zeAGzs0RgwF9Vt60";

interface FormData {
  name: string;
  email: string;
  country: string;
  telephone: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactModule() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    telephone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          phone: formData.telephone,
          country: formData.country,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        country: "",
        telephone: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Module
      className="py-20 min-h-[80vh]"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Contact background"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 grid md:grid-cols-[40%_60%] items-start">
        {/* Left side - Title and description */}
        <div className="space-y-6 pr-3">
          <div className="h-[1px] bg-syrio-white w-1/3 hidden md:block"></div>
          <h2
            className={`font-bank-gothic text-4xl lg:text-5xl font-bold tracking-[${tracking.wide}] leading-tight`}
          >
            FORGE YOUR
            <br />
            OWN PATH
          </h2>

          <p className="font-montserrat text-xs md:text-sm text-syrio-white/80 leading-relaxed max-w-xs mb-6">
            For any enquiries or questions, please reach out to our Syrio team.
            Follow along with our journey via social media.
          </p>
        </div>

        {/* Right side - Contact form */}
        <div className="w-full md:pl-3">
          <form onSubmit={handleSubmit} className="space-y-8">
            <TextInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="text-sm"
            />

            <TextInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="text-sm"
            />

            <TextInput
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="text-sm"
            />

            <TextInput
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Telephone"
              className="text-sm"
            />

            <MultilineTextInput
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="text-sm"
            />

            <SubmitButton
              className="mt-4"
              disabled={submitStatus === "loading"}
            >
              {submitStatus === "loading" && "Sending..."}
              {submitStatus === "success" && "Message Sent!"}
              {submitStatus === "error" && "Error - Try Again"}
              {submitStatus === "idle" && "Submit"}
            </SubmitButton>
          </form>
        </div>
      </div>
    </Module>
  );
}
