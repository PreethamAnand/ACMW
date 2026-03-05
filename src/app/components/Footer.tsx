import { motion } from 'motion/react';
import { Heart, Linkedin, Twitter, Instagram, Mail, Phone, ChevronRight, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Leadership Programs',
    'Technical Events',
    'Product Management',
    'Workshops & Conferences',
    'Mentorship',
    'Community Outreach',
  ];

  const socialLinks = [
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Instagram, link: '#', label: 'Instagram' },
    { icon: Mail, link: 'mailto:acmw@vignan.edu', label: 'Email' },
    { icon: Phone, link: 'tel:+919876543210', label: 'Phone' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-10 pb-6 overflow-hidden bg-gradien4-to-b from-transparent to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - All in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* About Column with Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <img src="/acmwlogo.png" alt="ACM-W Logo" className="h-8 w-8 object-contain" />
              <img src="/vlogo.png" alt="Vignan Logo" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="text-gray-900 text-base font-semibold">ACM-W Chapter</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Empowering women in computing through education, networking, and mentorship at Vignan Institute.
            </p>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-gray-900 mb-3 font-semibold text-base">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <h3 className="text-gray-900 mb-3 font-semibold text-base">Our Services</h3>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#7B2FF7] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.6 }}
          >
            <h3 className="text-gray-900 mb-3 font-semibold text-base">Connect With Us</h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.link}
                    aria-label={social.label}
                    className="flex items-center gap-2 p-2 bg-gradient-to-br from-purple-50 to-cyan-50 border border-gray-200 rounded-lg hover:from-purple-100 hover:to-cyan-100 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-gray-700 group-hover:text-[#7B2FF7] transition-colors" />
                    <span className="text-xs text-gray-600 group-hover:text-gray-900">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-gray-900 mb-3 font-semibold text-base">Visit Us</h3>
            <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden border border-gray-300 shadow-md">
              <iframe
                src="https://www.google.com/maps/place/Vignan+Institute+of+Technology+and+Science+(VGNT)/@17.3446318,78.7192931,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb0b34520e1c4f:0xdff09e04f19241ea!8m2!3d17.3446267!4d78.7218734!16s%2Fm%2F04jb875?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={true}
                loading="lazy"
                title="Vignan Institute Location"
              />
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#7B2FF7] mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 leading-relaxed">
                Near Ramoji Film City, Deshmuki Village, Yadadri, Bhuvanagiri, Telangana 508284
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600"
        >
          <p>
            © {new Date().getFullYear()} ACM-W Chapter, Vignan Institute. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by ACM-W Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
