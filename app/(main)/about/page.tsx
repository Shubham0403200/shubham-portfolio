import React from "react";
import Contact from "@/components/gallery/contact"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 md:px-20 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Us
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Your go-to team for modern and efficient tech solutions.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white">
            Who We Are
          </h2>
          <p className="mt-2 text-gray-300 leading-relaxed">
            We are a team of two passionate developers with over three years of
            experience in the IT industry. With a solid foundation in
            full-stack development, we have delivered cutting-edge solutions
            for clients across diverse sectors.
          </p>
        </section>

        {/* Experience Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold">
            What We Bring to the Table
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-3 text-gray-300">
            <li>
              3+ years of professional experience** in software development.
            </li>
            <li>
              Successfully delivered 3 industry-level projects, ensuring
              quality and timely results.
            </li>
            <li>
              Expertise in modern technologies like React, Next.js, Node.js,
              and Android development.
            </li>
            <li>
              A commitment to building innovative and scalable solutions.
            </li>
          </ul>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold">
            Our Vision
          </h2>
          <p className="mt-2 text-gray-300 leading-relaxed">
            To empower businesses with cutting-edge digital solutions that
            enhance their growth and efficiency. We believe in creating
            technology that makes a difference.
          </p>
        </section>

        {/* Call to Action */}
      </div>
      <Contact />
    </div>
  );
};

export default AboutPage;
