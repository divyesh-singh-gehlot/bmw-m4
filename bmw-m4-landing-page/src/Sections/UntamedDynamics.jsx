// components/UntamedDynamics.jsx
import React from 'react';
import img1 from "../assets/Images/Untamed Dynamics/img1.webp";
import img2 from "../assets/Images/Untamed Dynamics/img2.avif";
import img3 from "../assets/Images/Untamed Dynamics/img3.avif";
import img4 from "../assets/Images/Untamed Dynamics/img4.webp";
import img5 from "../assets/Images/Untamed Dynamics/img5.avif";

const UntamedDynamics = () => {
  return (
    <section className="bg-[#111111] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-antonio tracking-wider uppercase">Untamed Dynamics.</h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-gray-300 font-sans">
            The low-slung silhouette of the BMW M4 Competition conveys irresistible aesthetics and concentrated power.
            The front is characterized by the expressive M kidney grille and new, iconic LED graphics in the headlights.
          </p>
        </div>

        {/* Image Layout */}
        <div className="grid grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
          {/* Layout based on visual pattern */}
          <div className="col-span-2 row-span-2">
            <img src={img1} className="w-full h-full object-cover rounded-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl" alt="BMW Interior" />
          </div>
          <div className="col-span-2">
            <img src={img2} className="w-full h-full object-cover rounded-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl" alt="BMW Front" />
          </div>
          <div className="col-span-2 row-span-2">
            <img src={img3} className="w-full h-full object-cover rounded-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl" alt="BMW Taillight" />
          </div>
          <div className="col-span-3">
            <img src={img4} className="w-full h-full object-cover rounded-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl" alt="BMW Seats" />
          </div>
          <div className="col-span-3">
            <img src={img5} className="w-full h-full object-cover rounded-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl" alt="BMW Top View" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default UntamedDynamics;
