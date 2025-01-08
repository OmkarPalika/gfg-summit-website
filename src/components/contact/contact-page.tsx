import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils/animations";
import { MetaTags } from "@/components/seo/meta-tags";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const socialMediaLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564521370041",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/gfgsc_anits",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/gfgsc_anits/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gfgsc-anits/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@gfgsc-anits",
  },
];

export function ContactPage() {
  return (
    <>
      <MetaTags
        title="Contact Us | GFG SC Summit 2025"
        description="Get in touch with the GFG SC Summit team. We're here to answer your questions about registration, schedule, accommodation, and more."
      />
      <main className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help!
            </p>
          </motion.div>

          {/* Contact Info & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section aria-label="Contact Information">
              <ContactInfo />
            </section>
            <section aria-label="Contact Form">
              <ContactForm />
            </section>
          </div>

          {/* Follow Us Section */}
          <div className="mt-16 flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest news and events.
            </p>
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
        </div>
      </main>
    </>
  );
}
