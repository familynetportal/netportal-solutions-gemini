"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: "Contact Us - Netportal Solutions",
  description: "Get in touch with Netportal Solutions for a consultation on your AI and digital transformation needs.",
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="bg-brand-light dark:bg-brand-dark animate-fade-in">
      {/* Page Header */}
      <header className="bg-white dark:bg-zinc-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-secondary dark:text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            We are here to answer your questions and help you start your AI journey. Reach out to us today.
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-brand-secondary dark:text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-zinc-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-zinc-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-zinc-700"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-secondary dark:text-white">Contact Information</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                You can also reach us through the following channels. We look forward to connecting with you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-brand-primary dark:text-accent-cyan mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:info@netportalsolutions.com" className="text-gray-600 dark:text-gray-300 hover:underline">info@netportalsolutions.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-brand-primary dark:text-accent-cyan mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-brand-primary dark:text-accent-cyan mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 AI Avenue, Innovation City, 54321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
