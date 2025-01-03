import { motion } from 'framer-motion';
import { GROUP_DISCOUNTS } from '@/lib/utils/pricing';

export function GroupPricingTable() {
  return (
    <div className="overflow-hidden bg-white rounded-2xl shadow-lg">
      <div className="px-6 py-4 bg-emerald-50">
        <h3 className="text-lg font-semibold text-emerald-900">Group Pricing</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Group Size
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Price per Person
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Total Savings
              </th>
            </tr>
          </thead>
          <tbody>
            {GROUP_DISCOUNTS.map(({ size, pricePerPerson }, index) => {
              const standardPrice = GROUP_DISCOUNTS[0].pricePerPerson;
              const savings = (standardPrice - pricePerPerson) * size;
              
              return (
                <motion.tr
                  key={size}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-50 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {size} {size === 6 ? 'or more' : ''}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-emerald-600">
                      ₹{pricePerPerson}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">
                      ₹{savings}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}