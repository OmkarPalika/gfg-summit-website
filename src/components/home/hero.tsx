import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppNavigation } from '@/lib/hooks/use-navigation';

export function Hero() {
  const navigation = useAppNavigation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-100">
      <div className="absolute inset-0 bg-grid-emerald-100/50 bg-[size:20px_20px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">GFG Student Chapters</span> Summit
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering Tomorrow's Tech Innovators
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group"
              onClick={navigation.goToRegistration}
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={navigation.goToSchedule}
            >
              Learn More
            </Button>
          </div>

          {/* Event Details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Date', value: 'March 14-16, 2025' },
              { label: 'Location', value: 'ANITS, Visakhapatnam' },
              { label: 'Participants', value: '500+ Students' },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-gray-500 text-sm mb-2">{item.label}</h3>
                <p className="text-gray-900 font-semibold text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}