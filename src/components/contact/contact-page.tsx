import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/utils/animations';
import { MetaTags } from '@/components/seo/meta-tags';

export function ContactPage() {
  return (
    <>
      <MetaTags
          title="Contact Us | GFG SC Summit 2025"
          description="Get in touch with the GFG SC Summit team. We're here to answer your questions about registration, schedule, accommodation, and more."
        />
      <main className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}