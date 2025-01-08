import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/utils/animations';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gfganits@gmail.com',
    href: 'mailto:gfganits@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8897892720',
    href: 'tel:+918897892720'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'ANITS, Visakhapatnam',
    href: 'https://maps.app.goo.gl/WbKbqYAMw6s8BVWG6'
  }
];

export function ContactInfo() {
  return (
    <motion.div {...fadeInLeft} className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions about the event? We're here to help! Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Icon className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{label}</p>
              <p className="text-gray-600">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
