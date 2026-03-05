import { motion } from 'motion/react';
import { ThreeBackground } from './ThreeBackground';
import DecryptedText from './DecryptedText';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4">
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 backdrop-blur-sm"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] font-medium text-sm">
                ✨ Empowering Women in Technology
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-6xl text-gray-900 leading-tight font-bold">
                <span className="block">Welcome to</span>
                <span className="block">
                  <DecryptedText
                    text="ACM-W Vignan"
                    speed={50}
                    maxIterations={9}
                    animateOn="view"
                    revealDirection="start"
                    sequential={true}
                    useOriginalCharsOnly={true}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-purple-400 to-purple-600"
                  />
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                A vibrant community dedicated to supporting, celebrating, and advocating for women in computing. Join us in shaping the future of technology.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-[#7B2FF7] to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-2">
                Join Our Community <span>→</span>
              </button>
              <button 
                onClick={() => scrollToSection('#events')}
                className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300 font-medium"
              >
                Explore Events
              </button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-12 pt-8"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-purple-600">
                  500+
                </div>
                <div className="text-gray-600 text-sm mt-1">Members</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-purple-600">
                  50+
                </div>
                <div className="text-gray-600 text-sm mt-1">Events</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-purple-600">
                  15+
                </div>
                <div className="text-gray-600 text-sm mt-1">Partners</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-8 bg-gradient-to-b from-[#7B2FF7] to-purple-600 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            </div>

            {/* Merged Event Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Banner Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src="/Up_Coming_Events/up_coming.jpeg"
                  alt="Upcoming Events Banner"
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-[#7B2FF7] to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
                  Register
                </button>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">Women in Tech Summit 2025</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full">Summit</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Annual summit celebrating women in technology with keynote speakers and panel discussions
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span> January 15, 2025
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🕐</span> 10:00 AM - 4:00 PM
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span> Main Auditorium
                    </div>
                  </div>
                </div>

                {/* Small Bottom Info */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Join us for an inspiring day of learning, networking, and celebrating women in tech.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
