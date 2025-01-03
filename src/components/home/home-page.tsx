import { Hero } from './hero';
import { EventHighlights } from './event-highlights';
import { CountdownTimer } from './countdown-timer';
import { MetaTags } from '@/components/seo/meta-tags';

export function HomePage() {
  return (
    <>
      <MetaTags
        title="GFG Summit 2025 | Empowering Tomorrow's Tech Innovators"
        description="Join us at the GFG Student Chapters Summit 2025 for three days of learning, networking, and innovation. Experience workshops, competitions, and industry visits."
      />
      <main>
        <Hero />
        <EventHighlights />
        <CountdownTimer />
      </main>
    </>
  );
}