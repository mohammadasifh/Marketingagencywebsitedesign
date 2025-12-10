import { motion } from 'motion/react';
import { Sparkles, Layout, TrendingUp, Megaphone, Palette, Code } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Creating unique brand identities that capture your essence and resonate with your audience.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Layout,
      title: 'Web Design',
      description: 'Stunning, responsive websites that combine beautiful aesthetics with seamless functionality.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web solutions built with cutting-edge technology for optimal performance.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that amplify your reach and drive real results.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Boost your visibility and climb search rankings with our proven SEO strategies.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Creative Strategy',
      description: 'Innovative strategies that transform your vision into compelling brand experiences.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-gray-900 mb-4">
            What We Do Best
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive solutions that drive growth and create lasting impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <service.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.span
                className="text-transparent bg-gradient-to-r bg-clip-text inline-flex items-center gap-2"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
