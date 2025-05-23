import React, { useState } from "react";
import { Mail, MapPin, Phone, Facebook } from "lucide-react";

export default function MamaWolfBakery() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/mwkgyllg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Order submitted! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-cyan-700 text-white p-6">
      <header className="text-center py-10">
        <img src="/logo.png" alt="Mama Wolf Logo" className="mx-auto h-20 mb-4" />
        <h1 className="text-5xl font-bold text-yellow-300 mb-2">Mama Wolf Bakery</h1>
        <p className="text-lg">Artisan sourdough & sweet treats - Dayton, NV</p>
      </header>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-black bg-opacity-40 p-4 rounded-xl md:col-span-2">
          <h2 className="text-2xl text-yellow-200 mb-2">Sourdough Menu</h2>
          <img src="/menu.png" alt="Menu" className="rounded-lg mx-auto max-w-full" />
        </div>

        <div className="bg-black bg-opacity-40 p-4 rounded-xl">
          <h2 className="text-2xl text-yellow-200 mb-2">Photo Gallery</h2>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img key={i} src={`/gallery${i}.jpg`} alt={`Gallery ${i}`} className="rounded shadow" />
            ))}
          </div>
        </div>

        <div className="bg-black bg-opacity-40 p-4 rounded-xl">
          <h2 className="text-2xl text-yellow-200 mb-2">Customer Reviews</h2>
          <blockquote className="italic border-l-4 pl-4 border-yellow-300 mb-2">“The best sourdough I’ve ever tasted!”</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-yellow-300 mb-2">“Fresh, flavorful, and baked with love.”</blockquote>
        </div>

        <div className="bg-black bg-opacity-40 p-4 rounded-xl md:col-span-2">
          <h2 className="text-2xl text-yellow-200 mb-2">Place an Order</h2>
          <form onSubmit={handleSubmit} className="grid gap-2">
            <input className="p-2 rounded text-black" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input className="p-2 rounded text-black" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input className="p-2 rounded text-black" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <textarea className="p-2 rounded text-black" name="message" value={formData.message} onChange={handleChange} placeholder="What would you like to order?" rows="3" required></textarea>
            <button type="submit" className="bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300">Submit</button>
          </form>
        </div>

        <div className="bg-black bg-opacity-40 p-4 rounded-xl md:col-span-2 text-sm text-gray-300">
          <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-yellow-300" /> 775-671-5162</p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-yellow-300" /> mamawolfbakerynv@gmail.com</p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-300" /> Dayton, NV</p>
          <p className="flex items-center gap-2"><Facebook className="w-4 h-4 text-yellow-300" /> <a href="https://facebook.com/hashtag/MamaWolfBakery" className="underline">#MamaWolfBakery</a></p>
        </div>
      </section>

      <footer className="text-center mt-10 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Mama Wolf Bakery. All rights reserved.
      </footer>
    </div>
  );
}
