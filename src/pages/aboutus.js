import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are passionate about building amazing products that make life
          easier, smarter, and more enjoyable.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            Our mission is to deliver high-quality solutions that help users
            achieve their goals. We focus on innovation, simplicity, and
            reliability in everything we do.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            Our vision is to be a trusted partner worldwide, empowering people
            and businesses through cutting-edge technology and great user
            experiences.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Alice Johnson</h3>
            <p className="text-sm text-gray-500">CEO</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Mark Smith</h3>
            <p className="text-sm text-gray-500">CTO</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Sophia Lee</h3>
            <p className="text-sm text-gray-500">Designer</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-blue-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}
