import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Users, Leaf } from "lucide-react";

const Counter = ({ end, duration = 2, label }: { end: number; duration?: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-primary font-playfair mb-2">
        {count}+
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
                About Dr. Lamsal
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair mb-4">
              Your Trusted Ayurvedic Healer
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-large relative">
                <div className="absolute inset-0 bg-gradient-herbal opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">

                  <img src="./basudev1.png" alt="" />
                  {/* <div className="text-center p-8">
                    <Leaf className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">Dr. Basudev Lamsal</p>
                  </div> */}
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/10 rounded-2xl" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                Dr. Basudev Lamsal is a highly experienced Ayurvedic Doctor (Degree / License No.:BAMS,IOA ,NSU (1112) MHED.TU.)
                specializing in <span className="text-primary font-semibold">Ayurved Chikitsa</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 20 years of dedicated practice, he has successfully treated patients from multiple
                cities across Nepal using holistic, natural, and time-tested healing methods rooted in
                ancient Ayurvedic wisdom.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His approach combines traditional Ayurvedic treatments with personalized care, ensuring
                each patient receives the most effective and natural healing path.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-card p-8 rounded-2xl shadow-medium"
          >
            <Counter end={20} label="Years Experience" />
            <Counter end={10000} label="Patients Treated" />
            <div className="text-center">
              <div className="text-5xl font-bold text-primary font-playfair mb-2 flex items-center justify-center gap-2">
                <Leaf className="w-10 h-10" />
              </div>
              <div className="text-muted-foreground">Ayurvedic Specialist</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
