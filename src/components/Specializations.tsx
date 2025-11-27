import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Leaf, 
  Droplets, 
  Wind, 
  Activity, 
  Pill, 
  Heart 
} from "lucide-react";

const treatments = [
  {
    icon: Droplets,
    title: "Panchakarma",
    description: "Complete detoxification and rejuvenation therapy to cleanse and restore body balance",
  },
  {
    icon: Activity,
    title: "Ksharsutra",
    description: "Ancient surgical technique for treating fistulas and hemorrhoids naturally",
  },
  {
    icon: Wind,
    title: "Nasya",
    description: "Therapeutic nasal administration for respiratory and neurological wellness",
  },
  {
    icon: Leaf,
    title: "Acupuncture",
    description: "Traditional needle therapy for pain relief and energy balance",
  },
  {
    icon: Pill,
    title: "Herbal Medicines",
    description: "Customized natural formulations using time-tested Ayurvedic herbs",
  },
  {
    icon: Heart,
    title: "Lifestyle & Diet Counseling",
    description: "Personalized guidance for sustainable health and wellness practices",
  },
];

const Specializations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specializations" className="py-24 bg-background">
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
                Treatments & Therapies
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-4">
              Specialized Ayurvedic Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive holistic treatments combining ancient wisdom with proven therapeutic methods
            </p>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-border overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-herbal opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <treatment.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-foreground font-playfair mb-3 group-hover:text-primary transition-colors duration-300">
                      {treatment.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specializations;
