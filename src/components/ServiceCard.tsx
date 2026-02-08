import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: BoxIcon;
  delay?: number;
}
export function ServiceCard({
  title,
  description,
  price,
  icon: Icon,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }}
      whileHover={{
        y: -5,
        boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      transition={{
        duration: 0.3
      }}
      className="bg-white p-8 rounded-xl shadow-sm border border-cream-200 h-full flex flex-col">

      <div className="w-12 h-12 bg-cream-100 rounded-lg flex items-center justify-center mb-6 text-gold-600">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 font-serif">{title}</h3>
      <p className="text-charcoal-800/80 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="pt-4 border-t border-cream-100">
        <span className="text-sm font-semibold text-gold-600 tracking-wide uppercase">
          {price}
        </span>
      </div>
    </motion.div>);

}