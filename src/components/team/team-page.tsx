import { TeamGrid } from './team-grid';
import { TeamHeader } from './team-header';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/utils/animations';
import { MetaTags } from '@/components/seo/meta-tags';

export function TeamPage() {
  return (
    <>
      <MetaTags
        title="Our Team | GFG SC Summit 2025"
        description="Meet the dedicated team behind GFG SC Summit 2025. Learn about our organizers, technical leads, and event coordinators working to create an exceptional experience."
      />
      <main className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <TeamHeader />
          </motion.div>
          <TeamGrid />
        </div>
      </main>
    </>
  );
}