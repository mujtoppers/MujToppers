import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya",
    text: "This platform revolutionized my study routine and made exam prep so much easier!",
    image: "/AboutUsCards/1.png", // Replace with actual image path
    role: "Student",
  },
  {
    name: "Rohit",
    text: "I found everything I needed in one place. Highly recommended for every student!",
    image: "/AboutUsCards/2.png", // Replace with actual image path
    role: "Graduate",
  },
  {
    name: "Sanya",
    text: "The best learning experience! The resources are top-notch and incredibly helpful.",
    image: "/AboutUsCards/3.png", // Replace with actual image path
    role: "Educator",
  },
];

export default function Testimonials() {
  return (
    <motion.div
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-gray-300"
                />
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
              <h4 className="text-lg font-bold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
