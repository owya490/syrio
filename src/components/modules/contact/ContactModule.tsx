"use client";

import {
  MultilineTextInput,
  SubmitButton,
  TextInput,
} from "@/components/elements";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  country: string;
  telephone: string;
  message: string;
}

export default function ContactModule() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    telephone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
          {/* Decorative line */}
          <div className="w-12 h-0.5 bg-syrio-white/50 -ml-16 hidden md:block" />

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

            <SubmitButton className="mt-4">Submit</SubmitButton>
          </form>
        </div>
      </div>
    </Module>
  );
}
