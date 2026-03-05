import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedTooltip } from './ui/animated-tooltip';

export function Team() {
  const facultyAdvisors = [
    {
      name: 'Dr J.R.V. Jenny',
      role: 'Head of the Department-CSE(AI&ML)',
      department: 'CSE-(AI&ML)',
      specialization: 'Artificial Intelligence & Machine Learning',
      image: '/faculty/hod.jpeg',
      // email: 'priya.sharma@vignan.ac.in',
    },
    {
      name: 'Prof. Godwin',
      role: 'Faculty Coordinator',
      department: 'CSE - (AI&ML) ',
      specialization: 'Artificial Intelligence & Machine Learning',
      image: '/faculty/sir.jpeg',
      // email: 'anjali.reddy@vignan.ac.in',
    },
  ];

const studentLeaders = [
    {
      name: 'CH. Vijayasri',
      role: 'Chair',
      designation: 'III Year CSM',
      image: '/students/chair.jpg',
    },
    {
      name: 'K. Vidhya Hasini',
      role: 'Vice-Chair',
      designation: 'III Year CSM',
      image: '/students/wise-chair.jpg',
    },
    {
      name: 'D. Rishitha',
      role: 'Treasurer',
      designation: 'II Year IT',
      image: '/students/treasurer.jpg',
    },
    {
      name: 'K. Akshaya',
      role: 'Webmaster',
      designation: 'II Year CSE',
      image: '/students/webmaster.jpg',
    },
    {
      name: 'K. Deepika',
      role: 'Secretary',
      designation: 'III Year IT',
      image: '/students/secretary.jpg',
    },
    {
      name: 'K. Sai Kruthika',
      role: 'Membership Chair',
      designation: 'II Year CSE',
      image: '/students/member_chair.jpg',
    }
  ];

  const TeamMemberCard = ({ member, isFaculty = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
      <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="relative h-96 overflow-hidden">
          <ImageWithFallback
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl text-white mb-1 font-semibold">{member.name}</h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 font-medium text-sm mb-2">
              {member.role}
            </p>
            {isFaculty ? (
              <div className="text-xs text-gray-200 space-y-1">
                <div className="flex items-center gap-2">
                  <span>💼</span> {member.department}
                </div>
                <div className="flex items-center gap-2">
                  <span>🎓</span> {member.specialization}
                </div>
              </div>
            ) : (
              <div className="text-xs text-gray-200 flex items-center gap-2">
                <span>📚</span> {member.designation}
              </div>
            )}
          </div>
        </div>

        {/* Contact Button Below Card */}
        {!isFaculty && (
          <div className="p-4 text-center border-t border-gray-200">
            <a 
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        )}
        {isFaculty && (
          <div className="p-4 text-center border-t border-gray-200">
            <a 
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="team" className="relative pt-12 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-bold">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-purple-600">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated leaders and mentors driving innovation and empowerment in technology
          </p>
        </motion.div>

        {/* Faculty Advisors Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="text-2xl">👩‍🏫</span>
            <h3 className="text-2xl font-bold text-gray-900">Faculty Advisors</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAdvisors.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} isFaculty={true} />
            ))}
          </div>
        </div>

        {/* Student Leaders Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="text-2xl">💼</span>
            <h3 className="text-2xl font-bold text-gray-900">Student Leaders</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-row items-center justify-center mb-4 w-full"
          >
            <AnimatedTooltip 
              items={studentLeaders.map((member, index) => ({
                id: index + 1,
                name: member.name,
                designation: member.role,
                image: member.image,
              }))}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
