import { useState } from 'react';
import { RegistrationForm } from './registration-form';
import { RegistrationSummary } from './registration-summary';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/utils/animations';
import type { RegistrationForm as RegistrationFormType } from '@/lib/types/registration';
import { MetaTags } from '@/components/seo/meta-tags';

export function RegistrationPage() {
  const [step, setStep] = useState<'form' | 'summary'>('form');
  const [formData, setFormData] = useState<RegistrationFormType | null>(null);

  const handleFormSubmit = (data: RegistrationFormType) => {
    setFormData(data);
    setStep('summary');
  };

  return (
    <>
      <MetaTags
        title="Register | GFG SC Summit 2025"
        description="Register for GFG SC Summit 2025. Join hundreds of tech enthusiasts for workshops, competitions, and networking opportunities."
      />
      <main className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Register for GFG SC Summit</h1>
            <p className="text-xl text-gray-600">Join us for an amazing learning experience</p>
          </motion.div>
  
          {step === 'form' && <RegistrationForm onSubmit={handleFormSubmit} />}
          {step === 'summary' && formData && (
            <RegistrationSummary 
              data={formData} 
              onEdit={() => setStep('form')} 
            />
          )}
        </div>
    </>
    </main>
  );
}