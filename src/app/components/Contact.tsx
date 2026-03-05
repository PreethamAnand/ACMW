import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'acmw',
      link: 'mailto:acmw',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 ',
      link: 'tel:+91',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Vignan Institute of Technology and Science, Deshmukhi, Telangana',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-12 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Get in Touch Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-bold">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF]">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                Have questions? We'd love to hear from you. Send us a message!
              </p>
            </motion.div>

            {/* Thank You Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl text-gray-900 mb-4 font-bold">
                  Thank You for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF]">Connecting</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We appreciate your interest in ACM-W. Your feedback and inquiries are important to us.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="p-2 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-lg group-hover:from-purple-200 group-hover:to-cyan-200 transition-colors">
                          <Icon className="w-5 h-5 text-[#7B2FF7]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{info.label}</p>
                          <p className="text-sm text-gray-600">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-lg">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-900 mb-2 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-900 mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-900 mb-2 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-900 mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={1}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] text-white rounded-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 font-semibold"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
