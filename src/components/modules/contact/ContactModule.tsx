"use client";

import {
  MultilineTextInput,
  SubmitButton,
  TextInput,
} from "@/components/elements";
import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import Image from "next/image";

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

interface FormErrors {
  email?: string;
  message?: string;
}

export default function ContactModule() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    telephone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

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
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        country: "",
        telephone: "",
        message: "",
      });
      setErrors({});

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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

          <p className="font-montserrat text-xs md:text-sm text-syrio-white/80 leading-relaxed max-w-xs">
            For any enquiries or questions, please reach out to our Syrio team.
            Follow along with our journey via social media.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <UnifiedLink
              href="https://www.facebook.com/groups/901217364345574"
              aria-label="Facebook"
              className="group transition-all duration-300"
            >
              <Image
                src="/svg/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover-syrio-white-glow-image"
              />
            </UnifiedLink>

            <UnifiedLink
              href="https://www.instagram.com/syriovolleyacademy/?hl=en"
              aria-label="Instagram"
              className="group transition-all duration-300"
            >
              <Image
                src="/svg/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover-syrio-white-glow-image"
              />
            </UnifiedLink>

            <UnifiedLink
              href="https://linktr.ee/syriovolleyacademy?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn-hmZ249k9HrfJeRWbJ0gHgITbT71QfLZOOrTJSNW7-9KcDzC23GWkGdem1Q_aem_OA3-fBKuXaXmJrurqScDFw"
              aria-label="Link Tree"
              className="group transition-all duration-300"
            >
              <Image
                src="/svg/link-tree.svg"
                alt="Link Tree"
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover-syrio-white-glow-image"
              />
            </UnifiedLink>
          </div>
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

            <div>
              <TextInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className={`text-sm ${errors.email ? "border-b-red-500 focus:border-b-red-500" : ""}`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 font-montserrat">
                  {errors.email}
                </p>
              )}
            </div>

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

            <div>
              <MultilineTextInput
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                rows={4}
                className={`text-sm ${errors.message ? "border-b-red-500 focus:border-b-red-500" : ""}`}
                required
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 font-montserrat">
                  {errors.message}
                </p>
              )}
            </div>

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
