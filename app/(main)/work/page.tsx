'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CategoryCounts {
  All: number;
  Design: number;
  Development: number;
}

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewType, setViewType] = useState("Table"); // Toggle between table and grid view

  // Add category and metadata to products for example purposes
  const enhancedProducts = products.map((product, index) => ({
    ...product,
    category: index % 2 === 0 ? "Design" : "Development", // Example categories
    location: "Remote", // Example location
    service: index % 2 === 0 ? "UI/UX Design" : "Web Development", // Example service
    year: 2023 - (index % 5), // Example year
  }));

  const filteredProducts =
    activeCategory === "All"
      ? enhancedProducts
      : enhancedProducts.filter((product) => product.category === activeCategory);

  const categoryCounts: CategoryCounts = {
    All: enhancedProducts.length,
    Design: enhancedProducts.filter((product) => product.category === "Design").length,
    Development: enhancedProducts.filter((product) => product.category === "Development").length,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4 md:px-20">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Creating Next-Level Digital Products
        </h1>
        <p className="text-gray-400 text-lg">
          Discover our innovative work in both Design and Development.
        </p>
      </motion.div>

      {/* Categories and View Toggle */}
      <motion.div
        className="flex justify-between items-center my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex overflow-x-scroll no-scrollbar space-x-2 md:space-x-6">
          {["All", "Design", "Development"].map((category) => (
            <Button
              key={category}
              size='sm'
              className={`rounded-full text-xs md:text-base font-medium ${
                activeCategory === category
                  ? "bg-teal-400 text-gray-900"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category} ({categoryCounts[category as keyof CategoryCounts]})
            </Button>
          ))}
        </div>
        <Button
          size='sm'
          onClick={() => setViewType(viewType === "Table" ? "Grid" : "Table")}
          className="rounded-full text-xs md:text-base bg-teal-400 text-gray-900 font-medium hover:bg-teal-500"
        >
          {viewType === "Table" ? "Switch to Grid" : "Switch to Table"}
        </Button>
      </motion.div>

      {/* Products View */}
      {viewType === "Table" ? (
        <motion.div
          className="overflow-x-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <table className="table-auto w-full text-left text-gray-300">
            <thead>
              <tr className="bg-gray-800 text-teal-400">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Service Provided</th>
                <th className="px-6 py-3">Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">{product.title}</td>
                  <td className="px-6 py-4">{product.location}</td>
                  <td className="px-6 py-4">{product.service}</td>
                  <td className="px-6 py-4">{product.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={150}
                height={90}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-teal-400">
                {product.title}
              </h3>
              <p className="text-gray-400">{product.location}</p>
              <p className="text-gray-400">{product.service}</p>
              <p className="text-gray-400">{product.year}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline mt-2 block"
              >
                Visit
              </a>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default WorkPage;
