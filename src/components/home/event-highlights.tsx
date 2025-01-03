import { Lightbulb, Users, Trophy, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { EventCard } from './event-card';

const highlights = [
  {
    title: 'Keynote Sessions',
    description: 'Learn from industry experts and thought leaders about the latest tech trends and innovations.',
    icon: Lightbulb
  },
  {
    title: 'Workshops',
    description: 'Hands-on technical workshops covering cutting-edge technologies and development practices.',
    icon: Users
  },
  {
    title: 'Competitions',
    description: 'Showcase your skills in coding competitions and hackathons with exciting prizes.',
    icon: Trophy
  },
  {
    title: 'Industrial Visit',
    description: 'Experience real-world tech operations with guided tours of leading tech companies.',
    icon: Building
  }
];

export function EventHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Highlights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for three days of learning, networking, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <EventCard key={highlight.title} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}