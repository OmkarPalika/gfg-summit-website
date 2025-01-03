import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { pricingTiers } from './data/pricing-tiers';

interface PricingCalculatorProps {
  onSelect: () => void;
}

export function PricingCalculator({ onSelect }: PricingCalculatorProps) {
  const [groupSize, setGroupSize] = useState(1);
  const tier = pricingTiers.find(t => t.size === groupSize) || pricingTiers[0];
  const totalPrice = tier.pricePerPerson * groupSize;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Group Pricing Calculator</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="group-size" className="block text-sm font-medium text-gray-700 mb-2">
            Group Size
          </label>
          <input
            type="range"
            id="group-size"
            min="1"
            max="4"
            value={groupSize}
            onChange={(e) => setGroupSize(parseInt(e.target.value))}
            className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>1</span>
            <span>4</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Selected Size</p>
              <p className="text-2xl font-bold text-gray-900">
                {groupSize} {groupSize === 1 ? 'person' : 'people'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Price per Person</p>
              <p className="text-2xl font-bold text-emerald-600">
                ₹{tier.pricePerPerson}
              </p>
            </div>
          </div>
          
          {tier.savings > 0 && (
            <div className="mb-4 p-2 bg-emerald-50 rounded-lg text-center">
              <p className="text-emerald-600 font-medium">
                Save ₹{tier.savings} with group pricing!
              </p>
            </div>
          )}
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Total Price</p>
              <p className="text-3xl font-bold text-gray-900">₹{totalPrice}</p>
            </div>
            <Button onClick={onSelect} className="w-full">
              Book Group Tickets
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}