import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Building2 } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";

const Clinic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clinic" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
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
                Visit Our Clinic
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-4">
              Samata Ayurved Upachar Kendra
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A peaceful sanctuary for natural healing in the heart of Kathmandu
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Clinic Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img
                  src={clinicImage}
                  alt="Samata Ayurved Upachar Kendra Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -z-10 -top-6 -left-6 w-3/4 h-3/4 bg-primary/10 rounded-2xl" />
            </motion.div>

            {/* Clinic Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 order-1 md:order-2"
            >
              {/* Clinic Name */}
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-playfair mb-2">
                      Clinic Name
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Samata Ayurved Upachar Kendra
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-playfair mb-2">
                      Location
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Jorpati, Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-playfair mb-2">
                      Contact
                    </h3>
                    <a 
                      href="tel:9851061380" 
                      className="text-lg text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      +977 9851061380
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-playfair mb-2">
                      Clinic Hours
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Open Daily - By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clinic;
