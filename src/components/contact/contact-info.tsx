import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
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

const socialMediaLinks = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61564521370041'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://x.com/gfgsc_anits'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/gfgsc_anits/'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/gfgsc-anits/'
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: "https://www.youtube.com/@gfgsc-anits"
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

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialMediaLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-emerald-600" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
