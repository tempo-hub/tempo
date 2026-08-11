"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          from: "",
          to: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-bold text-slate-700">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-bold text-slate-700">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
            Mobile Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter mobile number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Travel Details */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="from" className="mb-2 block text-sm font-bold text-slate-700">
            Pickup Location
          </label>
          <input
            id="from"
            name="from"
            type="text"
            placeholder="e.g. Delhi"
            value={formData.from}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="to" className="mb-2 block text-sm font-bold text-slate-700">
            Destination
          </label>
          <input
            id="to"
            name="to"
            type="text"
            placeholder="e.g. Jaipur"
            value={formData.to}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your trip, number of passengers, travel dates, vehicle requirements, or any other questions..."
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-black text-slate-950 transition hover:opacity-90 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-4 w-4" />
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
