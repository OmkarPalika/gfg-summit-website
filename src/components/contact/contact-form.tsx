import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils/animations";
import { toast } from "react-hot-toast";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Send email using mailto link
      const subject = `Contact Form: ${formData.name}`;
      const body = `
        Name: ${formData.name}
        Email: ${formData.email}

        Message:
        ${formData.message}
      `;

      window.location.href = `mailto:gfganits@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setStatus("sent");
      toast.success("Email client opened! Please send the email to complete.");

      // Reset status after 2 seconds
      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      toast.error("Failed to open email client. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <motion.form
      {...fadeInUp}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 hover:border-gray-400 transition duration-200"
            autoComplete="name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 hover:border-gray-400 transition duration-200"
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 hover:border-gray-400 transition duration-200"
            autoComplete="off"
          />
        </div>

        <Button
          type="submit"
          disabled={status !== "idle"}
          className={`w-full ${
            status !== "idle" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {status === "idle" && "Send Message"}
          {status === "sending" && "Opening Email Client..."}
          {status === "sent" && "Email Client Opened!"}
        </Button>
      </div>
    </motion.form>
  );
}
