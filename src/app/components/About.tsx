import { motion } from 'motion/react';
import { Target, Heart, Lightbulb, Rocket } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower, support, and elevate women in computing through mentorship, leadership opportunities, skill development, and a strong professional network.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Building a safe, inclusive, and encouraging space where women in tech collaborate, grow confidently, and inspire one another to achieve excellence.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Promoting technical excellence by organizing workshops, coding sessions, research initiatives, and hackathons led by and for women in computing.',
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Creating pathways to internships, research roles, leadership positions, and industry connections that strengthen women’s representation in technology.',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]" />
      </div>

      {/* College Image Background with Transparency */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/college.jpg" 
          alt="College Background" 
          className="w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-bold">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF]">ACM-W</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ACM-W supports, celebrates, and advocates internationally for the full engagement 
            of women in all aspects of the computing field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-xl shrink-0">
                      <Icon className="w-6 h-6 text-[#7B2FF7]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-1 font-semibold">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About ACM Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-3xl blur-xl opacity-50" />
          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl text-gray-900 mb-4 font-bold">
                  What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF]">ACM-W?</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  ACM-W is the women-focused initiative of the Association for Computing Machinery dedicated to supporting, celebrating, and advocating for women in computing worldwide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The ACM-W Chapter at Vignan Institute nurtures talent by providing mentorship programs, technical events, networking platforms, and leadership opportunities that empower women to thrive in computer science and related fields.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border border-gray-200 rounded-2xl p-6 text-center shadow-md">
                  <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] mb-2 font-bold">50+</div>
                  <div className="text-gray-600 text-sm font-medium">Countries</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border border-gray-200 rounded-2xl p-6 text-center shadow-md">
                  <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] mb-2 font-bold">100K+</div>
                  <div className="text-gray-600 text-sm font-medium">Members</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border border-gray-200 rounded-2xl p-6 text-center shadow-md">
                  <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] mb-2 font-bold">75+</div>
                  <div className="text-gray-600 text-sm font-medium">Years</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border border-gray-200 rounded-2xl p-6 text-center shadow-md">
                  <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] mb-2 font-bold">1000+</div>
                  <div className="text-gray-600 text-sm font-medium">Chapters</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}