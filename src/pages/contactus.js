import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {/* Header */}
      <div className="text-center text-black mb-12">
        <h1 className="text-4xl font-bold text-black-600 ">Contact Us</h1>
        <p className="text-black-600 mt-2">
          We'd love to hear from you! Fill out the form below or reach us
          directly.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 space-y-4 text-black"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6 text-black">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            You can also reach us through the following contact details:
          </p>
          <div>
            <h3 className="font-semibold">📍 Address</h3>
            <p className="text-gray-600">123 Business Street, New Delhi, India</p>
          </div>
          <div>
            <h3 className="font-semibold">📞 Phone</h3>
            <p className="text-gray-600">+91 7415980071</p>
          </div>
          <div>
            <h3 className="font-semibold">📧 Email</h3>
            <p className="text-gray-600">support@govenue.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}
