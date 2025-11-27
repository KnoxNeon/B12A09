import { Calendar, ChevronRight } from 'lucide-react';

export default function News() {
  const updates = [
    {
      date: "Yesterday",
      title: "Warzone™: Matchmaking Test Update",
      description: "We're rolling out a new matchmaking test in select regions to improve queue times and skill balancing. Early results show 23% faster queues in Trios!",
      badge: "Gameplay",
      badgeColor: "bg-red-600",
      gradientFrom: "from-cyan-500/20",
      gradientTo: "to-emerald-500/20",
    },
    {
      date: "3 days ago",
      title: "Apex Legends Season 23: Chaos Theory Launch",
      description: "New Legend 'Conduit', reworked King's Canyon, and the highly requested EVA-8 buff are now live. Welcome to the new era of Apex!",
      badge: "Season Launch",
      badgeColor: "bg-purple-600",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-pink-500/20",
    },
    {
      date: "5 days ago",
      title: "Expedition 33 for Game of the Year",
      description: "Nominate Clair Obscur Expedition 33 for the GOTY awards in gameawards.com starting today to December 21st. Thank you for your love.",
      badge: "Promotion",
      badgeColor: "bg-sky-500",
      gradientFrom: "from-sky-500/20",
      gradientTo: "to-blue-600/20",
    },
    {
      date: "1 week ago",
      title: "CS2 Anti-Cheat System v4.1 Deployed",
      description: "Over 12,000 accounts banned in the first 24 hours. Our new kernel-level detection is now active on all platforms.",
      badge: "Security",
      badgeColor: "bg-orange-600",
      gradientFrom: "from-orange-500/20",
      gradientTo: "to-red-500/20",
    },
    
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">
          Latest Game Updates
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${update.gradientFrom} ${update.gradientTo} border border-gray-800 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20`}
            >
             
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-6">
               
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{update.date}</span>
                </div>

              
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                  {update.title}
                </h3>

               
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {update.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${update.badgeColor}`}>
                    {update.badge}
                  </span>

                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-xl">
            View All Patch Notes
          </button>
        </div>
      </div>
    </section>
  );
}