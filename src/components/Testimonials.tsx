import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Shrestha",
    location: "Kathmandu",
    text: "Dr. Lamsal's Panchakarma treatment completely transformed my health. After years of chronic digestive issues, I finally found relief through his natural approach and expertise.",
  },
  {
    name: "Sunita Karki",
    location: "Bhaktapur",
    text: "The personalized care and attention I received was exceptional. Dr. Lamsal took time to understand my condition and created a treatment plan that truly worked for me.",
  },
  {
    name: "Mohan Thapa",
    location: "Lalitpur",
    text: "I was skeptical about Ayurvedic treatment at first, but Dr. Lamsal's knowledge and genuine care convinced me. The herbal medicines and lifestyle guidance have made a huge difference.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-primary font-semibold text-lg tracking-wider uppercase">
                Patient Stories
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from those who have benefited from holistic Ayurvedic care
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-medium">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground font-playfair">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
