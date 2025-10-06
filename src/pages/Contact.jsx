import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-semibold mb-8 text-center">Contact Us</h2>
      <ContactForm />
    </div>
  );
}
