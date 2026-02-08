import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  description?: string;
}
export function PricingCard({
  title,
  price,
  features,
  isPopular = false,
  description
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02
      }}
      className={`relative p-8 rounded-2xl h-full flex flex-col ${isPopular ? 'bg-white border-2 border-gold-500 shadow-xl z-10' : 'bg-white border border-cream-200 shadow-sm'}`}>

      {isPopular &&
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      }

      <div className="mb-8 text-center">
        <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-2">
          {title}
        </h3>
        <div className="text-3xl font-bold text-charcoal-900 mb-2">{price}</div>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) =>
        <li key={idx} className="flex items-start text-sm text-charcoal-800">
            <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        )}
      </ul>

      <Link
        to="/book-a-call"
        className={`w-full block text-center py-3 rounded-md font-medium transition-all ${isPopular ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-md' : 'bg-cream-100 text-charcoal-900 hover:bg-cream-200'}`}>

        Book a Strategy Call
      </Link>
    </motion.div>);

}