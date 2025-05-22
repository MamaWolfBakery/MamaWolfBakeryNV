import React, { useState } from "react";
import { Mail, MapPin, Phone, Facebook } from "lucide-react";

export default function MamaWolfBakery() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-cyan-700 text-white p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-yellow-300 mb-2">Mama Wolf Bakery</h1>
        <p className="text-lg">Artisan sourdough & sweet treats - Dayton, NV</p>
      </header>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-black bg-opacity-40 p-4 rounded-xl md:col-span-2">
          <h2 className="text-2xl text-yellow-200 mb-2">Sourdough Menu</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Regular - $10</li>
            <li>Inclusion - $12</li>
            <li>Mini Loaf Set (4) - $20</li>
          </ul>
          <p className="mt-2 text-sm">Flavors:
