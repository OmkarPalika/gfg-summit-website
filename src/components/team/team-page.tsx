import { TeamGrid } from "./team-grid";
import { TeamHeader } from "./team-header";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils/animations";
import { MetaTags } from "@/components/seo/meta-tags";
import { coreTeam, advisoryBoard } from "@/lib/data/team-data";

export function TeamPage() {
  return (
    <>
      <MetaTags
        title="Our Team | GFG SC Summit 2025"
        description="Meet the dedicated team behind GFG SC Summit 2025. Learn about our Advisory Board and Core Team working to create an exceptional experience."
      />
      <main className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <TeamHeader />
          </motion.div>

          {/* Advisory Board Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Advisory Board
            </h2>
            <TeamGrid team={advisoryBoard} />
          </section>

          {/* Core Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 text-center py-4">
              Core Team
            </h2>
            <TeamGrid team={coreTeam} />
          </section>
        </div>
      </main>
    </>
  );
}
