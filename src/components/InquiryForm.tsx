import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS configuration - replace these with your actual IDs from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_wfpdbbd';
const EMAILJS_TEMPLATE_ID = 'template_691qa98';
const EMAILJS_PUBLIC_KEY = 'YWvsUBbfSYnYX07T_';

export const InquiryForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current?.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5" id="inquiry">
      <h3 className="text-2xl font-bold mb-6">Inquiry Form</h3>
      {status === 'success' ? (
        <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-center">
          Thank you for your inquiry! We will get back to you soon.
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl text-center text-sm">
              Failed to send inquiry. Please try again or call us directly.
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input name="name" required type="text" className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input name="email" required type="email" className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="your@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input name="phone" required type="tel" className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Your Phone Number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea name="message" required rows={4} className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="How can we help you?"></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            {status === 'submitting' ? 'Sending...' : 'Inquire Now'}
          </button>
        </form>
      )}
    </div>
  );
};
