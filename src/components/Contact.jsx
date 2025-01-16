import React, { useState } from 'react';
import { Send, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { saveMessage } from "../firebase/database";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing again
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await saveMessage(formData); // Save message to Firebase
      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again."
      });
      console.error("Error saving message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub Profile",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn Profile",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      href: "https://instagram.com/yourusername",
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram Profile",
      gradient: "from-pink-500 to-purple-700"
    }
  ];

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className=" mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Connect
            </h2>
            <p className="text-xl text-blue-100">
              Have a question or want to work together? Drop us a message and we'll get back to you as soon as possible.
            </p>
            
            <div className="flex items-center space-x-2 text-blue-100">
              <Mail className="w-6 h-6" />
              <a 
                href="mailto:sahanwsk@gmail.com"
                className="text-xl hover:text-pink-300 transition-colors duration-300"
                aria-label="Email us at sahanwsk@gmail.com"
              >
                sahanwsk@gmail.com
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`
                    p-3 rounded-full bg-gradient-to-r ${link.gradient}
                    transform hover:scale-110 transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300
                  `}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition duration-150 ease-in-out"
                  required
                  aria-required="true"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition duration-150 ease-in-out"
                  required
                  aria-required="true"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition duration-150 ease-in-out resize-y"
                  required
                  aria-required="true"
                  placeholder="Your message here..."
                />
              </div>

              {status.message && (
                <div
                  role="alert"
                  className={`p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full px-6 py-3 rounded-lg text-white font-medium
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  hover:from-blue-500 hover:to-indigo-500
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  transform transition-all duration-300
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}
                `}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;