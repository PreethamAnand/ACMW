import { motion } from 'motion/react';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Best Student Chapter 2025',
      organization: 'ACM India',
      description: 'Awarded for outstanding contributions to the computing community',
      year: '2025',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: Award,
      title: 'Excellence in Diversity',
      organization: 'ACM-W Global',
      description: 'Recognized for promoting diversity and inclusion in technology',
      year: '2025',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: Medal,
      title: 'Hackathon Champions',
      organization: 'National Tech Fest',
      description: 'First place in the national-level hackathon competition',
      year: '2024',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Star,
      title: 'Community Impact Award',
      organization: 'Tech for Good',
      description: 'Honored for impactful community outreach programs',
      year: '2024',
      color: 'from-green-400 to-emerald-400',
    },
  ];

  const stats = [
    { label: 'Awards Won', value: '12+', icon: Trophy },
    { label: 'Workshops Conducted', value: '30+', icon: Award },
    { label: 'Students Mentored', value: '500+', icon: Star },
    { label: 'Industry Partners', value: '15+', icon: Medal },
  ];

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]" />
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF]">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence and recognizing our journey of success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl blur-lg group-hover:blur-xl transition-all opacity-50" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 text-center hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-lg">
                  <Icon className="w-8 h-8 text-[#7B2FF7] mx-auto mb-3" />
                  <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] mb-2 font-bold">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-2xl shrink-0 shadow-md`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl text-gray-900 font-semibold">{achievement.title}</h3>
                        <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF] mb-3 font-medium">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
