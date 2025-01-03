import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { calculateGroupPrice } from '@/lib/utils/pricing';
import { useAppNavigation } from '@/lib/hooks/use-navigation';

export function PricingCalculator() {
  const [groupSize, setGroupSize] = useState(1);
  const { goToRegistration } = useAppNavigation();
  const pricePerPerson = calculateGroupPrice(groupSize);
  const totalPrice = groupSize * pricePerPerson;

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
            max="10"
            value={groupSize}
            onChange={(e) => setGroupSize(parseInt(e.target.value))}
            className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>1</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Selected Size</p>
              <p className="text-2xl font-bold text-gray-900">{groupSize} people</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Price per Person</p>
              <p className="text-2xl font-bold text-emerald-600">₹{pricePerPerson}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Total Price</p>
              <p className="text-3xl font-bold text-gray-900">₹{totalPrice}</p>
            </div>
            <Button 
              className="w-full"
              onClick={() => goToRegistration()}
            >
              Book Group Tickets
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}