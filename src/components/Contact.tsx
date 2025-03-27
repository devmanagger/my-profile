import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  sectionRef: (node?: Element | null) => void;
}

export const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const [messageStatus, setMessageStatus] = useState<{ type: string; message: string }>({
    type: '',
    message: '',
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
        to_email: 'maickcupper@gmail.com',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setMessageStatus({
        type: 'success',
        message: 'Message sent successfully!',
      });
      form.reset();
    } catch (error) {
      setMessageStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div {...fadeInUp} className="flex items-center gap-2 mb-12">
          <MessageSquare className="w-6 h-6 text-blue-500" />
          <h2 className="text-3xl font-bold">Contact</h2>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {messageStatus.message && (
            <div
              className={`p-4 rounded-lg ${
                messageStatus.type === 'success'
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
              }`}
            >
              {messageStatus.message}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              rows={4}
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};