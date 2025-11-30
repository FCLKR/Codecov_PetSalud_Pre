import React, { useState } from "react";
import testimonialsData from "../data/testimonials.json"; // Ajusta la ruta según la ubicación del archivo

function Testimonials() {
  const [testimonials] = useState(testimonialsData);

  return (
    <section className="p-10 text-[#4B4B4B] text-center">
      <h2 className="text-3xl font-bold">Testimonios</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-5 border border-[#EBEBEB] rounded-lg w-80 shadow-lg flex flex-col items-center text-center">
            <img className="w-32 h-32 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
            <p className="mt-4 text-[#4B4B4B] font-semibold">{testimonial.text}</p>
            <h3 className="mt-4 font-bold text-[#4FC3F7]">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
