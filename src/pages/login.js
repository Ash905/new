import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/card";
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert(`Logged in as ${formData.email}`);
  };

  return (
    <Card>
      <CardContent>
        <div className="flex h-screen justify-center items-center bg-gray-100 text-white">
          <div className="bg-black shadow-lg rounded-2xl p-8 w-96 ">
            <h2 className="text-2xl font-bold text-center mb-6">Log   In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">  
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
              <input
                type="password" 
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Log In
              </button>
            </form>
            <p className="text-sm text-center text-white-600 mt-4">
              <br/>
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
