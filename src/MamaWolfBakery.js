import React from "react";

export default function MamaWolfBakery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-cyan-700 text-white p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-yellow-300 mb-2">Mama Wolf Bakery</h1>
        <p className="text-lg">A cozy home microbakery nestled in Northern Nevada</p>
      </header>
      <section className="max-w-3xl mx-auto text-center">
        <p className="mb-4">Order artisan sourdough and sweet treats, handmade with love.</p>
        <p className="italic text-sm text-gray-300">Photo gallery, order form, and reviews coming soon!</p>
      </section>
    </div>
  );
}
