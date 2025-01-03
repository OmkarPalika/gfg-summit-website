import { motion } from 'framer-motion';
import { GROUP_DISCOUNTS } from '@/lib/utils/pricing';

export function GroupPricingTable() {
  return (
    <div className="overflow-hidden bg-white rounded-2xl shadow-lg">
      <div className="px-6 py-4 bg-emerald-50">
        <h3 className="text-lg font-semibold text-emerald-900">Group Pricing</h3>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Group Size</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price per Person</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
          </tr>
        </thead>
        <tbody>
          {GROUP_DISCOUNTS.map(({ size, pricePerPerson, label }) => (
            <motion.tr
              key={size}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-b border-gray-50 hover:bg-gray-50"
            >
              <td className="px-6 py-4 text-sm text-gray-900">{size} {size === 6 ? 'or more' : ''}</td>
              <td className="px-6 py-4 text-sm text-gray-900">₹{pricePerPerson}</td>
              <td className="px-6 py-4 text-sm font-medium text-emerald-600">{label}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}