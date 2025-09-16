import React, { useState } from "react";
import { Layout } from "@/components/layout";

export default function InspirePage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    agreed: false,
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    // In a real app, you might handle multiple files
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("You must agree to the terms to submit your story.");
      return;
    }
    // Placeholder for actual submission logic
    console.log("Submitting story:", { ...formData, fileName: file?.name });
    alert("Thank you for sharing your story! (Check the console for data).");
  };

  return (
    <Layout>
      <div style={{ backgroundColor: '#FAF7F2', color: '#6B4F4B', fontFamily: "'Georgia', serif" }} className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 p-10">
          <div>
            <h1 className="text-center text-5xl font-bold">
              Share your experince!
            </h1>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            
            {/* File Input */}
            <div className="p-4 border border-gray-300 rounded-md">
              <input 
                type="file" 
                onChange={handleFileChange} 
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
            </div>

            {/* Title Input */}
            <div className="rounded-md shadow-sm">
              <input
                name="title"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Description Input */}
            <div>
              <textarea
                name="description"
                rows="4"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            
            {/* Agreement Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreement"
                  name="agreed"
                  type="checkbox"
                  className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreement" className="font-medium text-gray-700">
                  By submitting, you grant Govenue permission to use and display your post for marketing, including online and promotional materials. Thank you for being part of our community! ☀️
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border-2 font-bold rounded-md text-lg transition-colors"
                style={{
                    borderColor: '#6B4F4B',
                    color: '#6B4F4B'
                }}
                onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = '#6B4F4B';
                    e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#6B4F4B';
                }}
              >
                LOGIN TO UPLOAD IMAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}