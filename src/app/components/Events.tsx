import { motion } from 'motion/react';
import CircularGallery from './CircularGallery';

export function Events() {
  const pastEvents = [
    {
      title: 'HackHer 2025',
      date: 'December 2025',
      participants: '150',
      image: 'https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzIzNDc3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'AI & ML Workshop',
      date: 'November 2025',
      participants: '80',
      image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NzIzNDc3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Career Fair 2025',
      date: 'October 2025',
      participants: '200',
      image: 'https://images.unsplash.com/photo-1766766464419-ea9d60543aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbmV0d29ya2luZyUyMGV2ZW50fGVufDF8fHx8MTc3MjM0Nzc2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Web Dev Bootcamp',
      date: 'September 2025',
      participants: '60',
      image: 'https://images.unsplash.com/photo-1616992510024-f1293eb00e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHRlY2glMjBjb25mZXJlbmNlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcyMzQ3NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const pastEventsGallery = pastEvents.map(event => ({
    image: event.image,
    text: event.title
  }));

  return (
    <section id="events" className="relative pt-12 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-bold">
              Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#00F5FF]">Events</span>
            </h2>
            <p className="text-xl text-gray-600">Celebrating our successful events</p>
          </div>

          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              items={pastEventsGallery}
              bend={1}
              textColor="#000000"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
